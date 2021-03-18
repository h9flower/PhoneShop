export const mixin = {

  methods: {
    plusProduct(phones) {
      phones.quantity < phones.quantityLimit ? phones.quantity += 1 : phones.quantity = phones.quantityLimit
    },

    minusProduct(phones) {
      phones.quantity <= 1 ? phones.quantity = 1 : phones.quantity -= 1
    }
  }
}