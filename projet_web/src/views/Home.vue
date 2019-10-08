<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logobiereandco.png">

  <div id="app" class="container">

    <h1>Bienvenue dans l'univers de la bière</h1>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>


<style lang="scss">
  @import "../../node_modules/bootstrap/scss/bootstrap.scss";
</style>
