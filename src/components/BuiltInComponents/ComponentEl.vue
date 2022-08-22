<template>
  <div>
    <h6>component 组件</h6>
    <component :is="componentId"></component>
    <br />
    <div class="grid">
      <button type="button" @click="setCat">Cat</button>
      <button type="button" @click="setDog">Dog</button>
    </div>
    <hr />
  </div>
</template>
<script>
import Cat from "@/components/Cat.vue";
import Dog from "@/components/Dog.vue";
export default {
  name: "ComponentEl",
  data() {
    return {
      show: true,
      componentId: Cat,
    };
  },

  methods: {
    setCat() {
      this.componentId = Cat;
    },
    setDog() {
      this.componentId = Dog;
    },
  },
};
</script>