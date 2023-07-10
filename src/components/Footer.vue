<template>
  ini Footer
  <br>
  <button @click="increment">Tambah</button>
  <button @click="decrement">Kurang</button>
  <button @click="reset">reset</button>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore()
const increment = () => {
  counter.$patch((state) => {
    state.count++
  })
}
const decrement = () => {
  counter.$patch((state) => {
    state.count--
  })
}
const reset = () => {
  counter.$reset()
}
</script>

<style scope>
button {
  margin-right: 1rem;
}
</style>