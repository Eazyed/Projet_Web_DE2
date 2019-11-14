<template>
  <div>
    <b-input-group style="center">
      <b-form-input
        v-model="itemToDisplay.quantity"
        number
        type="range"
        min="0"
        max="100"
        style="input-sm"
      ></b-form-input>
      <label>Quantité : {{this.itemToDisplay.quantity}}</label>
    </b-input-group>
    <b-button
      @click="addToCart"
      variant="primary"
      v-bind:disabled="itemToDisplay.quantity==0"
    >Ajouter au panier</b-button>
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