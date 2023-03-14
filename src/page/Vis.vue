
<template>
  <button @click="isBrush=!isBrush">框选</button>
  <div id="myNetwork" ref="container" class="myNetwork" @mousemove="mousemoveFn" @mousedown="mousedownFn" @mouseup="mouseupFn"></div>
</template>

<script setup>
import  {Network} from 'vis-network'
import { onMounted, ref } from 'vue'
import { DataSet } from 'vis-data'

const nodes = new DataSet([
  {id: 1, label: 'Node 1'},
  {id: 2, label: 'Node 2'},
  {id: 3, label: 'Node 3'},
  {id: 4, label: 'Node 4'},
  {id: 5, label: 'Node 5'}
]);

// create an array with edges
const edges = new DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 3 },
]);

const isBrush = ref(false)
// create a network
const data = {
  nodes: nodes,
  edges: edges,
};
const options = {
  layout: {randomSeed: 2},
  interaction:{
    dragView: false,
    multiselect: true,
    selectConnectedEdges: false,
  }
};

let canvas
let ctx
let network
let rect = {}, drag = false
let drawingSurfaceImageData
let container = ref()

function saveDrawingSurface() {
  drawingSurfaceImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreDrawingSurface() {
  ctx.putImageData(drawingSurfaceImageData, 0, 0);
}
function selectNodesFromHighlight() {
  // let fromX, toX, fromY, toY;
  let nodesIdInDrawing = [];
  let xRange = getStartToEnd(rect.startX, rect.w);
  let yRange = getStartToEnd(rect.startY, rect.h);

  let allNodes = nodes.get();
  console.log(allNodes)
  for (var i = 0; i < allNodes.length; i++) {
    let curNode = allNodes[i];
    let nodePosition = network.getPositions([curNode.id]);
    let nodeXY = network.canvasToDOM({x: nodePosition[curNode.id].x, y: nodePosition[curNode.id].y});
    if (xRange.start <= nodeXY.x && nodeXY.x <= xRange.end && yRange.start <= nodeXY.y && nodeXY.y <= yRange.end) {
      nodesIdInDrawing.push(curNode.id);
    }
  }
  network.selectNodes(nodesIdInDrawing);
}

function getStartToEnd(start, theLen) {
  return theLen > 0 ? {start: start, end: start + theLen} : {start: start + theLen, end: start};
}

function mousemoveFn(e) {
  if (drag && isBrush.value) {
    restoreDrawingSurface();
    rect.w = (e.pageX - container.value.offsetLeft) - rect.startX;
    rect.h = (e.pageY - container.value.offsetTop) - rect.startY ;

    ctx.setLineDash([5]);
    ctx.strokeStyle = "rgb(0, 102, 0)";
    ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
    ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
  }
}

function mousedownFn(e) {
  if (e.button === 0 && isBrush.value) {
    // selectedNodes = e.ctrlKey ? network.getSelectedNodes() : null;
    saveDrawingSurface();
    rect.startX = e.pageX - container.value.offsetLeft;
    rect.startY = e.pageY - container.value.offsetTop;
    drag = true;
    // container[0].style.cursor = "crosshair";
  }
}
function mouseupFn(e) {
  if (e.button === 0 && isBrush.value) {
    restoreDrawingSurface();
    drag = false;
    isBrush.value = false

    // container[0].style.cursor = "default";
    selectNodesFromHighlight();
  }
}
onMounted(() => {
  network = new Network(container.value, data, options)
  canvas = network.canvas.frame.canvas
  ctx = canvas.getContext('2d')
})
</script>

<style scoped>
.myNetwork{
  width: 100%;
  height: 400px;
}
</style>
