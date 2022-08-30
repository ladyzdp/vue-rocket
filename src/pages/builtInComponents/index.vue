<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <a href="javascript:;" @click="toggleCompt(item)">
          {{ item.name }}
        </a>
      </li>
    </ul>
    <component :is="parent" v-if="parent" />
  </div>
</template> 
<script>
import TransitionEl from "@components/BuiltInComponents/TransitionEl.vue";
import ComponentEl from "@components/BuiltInComponents/ComponentEl.vue";
import SlotEl from "@components/BuiltInComponents/SlotEl.vue";
export default {
  name: "BuiltInComponents",
  data() {
    return {
      parent: TransitionEl,
      list: [
        {
          name: "transition 组件",
          comp: TransitionEl,
        },
        {
          name: "component 组件",
          comp: ComponentEl,
        },
        {
          name: "slot 插槽",
          comp: SlotEl,
        },
      ],
    };
  },
  methods: {
    toggleCompt(item) {
      this.parent = item.comp;
    },
  },
};
</script>