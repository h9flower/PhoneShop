export default {
  actions: {

  },

  mutations: {
    minusProduct(state, iDs) {
      state.cards = state.cards.map((el) => {
        if (el.id === iDs) {
          el.quantity = el.quantity - 1;
        }
        return el;
      })

    },
    addInBasket(card) {
      state.cards.push(card);
    }
  },

  state: {
    cards: [
      { id: 1, name: 'Смартфон Apple iPhone 11 64Gb Black', quantity: 1, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/a/p/apple_iphone_11_64gb_black_0_3.jpg' },
      { id: 2, name: 'Смартфон Apple iPhone 12 Pro Max 128Gb Pacific Blue', quantity: 3, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/a/p/apple_iphone_12_pro_max_blue_2_2.jpg' },
      { id: 3, name: 'Смартфон Apple iPhone 12 64Gb Black', quantity: 5, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/w/w/wwru_iphone12_q121_black_pdp-image-1b.jpg' }
    ]
  },

  getters: {
    cards: (state) => {
      return state.cards;
    },
  }
}