<template>
  <div>
    <navigations />

    <b-button @click="moveBack" variant="outline-dark"
      ><b-icon-arrow-left-circle-fill
        class="mr-2"
      ></b-icon-arrow-left-circle-fill
      >Назад к товару</b-button
    >

    <h4 v-if="!selectPhones.length">Пока что в вашей корзине нет товаров</h4>

    <div class="cards d-flex mt-4">
      <div
        v-for="phone in selectPhones"
        :key="phone.id"
        class="card mx-2"
        style="width: 18rem"
      >
        <img :src="phone.img" class="bd-placeholder-img card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ phone.name }}</h5>
          <div class="d-flex col-sm-8">
            <button
              @click="minusProduct(phone)"
              class="btn btn-primary"
              type="button"
            >
              -
            </button>
            <input
              v-model="phone.quantity"
              type="text"
              class="basket_input form-control mx-2"
            />
            <button
              @click="plusProduct(phone)"
              class="btn btn-primary"
              type="button"
            >
              +
            </button>
            <button
              @click="deletePhone(phone.id)"
              type="button"
              class="btn btn-outline-danger ml-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigations from "@/pages/navigations.vue";
import { mixin } from "@/mixin/mixin.js";

export default {
  mixins: [mixin],
  methods: {
    moveBack() {
      this.$router.go(-1);
    },

    deletePhone(todo) {
      this.$store.commit("deletePhone", todo);
    },
  },

  computed: {
    selectPhones() {
      return this.$store.getters.selectPhones;
    },
  },
  components: {
    navigations,
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
}
.basket_input {
  width: 40px;
}
</style>