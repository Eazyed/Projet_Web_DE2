<template>
<div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
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