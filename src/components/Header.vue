<template>
  ini Header
  <pre>state:  {{ counter }}</pre>
  <pre>getters: {{ getCount }}</pre>
  <pre>doubel getters: {{ doubleGetCount }}</pre>
  <pre>devidedBy getters: {{ devidedBy }}</pre>
  <pre>pokemon: {{ pokemon }}</pre>
</template>

<script setup>
import { computed } from "vue";
import { useCounterStore } from '../stores/counter'
import { usePokemonStore } from '../stores/pokemon';


const counterStore = useCounterStore();
const pokemonStore = usePokemonStore();

// ini adalah state
const counter = computed(() => counterStore.count)

// ini adalah getters
const getCount = computed(() => counterStore.getCount)
const doubleGetCount = computed(() => counterStore.doubleCount) 
const devidedBy = computed(() => counterStore.devidedBy(2)) 

const pokemon = computed(() => pokemonStore.pokemonDetails)


counterStore.$subscribe((mutation, state) => {
  console.log(mutation, state);
})
</script>