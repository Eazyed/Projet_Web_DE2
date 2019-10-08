<template>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Product } from "../models/Product";

@Component({
  components: {
    HelloWorld
  }
})
export default class Authentification extends Vue {
  private fullCatalog: Product[] = new Array<Product>();
  private itemsToDisplay: Product[] = new Array<Product>();
  private isLoggedIn: boolean = false;

  mounted() {
    if (Vue.prototype.email.length > 0) {
      this.isLoggedIn = true;
    }
  }
  private GetCatalog(){
      //Todo Récupération des objets
      this.fullCatalog.push(new Product());
  }
}
</script>

<style scoped>
</style>