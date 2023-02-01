<template>
  <div>
    <button @click="increase" style="border: 1px solid black">increase</button>
  </div>
</template>
<script>
let sum = 0;
export default {
  name: "vmodel",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    increase() {
      this.$emit("input", ++sum);
      console.log("value1", this.value);

      setTimeout(() => {
        console.log("value2", this.value);
      }, 50);
    },
  },
};
</script>