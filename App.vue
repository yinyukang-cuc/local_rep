<template>
  <div>
    <p></p>
    <ul>
      <li v-for="item in data"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      test: 'hello'
    };
  },
  computed: {
    pro() {
      return Promise.all([new Promise((resolve, reject) => {})]);
    },
    foo1: async function() {
      return await this.someFunc();
    },
    bar() {
      return fetch(url).then((response) => {});
    },
    tim() {
      setTimeout(() => {}, 0);
    },
    inter() {
      setInterval(() => {}, 0);
    },
    anim() {
      requestAnimationFrame(() => {});
    }
  },
  mounted() {
    let a = 'hello';
    global.a = 'hello';
  },
  methods: {
    someFunc() {
      return new Promise((resolve, reject) => {});
    }
  }
};
</script>
<style>
.red {
  backgrond: red;
}
.blue {
}
</style>
