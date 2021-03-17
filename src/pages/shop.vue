<template>
  <div>
    <navigations />
    <div class="cards d-flex justify-content-between">
      <div
        v-for="card in cards"
        :key="card.id"
        class="card mx-2"
        style="width: 18rem"
      >
        <img :src="card.img" class="bd-placeholder-img card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ card.name }}</h5>
          <div class="d-flex col-sm-8">
            <button
              @click="minusProduct(card)"
              class="btn btn-primary"
              type="button"
            >
              -
            </button>
            <input
              v-model="card.quantity"
              type="text"
              class="form-control mx-2"
            />
            <button @click="plusProduct" class="btn btn-primary" type="button">
              +
            </button>
          </div>
          <button @click="addInBasket" class="btn btn-primary mt-3">
            В корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import navigations from "@/pages/navigations.vue";

export default {
  data() {
    return {
      quantity: "777",
      id: 2,
    };
  },

  computed: {
    cards() {
      return this.$store.getters.cards;
    },
  },

  methods: {
    plusProduct() {
      this.$store.commit("plusProduct");
    },

    minusProduct(card) {
      // console.log("quantity", quantity);
      this.$store.commit("minusProduct", card.id);
      // quantity--;
    },
    addInBasket() {
      console.log(card);
      this.$store.commit("addInBasket", card);
    },
  },

  components: {
    navigations,
  },
};
</script>