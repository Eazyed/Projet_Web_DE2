<template>
  <div>
    <b-card-group columns>
      <b-card
        v-for="item in itemsToDisplay"
        :key="item.name"
        :title="item.name"
        style="b-center"
        class="mb-2"

      >
        <b-card-img :src="require('../assets/'+item.logopath)" img-left style="max-width: 20rem;"></b-card-img>
        <b-card-text>
          <br>
          <h5><b>{{item.name}}</b></h5>
        </b-card-text>

        <b-button
          v-if="item.isInStock"
          v-bind:to="'/product/'+item.id"
          variant="primary"
        >{{item.price}} €</b-button>
        <b-button v-else v-bind:to="'/product/'+item.id" variant="warning">Rupture</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Product } from '../models/Product';
import json from '../assets/donnees.json';
import { ObjectMapper } from 'json-object-mapper';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Authentification extends Vue {
  private fullCatalog: Product[] = new Array<Product>();
  private itemsToDisplay: Product[] = new Array<Product>();

  public mounted() {
    this.GetCatalog();
  }
  private GetCatalog() {
    this.fullCatalog = ObjectMapper.deserializeArray(Product, json);
    this.itemsToDisplay = this.fullCatalog;
    debugger;
  } 
}
</script>

<style scoped>
</style>