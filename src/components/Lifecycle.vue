<template>
<div>
  <div>生命周期顺序</div>
  <ul>
  <li>beforeCreate:{{1}}</li>
  <li>created:{{created}}</li>
  <li>beforeMount:{{beforeMount}}</li>
  <li>mounted:{{mounted}}</li>
  <li>beforeUpdate:{{beforeUpdate}}</li>
  <li>activated:{{activated}}</li>
  <li>beforeDestroy:{{beforeDestroy}}</li>
  <li>destroyed:{{destroyed}}</li>
  </ul>
  </div>
</template>
<script>
let init = 0;
export default {
  data() {
    return {
      beforeCreate: null,
      created: null,
      beforeMount: null,
      mounted: null,
      beforeUpdate: null,
      activated: null,
      beforeDestroy: null,
      destroyed: null,
    };
  },
  beforeCreate() {
      init++;
      console.log(init)
        this.beforeCreate = init;
    console.log("------beforeCreate------",init);
  },
  created() {
    init++;
    this.created = init;
    console.log("------created------",init);
  },
  beforeMount() {
    init++;
    this.beforeMount = init;
    console.log("------beforeMount------",init);
  },
  mounted() {
    init++;
    this.mounted = init;
    console.log("------mounted------",init);
  },
  beforeUpdate() {
    init++;
    this.beforeUpdate = init;
    console.log("------beforeUpdate------",init);
  },
  activated() {
    init++;
    this.activated = init;
    console.log("------activated------",init);
  },
  beforeDestroy() {
    init++;
    this.beforeDestroy = init;
    console.log("------beforeDestroy------",init);
  },
  destroyed() {
    init++;
    this.destroyed = init;
    console.log("------destroyed------",init);
  },
};
</script>