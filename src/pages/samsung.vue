<template>
  <div>
    <navigations />
    <div class="cards d-flex justify-content-between">
      <div
        v-for="phone in samsung"
        :key="phone.id"
        class="card mx-2"
        style="width: 18rem"
      >
        <img :src="phone.img" class="bd-placeholder-img card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ phone.name }}</h5>
          <h6 class="card-subtitle">{{ phone.price }} грн.</h6>
          <div class="d-flex col-sm-8 mt-2">
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
              class="form-control mx-2"
            />
            <button
              @click="plusProduct(phone)"
              class="btn btn-primary"
              type="button"
            >
              +
            </button>
          </div>
          <button @click="addInBasket(phone)" class="btn btn-primary mt-3">
            В корзину
          </button>
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

  data() {
    return {
      quantity: 1,
    };
  },

  methods: {
    addInBasket(phone) {
      this.$store.commit("addInBasket", phone);
    },
  },

  computed: {
    samsung() {
      return this.$store.getters.samsung;
    },
  },

  components: {
    navigations,
  },
};
</script>