<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="warning">
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="/" class="d-inline-block align-top">
            <img id="logo" src="./assets/logobiereandco.png" alt="Logo" />
            BiereAndCo
          </b-navbar-brand>
        </b-navbar>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/catalog">Catalogue</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>-->

            <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>-->

            <b-nav-item-dropdown v-if="isAuthentified" right>
              <!-- Using 'button-content' slot -->

              <template v-slot:button-content>
                <em>{{username}}</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item to="/authent">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- Using 'button-content' slot -->
            <b-nav-item v-else right to="/authent">Log In</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/authent">Authentification</router-link>
    </div>
    <router-view/>
  </div>-->
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "./models/User";
import "reflect-metadata";

export default class App extends Vue {


  public get isAuthentified() {
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
    private get username(){
    if (this.isAuthentified){
      return localStorage.getItem('username');
    }
  }
  private logout() {
    localStorage.setItem('username','');
    this.$router.go(0);
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#logo {
  height: 50px;
}
</style>
