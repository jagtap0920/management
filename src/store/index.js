import Vuex from 'vuex';
import Vue from 'vue';

import vehicleType from './vehicle-type';
import brand from './brand';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    vehicleType,
    brand,
  },
  state() {
    return {
      selectedVehicleType: null,
      selectedBrand: null,
      selectedModel: null,
    };
  },
  mutations: {
    setSelectedVehicleTypeId: (state, payload) =>
      (state.selectedVehicleType = payload),
    setSelectedBrandId: (state, payload) => (state.selectedBrand = payload),
    setSelectedModelId: (state, payload) => (state.selectedModel = payload),
  },
  actions: {
    setSelectedVehicleTypeId: ({ commit }, payload) =>
      commit('setSelectedVehicleTypeId', payload),
    setSelectedBrandId: ({ commit }, payload) =>
      commit('setSelectedBrandId', payload),
    setSelectedModelId: ({ commit }, payload) =>
      commit('setSelectedModelId', payload),

    // Hide brand section and it's dependent sections
    onVehicleTypeChange({ commit }, payload) {
      commit('setSelectedVehicleTypeId', payload.vehicleType);
      commit('setSelectedBrandId', null);
      commit('setSelectedModelId', null);
    },

    // Hide model section and it's dependent sections
    onBrandChange({ commit }, payload) {
      commit('setSelectedBrandId', payload.brand);
      commit('setSelectedModelId', null);
    },
  },
  getters: {
    isVehicleTypeSelected: (state) => null !== state.selectedVehicleType,
    isBrandSelected: (state) => null !== state.selectedBrand,
    isModelSelected: (state) => null !== state.selectedModel,
  },
});

export default store;
