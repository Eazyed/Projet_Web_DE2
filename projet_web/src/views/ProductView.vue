<template>
<div>{{itemToDisplay.id}}
    <b-input-group  style="center">
    
    <b-form-input v-model="itemToDisplay.quantity" type="range" min="0" max="100" style="input-sm"></b-form-input>
    <label>Quantité : {{this.itemToDisplay.quantity}}</label>

    </b-input-group>    
    <b-button>Ajouter au panier</b-button>
</div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Product } from "../models/Product";
import json from "../assets/donnees.json";
import { ObjectMapper } from 'json-object-mapper';


@Component({
  components: {
  }
})
export default class ProductView extends Vue {
  private fullCatalog: Product[] = new Array<Product>();
  private itemToDisplay: Product = new Product();

  mounted() {
    this.GetCatalog();
    this.fullCatalog.forEach(x => {
        if(x.id===this.$route.params.productname){
            this.itemToDisplay=x;
        }
    })
  }
  private GetCatalog(){      
      this.fullCatalog=ObjectMapper.deserializeArray(Product, json);
  }
  private AddToCart(){
     // let cartjson:string =localStorage.getItem('cart');
     // let cart:Product[] = ObjectMapper.deserializeArray(Product,cartjson);
      
  }
}
</script>

<style scoped>
</style>