import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
    doubleCount: (state) => state.count * 2,
    devidedBy: (state) => (divisor) => state.count / divisor,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    incrementBy(number){
      this.count += number
    }
  }
});
