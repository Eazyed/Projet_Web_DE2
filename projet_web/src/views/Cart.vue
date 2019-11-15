<template>
  <div>
    <h1>Votre panier : </h1>
    <div v-if="itemsToDisplay.length !=0">
      <b-button @click="EmptyCart" style="b-center">Vider le panier</b-button>
      <b-card-group deck>
        <b-card
          v-for="item in itemsToDisplay"
          :key="item.name"
          :title="item.name"
          style="b-center"
          class="mb-2"
        >
          <b-card-img :src="require('../assets/'+item.logopath)" img-left style="max-width: 20rem;"></b-card-img>
          <b-card-text>
            <h4>{{item.name}}</h4>
            <h6>Quantité : {{item.quantity}}</h6>
            <h5>Prix : {{parseFloat(Math.round(parseFloat(item.price)*item.quantity * 100) / 100).toFixed(2)}} €</h5>
          </b-card-text>
          <b-form-input v-model="item.quantity" number type="number" style="input-sm" min="0"></b-form-input>
        </b-card>
      </b-card-group>
      <h3>Total : {{total}} €</h3>
      <b-button @click="validateOrder" variant=primary style="max-width: 20rem;align: center">Passer commande</b-button>
    </div>
    <div v-else>Votre panier est vide</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Product } from '../models/Product';
import json from '../assets/donnees.json';
import { ObjectMapper } from 'json-object-mapper';

@Component({
  components: {},
})
export default class Authentification extends Vue {
  private itemsToDisplay: Product[] = new Array<Product>();

  public mounted() {
    this.GetCart();
  }
  private GetCart() {
    let cart: Product[] = new Array<Product>();
    const cartjson = localStorage.getItem('cart');
    if (cartjson != undefined) {
      cart = ObjectMapper.deserializeArray(Product, JSON.parse(cartjson));
    }
    this.itemsToDisplay = cart;
  }

    private get total():string{
      let totalprice:number=0;
      this.itemsToDisplay.forEach(element => {
          totalprice+=element.quantity*parseFloat(element.price);
      });
      return totalprice.toFixed(2);
  }

  private EmptyCart() {
    localStorage.setItem('cart', '[]');
    this.$router.go(0);
  }

  private validateOrder() {
    localStorage.setItem('cart', JSON.stringify(this.itemsToDisplay));
    // routage vers Checkout
    this.$router.push('checkout');
  }
}
</script>

<style scoped>
</style>