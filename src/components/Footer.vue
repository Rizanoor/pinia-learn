<template>
  ini Footer
  <br>
  <button @click="increment">Tambah</button>
  <button @click="decrement">Kurang</button>
  <button @click="reset">reset</button>
  <br>
  <button @click="incrementWithAction">increment With Action</button>
  <button @click="decrementWithAction">decrement With Action</button>
  <button @click="incrementWithByAction(5)">incrementWith By Action 5</button>
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

const incrementWithAction = () => {
  counter.increment();
}
const decrementWithAction = () => {
  counter.decrement();
}
const incrementWithByAction = (amount) => {
  counter.incrementBy(amount);
}
</script>

<style scope>
button {
  margin-right: 1rem;
}
</style>