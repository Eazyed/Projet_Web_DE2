<template>
  <div>
    <b-card-group columns style="center">      
      <b-card
        :key="itemToDisplay.name"
        :title="itemToDisplay.name"
        style="b-center;height: 700px"
        class="mb-2"
      >
        <b-card-img :src="require('../assets/'+itemToDisplay.logopath)" img-left style="max-width: 20rem;"></b-card-img>
        <b-card-text>
          <br>
          <h5><b>{{itemToDisplay.name}}</b></h5>
          <br>
          <h5><b>{{itemToDisplay.price}} €</b></h5>
          <br>
          {{itemToDisplay.description}}
        </b-card-text>
      </b-card>

      <b-col sm="10" align="center">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <b-form-input
        v-model="itemToDisplay.quantity"
        number
        type="range"
        min="0"
        max="50"
        style="input-sm"
      ></b-form-input>
      </b-col>  

    <b-col sm="10 " align="center"><br>Quantité : {{this.itemToDisplay.quantity}}
    </b-col>
    <br>
    <b-col sm="10" align="center">
    <b-button
      @click="addToCart"
      variant="primary"
      v-bind:disabled="itemToDisplay.quantity==0"
    >Ajouter au panier</b-button>
    </b-col>  
  </b-card-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Product } from "../models/Product";
import json from "../assets/donnees.json";
import { ObjectMapper } from "json-object-mapper";

@Component({
  components: {}
})
export default class ProductView extends Vue {
  private fullCatalog: Product[] = new Array<Product>();
  private itemToDisplay: Product = new Product();

  public mounted() {
    this.GetCatalog();
    this.fullCatalog.forEach((x) => {
      if (x.id === this.$route.params.productname) {
        this.itemToDisplay = x;
      }
    });
  }
  private GetCatalog() {
    this.fullCatalog = ObjectMapper.deserializeArray(Product, json);
  }
  // Fonction pour ajouter l'item au panier
  private addToCart() {
    let cart: Product[] = new Array<Product>();
    const cartjson = localStorage.getItem("cart");
    if (cartjson != undefined) {
      cart = ObjectMapper.deserializeArray(Product, JSON.parse(cartjson));
    }

    let addToExsisting: Boolean = false;
    cart.forEach((product) => {
      if (product.id == this.itemToDisplay.id) {
        product.quantity += this.itemToDisplay.quantity;
        addToExsisting = true;
      }
    });
    if (!addToExsisting) {
      cart.push(this.itemToDisplay);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.itemToDisplay.quantity = 0;
  }
}
</script>

<style scoped>
</style>