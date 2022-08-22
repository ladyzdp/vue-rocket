<template>
  <div>
    <h2>组件通信</h2>

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
import Parent from "@components/Data/Parent.vue";
import EventBus from "@components/Data/EventBus.vue";
import ProvideAndinject from "@components/Data/ProvideAndinject.vue";
import VuexCompt from "@components/Data/VuexCompt.vue";
import ObservableCompt from "@components/Data/ObservableCompt.vue";
export default {
  name: "Props",
  data() {
    return {
        parent:null,
      list: [
        {
          name: "父子传值",
          comp: Parent,
        },
        {
          name: "EventBus事件总线",
          comp: EventBus,
        },
        {
          name: "provide / inject",
          comp: ProvideAndinject,
        },
        {
          name: "Vuex通信",
          comp: VuexCompt,
        },
        {
          name: "observable通信",
          comp: ObservableCompt,
        },
      ],
    };
  },
  methods:{
    toggleCompt(item){
        this.parent = item.comp
    }
  }
};
</script>