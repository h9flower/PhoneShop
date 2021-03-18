export default {
  actions: {

  },

  mutations: {
    addInBasket(state, phone) {
      state.phonesInBascket.push(phone);
    },
    deletePhone(state, id) {
      state.phonesInBascket = state.phonesInBascket.filter((t) => t.id !== id);
    },
  },

  state: {
    apple: [
      { id: 1, name: 'Смартфон Apple iPhone 11 64Gb Black', quantity: 1, price: 13500, quantityLimit: 3, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/a/p/apple_iphone_11_64gb_black_0_3.jpg' },
      { id: 2, name: 'Смартфон Apple iPhone 12 Pro Max 128Gb Pacific Blue', price: 75540, quantity: 1, quantityLimit: 5, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/a/p/apple_iphone_12_pro_max_blue_2_2.jpg' },
      { id: 3, name: 'Смартфон Apple iPhone 12 64Gb Black', quantity: 1, price: 65400, quantityLimit: 7, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/w/w/wwru_iphone12_q121_black_pdp-image-1b.jpg' },
    ],
    samsung: [
      { id: 1, name: 'Смартфон Samsung Galaxy Note 10 Lite 6/128Gb Black (SM-N770FZKD)', price: 86500, quantity: 1, quantityLimit: 7, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/s/a/samsung_galaxy_note_10_lite_6128gb_black_sm-n770fzkd_01.jpg' },
      { id: 2, name: 'Смартфон Samsung Galaxy A52 4/128Gb Black (SM-A525FZKDSEK)', price: 10500, quantity: 1, quantityLimit: 4, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/s/m/sm_a526_galaxya52_5g_awesome_black_back_1_.jpg' },
      { id: 3, name: 'Смартфон Samsung Galaxy A32 4/64Gb Blue (SM-A325FLBDSEK)', price: 32563, quantity: 1, quantityLimit: 8, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/s/m/sm_a326_galaxya32_5g_blue_back_1_.jpg' }
    ], phonesInBascket: []
  },

  getters: {
    apple: (state) => {
      return state.apple;
    },
    samsung: (state) => {
      return state.samsung;
    },
    selectPhones: (state) => {
      return state.phonesInBascket;
    },
  }
}