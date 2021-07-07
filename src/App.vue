<template>
  <section>
    <transition name="fade">
      <vehicle-type-listing></vehicle-type-listing>
    </transition>

    <transition name="fade">
      <brand-listing v-if="isVehicleTypeSelected"></brand-listing>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import VehicleTypeListing from './components/vehicle-type/VehicleTypeListing.vue';
import BrandListing from './components/brand/BrandListing.vue';

export default {
  components: {
    VehicleTypeListing,
    BrandListing,
  },
  computed: {
    ...mapGetters([
      'isVehicleTypeSelected',
      'isBrandSelected',
      'isModelSelected',
    ]),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import '../node_modules/vue-select/dist/vue-select.css';
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

button:hover,
button:active {
  color: white;
  background-color: #edd2ff;
  background-color: #270041;
  border-color: #270041;
}

.fade-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
