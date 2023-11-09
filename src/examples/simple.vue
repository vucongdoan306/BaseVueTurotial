<template>
    <h1>Bài 1: Binding 2 chiều</h1>
    <h2>Kiến thức thêm:</h2>
    <h3>- emits</h3>
    <h3>- import</h3>
    <h3>- scss</h3>
  <div style="width: 600px;">
    <!-- Size bé -->
    <VInput v-model="textTest" destiny="small" label="Size bé"/>

    <!-- Size vừa -->
    <VInput v-model="textTest" destiny="medium" label="Size vừa"/>

    <!-- Size to -->
    <VInput v-model="textTest" destiny="large" label="Size lớn"/>

    <!-- sử dụng props -->
    <VInput v-model="textTest" height="30" width="300" label="fix size"/>
    <div>Giá trị: {{ textTest }}</div>
  </div>
</template>
<script>
import VInput from "../components/VInput.vue";
export default {
  components: {
    VInput,
  },
  data() {
    return {
      textTest: "",
    };
  },
};
</script>
<style lang=""></style>
