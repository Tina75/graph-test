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
      label: '1',
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
      id: '2',
      label: '2',
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
      id: '3',
      label: '3',
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
      id: '4',
      label: '4',
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
      id: '5',
      label: '5',
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
      id: '6',
      label: '6',
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
      id: '7',
      label: '7',
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
      id: '8',
      label: '8',
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
      id: '9',
      label: '9',
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
      id: '10',
      label: '10',
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
      id: '11',
      label: '11',
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
      id: '12',
      label: '12',
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
      id: '13',
      label: '13',
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
      id: '14',
      label: '14',
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
    {
      source: '1',
      target: '0',
    },
    {
      source: '1',
      target: '2',
    },
    {
      source: '3',
      target: '1',
    },
    {
      source: '4',
      target: '1',
    },
    {
      source: '5',
      target: '1',
    },
    {
      source: '6',
      target: '1',
    },
    {
      source: '7',
      target: '1',
    },
    {
      source: '8',
      target: '1',
    },
    {
      source: '9',
      target: '1',
    },
    {
      source: '10',
      target: '1',
    },
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
      width: 40,
      height: 40
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
      stroke: item.style?.color || '#BAC8EF',
      lineWidth: 1.8,
      endArrow: {
        path: 'M 0, 0 L 8, 2 L 9 L 8, -2 Z',
        fill: item.style?.color || '#BAC8EF'
      }
    }
  }))
  return {nodes: p_nodes, edges: p_edges}
}

const refreshDragNodePosition = (e) => {
  const model= e.item.get('model')
  model.fx = e.x
  model.fy = e.y
}

let dragLocked = false
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
  }
}, 'circle')
onMounted(() => {
  const graph = new G6.Graph({
    container: container.value,
    defaultNode: {
      size: 30,
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
      default: ['zoom-canvas', 'drag-canvas', 'drag-node'],
    },
    layout: {
      type: 'force2',
      animate: true, // 设置为 false 可关闭布局动画
      maxSpeed: 100,
      linkDistance: 50,
    },
  });
  graph.data(processData(data));
  graph.render();

  graph.on('node:dragstart', (e) => {
    console.log('dragstart')
    refreshDragNodePosition(e)
  })
  graph.on('node:drag', (e) => {
    console.log('drag')
    if (dragLocked) return
    refreshDragNodePosition(e)
    const forceLayout = graph.get('layoutController')?.layoutMethods[0]
    forceLayout.execute()
  })
  graph.on('node:dragend', (e) => {
    console.log('dragend')
    dragLocked = false
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