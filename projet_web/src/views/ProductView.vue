<template>
<div>{{itemToDisplay.id}}
    <b-input-group prepend="0" append="100" class="center">
    <b-form-input v-model="quantity" type="range" min="0" max="100"></b-form-input>

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
  private quantity:number=0;

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
}
</script>

<style scoped>
</style>