<template>
  <!-- <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="user.username"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>-->

  <div>
    <form class="login" @submit.prevent="login" v-if="!isLoggedIn">
      <h1>Sign in</h1>
      <label>User name </label>
      <input required v-model="user.username" type="text" placeholder="Snoopy" />
      <label>Password </label>
      <input required v-model="user.password" type="password" placeholder="Password" />
      <hr />
      <button type="submit">Login</button>
    </form>
    <b-card v-else title="Card Title" style="b-center" class="mb-2">
      <b-button @click="logout" variant="danger">Log Out</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { User } from "../models/User";

@Component({
  components: {
    HelloWorld
  }
})
export default class Authentification extends Vue {
  private user: User = new User();

  mounted() {
  }

  private get isLoggedIn(){
    if (localStorage.getItem('username') == undefined){
      localStorage.setItem('username','')
      return false;
    }
    else{ 
        let username =localStorage.getItem('username');
        if (username!= undefined) {
          if(username.length > 0 ){
            return true;
          }
          return false;
        }
        return false;
      }
  }
  private login() {
    localStorage.setItem('username', this.user.username);

    this.user.username='';
    this.user.password='';
    this.$router.go(0)
  }

  private logout() {
    localStorage.setItem('username','');
    this.$router.go(0)
  }
}
</script>

<style scoped>
</style>