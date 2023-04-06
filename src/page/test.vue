<template>

</template>

<script setup>
const sleep = (i) => {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}
const arr = [1, 2, 3];

arr.forEach(async (i) => {
  // each element takes a different amount of time to complete
  await sleep(i);
  console.log(i);
});
</script>

<style scoped>

</style>