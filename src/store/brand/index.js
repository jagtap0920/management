import axios from 'axios';

export default {
  namespaced: true,
  state: {
    brands: [],
  },
  mutations: {
    setBrands: (state, payload) => (state.brands = payload),
    addNewBrand: (state, payload) => state.brands.push(payload),
  },
  actions: {
    async getBrands({ commit }, payload) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${payload.value}`
      );

      const brands = response.data.map((brand) => {
        return {
          value: brand.id,
          label: brand.title,
        };
      });

      commit('setBrands', brands);
    },

    addNewBrand({ commit }, payload) {
      commit('addNewBrand', {
        value: +new Date(),
        label: payload.name,
      });
    },

    updateBrand({ commit, getters }, payload) {
      const brandOptions = getters.brandOptions;
      const updatedBrandOptions = brandOptions.map((brand) =>
        brand.value === payload.brand.value
          ? { ...brand, label: payload.brand.label }
          : brand
      );

      commit('setBrands', updatedBrandOptions);
    },
  },
  getters: {
    brandOptions: (state) => state.brands,
  },
};
