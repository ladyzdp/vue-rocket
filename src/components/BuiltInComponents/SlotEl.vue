<template>
  <div>
    <h6>slot 插槽</h6>
    <List :list="list" eventType="router">
      {{ message }}
      <button type="button" @click="changeMsg">插槽slot内容</button>
    </List>
  </div>
</template>
<script>
import List from "@/components/Data/List.vue";

export default {
  name: "SlotEl",
  components: { List },

  data() {
    return {
      show: true,
      message: "数据更新前+++++",
       list: [
        {
          name: "曹一萌",
          idCard: "330825198907153827",
          sex: "女",
          birthday: "1989年07月15日",
        },
        {
          name: "陈敬花",
          idCard: "13092619930420652X",
          sex: "女",
          birthday: "1993年04月20日",
        },
      ],
    };
  },

  methods: {
    toggleStatus() {
      this.show = !this.show;
    },
    changeMsg() {
      console.log("数据更新后====");
      this.message = "数据更新后----------";
    },
  },
};
</script>