<template>
    <h1>Bài 1: Binding 2 chiều</h1>
    <h2>Kiến thức thêm:</h2>
    <h3>- emits</h3>
    <h3>- import</h3>
    <h3>- scss</h3>
  <div style="width: 600px;">
    <!-- Size bé -->
    <VInput v-model="textTest" :destiny="destinyBinding" label="Size bé" @bind-destiny="(value)=> destinyBinding = value"/>

    <!-- Size vừa -->
    <VInput v-model="textTest" destiny="medium" label="Size vừa"/>

    <!-- Size to -->
    <VInput v-model="textTest" destiny="large" label="Size lớn"/>

    <!-- sử dụng props -->
    <VInput v-model="textTest" height="30" width="300" label="fix size"/>

    <input type="text" v-model="text1">
    <input type="text" v-model="text2">
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
      textTest: "một",
      text1: "",
      text2: "",
      destinyBinding: "medium"
    };
  },
};
</script>
<style lang=""></style>
