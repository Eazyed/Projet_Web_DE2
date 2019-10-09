<template>
<div>
  <b-card
    v-for="item in itemsToDisplay"
    :key="item.name"
    v-bind:title="item.name"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-img :src="require('../assets/'+item.logopath)"></b-card-img>
    <b-card-text>
      {{item.description}}
    </b-card-text>

    <b-button  v-if="item.isInStock" href="#" variant="primary">{{item.price}} €</b-button>
    <b-button v-else href="#" variant="warning">Rupture</b-button>
  </b-card>

</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Product } from "../models/Product";
import json from "../assets/donnees.json";
import { ObjectMapper } from 'json-object-mapper';


@Component({
  components: {
    HelloWorld
  }
})
export default class Authentification extends Vue {
  private fullCatalog: Product[] = new Array<Product>();
  private itemsToDisplay: Product[] = new Array<Product>();

  mounted() {
    this.GetCatalog();
  }
  private GetCatalog(){      
      this.fullCatalog=ObjectMapper.deserializeArray(Product, json);
      this.itemsToDisplay=this.fullCatalog;
  }
}
</script>

<style scoped>
</style>