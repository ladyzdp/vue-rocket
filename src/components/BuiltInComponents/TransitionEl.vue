<template>
  <div>
    <h6>transition 组件</h6>
    <transition
      appear
      enter-active-class="animate__animated  animate__bounceIn"
      leave-active-class="animate__animated  animate__bounceOutLeft"
    >
      <img v-if="show" src="/pd.jpg" alt="熊猫" class="images-small" />
    </transition>
    <br />
    <button type="button" @click="toggleStatus" class="inline">切换状态</button>
    <br />
  </div>
</template>
<script>
export default {
  name: "TransitionEl",
  data() {
    return {
      show: true,
    };
  },

  methods: {
    toggleStatus() {
      this.show = !this.show;
    },
 
  },
};
</script>