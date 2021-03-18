<template>
  <div>
    <b-navbar type="dark" variant="dark" class="justify-content-between">
      <b-navbar-nav>
        <router-link tag="b-nav-item" to="/">Главная</router-link>

        <b-nav-item-dropdown text="Смартфоны">
          <b-dropdown-item
            ><router-link to="/apple">Apple</router-link></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/samsung">Samsung</router-link></b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="position-relative">
        <router-link to="/basket">
          <div class="circle_basket">{{ selectPhones.length }}</div>
          <b-icon
            class="mt-2 mr-1"
            icon="basket2"
            color="white"
            aria-hidden="true"
          >
          </b-icon
        ></router-link>

        <router-link tag="b-nav-item" to="/authorization" right
          >Авторизация</router-link
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  computed: {
    selectPhones() {
      return this.$store.getters.selectPhones;
    },
  },
};
</script>

<style scoped>
.circle_basket {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #e20303;
  position: absolute;
  top: 6px;
  right: 124px;
  color: white;
  font-size: 10px;
  padding-left: 3.4px;
  display: flex;
  align-items: center;
}
</style>