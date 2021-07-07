import axios from 'axios';

export default {
  namespaced: true,
  state: {
    vehicleTypes: [],
  },
  mutations: {
    setVehicleTypes: (state, payload) => (state.vehicleTypes = payload),
  },
  actions: {
    async fetchVehicleTypes({ commit }) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      const options = response.data.map((user) => {
        return {
          value: user.id,
          label: user.name,
        };
      });

      commit('setVehicleTypes', options);
    },
  },
  getters: {
    vehicleTypeOptions: (state) => state.vehicleTypes,
  },
};
