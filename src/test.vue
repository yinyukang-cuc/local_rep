<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  }
};
</script>

<style scoped></style>
