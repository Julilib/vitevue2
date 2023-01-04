<script setup>
import { ref } from 'vue';
import './HelloWorld.scss';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="card">
    <h1 class="myStyleNotLoading">SFC with scss NOT loading</h1>
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<!--<style lang="scss" src="./HelloWorld.scss"></style>-->
