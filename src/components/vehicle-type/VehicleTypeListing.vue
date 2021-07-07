<template>
  <section class="card">
    <h2>Please select vehicle type</h2>
    <v-select
      v-model="vehicleTypeId"
      :options="vehicleTypeOptions"
      @input="onChange"
      :clearable="false"
    ></v-select>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      vehicleTypeId: null,
    };
  },
  created() {
    this.fetchVehicleTypes();
  },
  methods: {
    ...mapActions({
      fetchVehicleTypes: 'vehicleType/fetchVehicleTypes',
      getBrands: 'brand/getBrands',
      onVehicleTypeChange: 'onVehicleTypeChange',
    }),
    onChange() {
      this.onVehicleTypeChange({ vehicleType: this.vehicleTypeId });
      this.getBrands(this.vehicleTypeId);
    },
  },
  computed: {
    ...mapGetters('vehicleType', ['vehicleTypeOptions']),
  },
};
</script>
