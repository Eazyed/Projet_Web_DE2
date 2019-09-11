<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <template>
  <div id="app" class="container">
    <br />
    <h1>Intégration bootstrap</h1>
    <br />
    <p>
      <b-btn v-b-toggle.collapse1 variant="warning">Toggle Collapse</b-btn>
    </p>
    <b-collapse id="collapse1">
      <b-card>
        Collapse contents Here
        <b-btn v-b-toggle.collapse2 size="sm">Toggle Inner Collapse</b-btn>
        <b-collapse id=collapse2 class="mt-2">
          <b-card>Hello!</b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
  </div>
</template>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
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
