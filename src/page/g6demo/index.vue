<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
// import data from "./data";
import {onMounted, ref} from "vue";
import G6 from "@antv/g6";
import setGraphIcon from "../../icons/index";

const data = {
  nodes: [
    {
      id: '0',
      label: '0',
      properties: {
        custom_sensitivity: "0",
        sensitivity: "0",
        name: "程海清",
        id: "40341",
        mobile: "17853688168",
      },
      modes: {
        x: "782",
        y: "225",
      },
      style: {
        icon: "person",
        displayFields: ["name"],
        display: false,
        single: true,
      },
    },
    {
      id: '1',
      label: '0',
      properties: {
        custom_sensitivity: "0",
        sensitivity: "0",
        name: "程海清",
        id: "40341",
        mobile: "17853688168",
      },
      modes: {
        x: "782",
        y: "225",
      },
      style: {
        icon: "person",
        displayFields: ["name"],
        display: false,
        single: true,
      },
    },
  ],
  edges: [
    // {
    //   source: '0',
    //   target: '1',
    // },
    // {
    //   source: '1',
    //   target: '2',
    // },
  ],
}

const container = ref()
const processData = (data) => {
  const {nodes, edges} = data
  const p_nodes = nodes.map(item => ({
    ...item,
    type: 'custom-circle',
    label: item.properties[item.style.displayFields[0]],
    icon: {
      cursor: 'pointer',
      show: true,
      img: setGraphIcon(item.style?.icon, 'default'),
      width: 30,
      height: 30
    },
    labelCfg: {
      position: 'bottom',
      offset: 8
    }
  }))
  const p_edges = edges.map(item => ({
    ...item,
    label: item.chineseLabel || item.label,
    style: {
      stroke: item.style?.color || '#5c73e6',
      lineWidth: 1.8,
      endArrow: {
        path: 'M 0, 0 L 8, 2 L 9 L 8, -2 Z',
        fill: item.style?.color || '#5c73e6'
      }
    }
  }))
  return {nodes: p_nodes, edges: p_edges}
}

const refreshDragNodePosition = (e) => {
  const model= e.item.get('model')
  model.fx = e.x
  model.fy = e.y
  console.log(model.fx)
}

G6.registerNode('custom-circle', {
  setState(name, value, item) {
    const group = item.getContainer()
    if (name === 'sensitivity') {
      group.addShape('text', {
        attrs: {
          text: 10,
          x: 0,
          y: -16,
          textAlign: 'center',
          fontSize: 10,
          stroke: 'red'
        },
        draggable: true,
        name: `${name}-text-shape`
      })
    }
    if (name === 'selected') {
      const shape = group.get('children')[0]
      if (value) {
        shape.attr('stroke', '#f2910f')
        shape.attr('lineWidth', 2)
      } else {
        shape.attr('stroke', '')
        shape.attr('lineWidth', 1)
      }
    }
  }
}, 'circle')
onMounted(() => {
  const graph = new G6.Graph({
    container: container.value,
    defaultNode: {
      size: 26,
      style: {
        fill: '',
        stroke: ''
      },
      labelCfg: {
        position: 'bottom',
        offset: 8
      }
    },
    defaultEdge: {
      type: 'line',
      size: 1,
      style:{
        stroke: '#BAC8EF',
        lineWidth: 1.8,
        cursor: 'pointer',
      },
      endArrow: {
        path: 'M 0, 0 L 8, 2 L 9 L 8, -2 Z',
        fill: '#BAC8EF'
      },
      labelCfg: {
        autoRotate: true,
        style: {
          cursor: 'pointer',
          stroke: '#fff',
          lineWidth: 7,
          fontSize: 10,
          fill: '#333'
        }
      }
    },
    width: container.value.clientWidth,
    height: container.value.clientHeight,
    modes: {
      default: ['zoom-canvas', 'drag-canvas', 'click-select'],
    },
    layout: {
      type: 'force2',
      animate: true, // 设置为 false 可关闭布局动画
     nodeSpacing: 20,
      minMovement: 0.5,
      distanceThresholdMode: 'mean',
      maxIteration: 300,
      maxSpeed: 3000,
      damping: 0.8,
      interval: 0.016,
      factor: 3,
      columnDisScale: 0.004,
      gravity: 3,
      nodeStrength: 500
    },
  });
  graph.data(processData(data));
  graph.render();

  graph.on('node:dragstart', (e) => {
    refreshDragNodePosition(e)
  })
  graph.on('node:drag', (e) => {
    refreshDragNodePosition(e)
    const forceLayout = graph.get('layoutController')?.layoutMethods[0]
    forceLayout.execute()
  })
  graph.on('node:dragend', (e) => {
    const model = e.item.get('model')
    model.fx = null
    model.fy = null
  })
})



</script>

<style scoped>
.container{
  width: 100%;
  height: calc(100% - 60px);
}
</style>