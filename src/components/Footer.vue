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
  <hr>
  <button @click="fetchPokemon('ditto')">fetch pokemon</button>
  <button @click="resetPokemon">reset pokemon</button>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
import { usePokemonStore } from '../stores/pokemon';


const counter = useCounterStore()
const pokemon = usePokemonStore()

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

const fetchPokemon = (name) => {
  pokemon.getPokemonDetails(name)
}
const resetPokemon = () => {
  pokemon.$reset()
}
</script>

<style scope>
button {
  margin-right: 1rem;
}
</style>