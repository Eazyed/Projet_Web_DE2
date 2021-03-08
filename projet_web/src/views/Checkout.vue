<template>
  <div>
    <h1>Merci {{username}}</h1>
    <h2>Votre commande n°{{orderNumber}} d'une valeur de : {{total}} € a bien été prise en compte</h2>
    <h3>Cliquez ici pour télécharger un reçu</h3>
    <b-button variant="primary" @click="downloadCSV">Télécharger reçu</b-button>
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
export default class Authentification extends Vue {
  private fullCart: Product[] = new Array<Product>();
  private orderNumber: string = "";

  public mounted() {
    this.GetCart();
    localStorage.setItem('cart', '[]');
    this.orderNumber = (Math.random() * 100000 + 1).toFixed(0);
  }

  private get total(): string {
    let totalprice: number = 0;
    this.fullCart.forEach(element => {
      totalprice += element.quantity * parseFloat(element.price);
    });
    return totalprice.toFixed(2);
  }
  private GetCart() {
    let cart: Product[] = new Array<Product>();
    const cartjson = localStorage.getItem("cart");
    if (cartjson != undefined) {
      cart = ObjectMapper.deserializeArray(Product, JSON.parse(cartjson));
    }
    this.fullCart = cart;
  }

  private downloadCSV() {
    let csv = `Numero de commande :;${this.orderNumber}\nUtilisateur :;${this.username}\n\nProduit;Quantite;Prix unit.;Sous-Total\n`;
    this.fullCart.forEach(element => {
      if (element.quantity != 0) {
        csv += `${element.name};${element.quantity};${element.price};${(
          Math.round(parseFloat(element.price) * element.quantity * 100) / 100
        ).toFixed(2)}\n`;
      }
    });
    csv += `\n;;Total :;${this.total}`;
    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = `recu_${this.orderNumber}.csv`;
    hiddenElement.click();
  }

  public get isAuthentified() {
    if (localStorage.getItem("username") == undefined) {
      localStorage.setItem("username", "");
      return false;
    } else {
      const username = localStorage.getItem("username");
      if (username != undefined) {
        if (username.length > 0) {
          return true;
        }
        return false;
      }
      return false;
    }
  }
  private get username() {
    if (this.isAuthentified) {
      return localStorage.getItem("username");
    }
  }
  private validateOrder() {}
}
</script>

<style scoped>
</style>