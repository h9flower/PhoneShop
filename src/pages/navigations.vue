<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <!-- <b-nav-item href="#">Home</b-nav-item> -->
        <router-link tag="b-nav-item" to="/">Главная</router-link>

        <router-link tag="b-nav-item" to="/shop">Магазин</router-link>
        <router-link tag="b-nav-item" to="/authorization" right
          >Авторизация</router-link
        >
        <!-- <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {};
</script>
