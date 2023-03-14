<template>
  <div class="container">
    <button @click="isBrush=!isBrush">框选重写</button>
    <div ref="myNetwork" class="myNetwork"></div>
  </div>
</template>
<script setup>
import  {Network} from 'vis-network'
import { onMounted, ref } from 'vue'
import { DataSet } from 'vis-data'
import visSelect from './vis-select'

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

const data = {
  nodes: nodes,
  edges: edges,
};

const isBrush = ref(false)

const options = {
  layout: {randomSeed: 2},
  interaction:{
    dragView: false,
    multiselect: true,
    selectConnectedEdges: false,
  }
};

const myNetwork = ref()

onMounted(() => {
  const network = new Network(myNetwork.value, data, options)
  new visSelect(network, {nodes, container: myNetwork.value, isBrush})
})

</script>
<style scoped>
.myNetwork{
  width: 100%;
  height: 400px;
}
</style>