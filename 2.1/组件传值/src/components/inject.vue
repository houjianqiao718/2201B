<template>
  <div style="height: 100px; background: orange">
    {{ content }}
  </div>
</template>
 
<script>
import { inject } from "vue";
export default {
  name: "helloWorldSon",
  setup() {
    let content = inject("content");
    return {
      content,
    };
  },
};
</script>