<template>
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
        if(x.name===this.$route.params.productname){
            this.itemToDisplay=x;
        }
    })
    //this.$route.params.productname
  }
  private GetCatalog(){      
      this.fullCatalog=ObjectMapper.deserializeArray(Product, json);
  }
}
</script>

<style scoped>
</style>