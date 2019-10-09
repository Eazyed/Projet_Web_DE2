<template>
<div>
  <b-card
    v-for="item in itemsToDisplay"
    :key="item.name"
    v-bind:title="item.name"
    v-bind:img-src="'/assets/'+item.logopath"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{item.description}}
    </b-card-text>

    <b-button href="#" variant="primary">{{item.price}}</b-button>
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
      //Todo Récupération des objets
      debugger;

      
      this.fullCatalog=ObjectMapper.deserializeArray(Product, json);
      this.itemsToDisplay=this.fullCatalog;
  }
}
</script>

<style scoped>
</style>