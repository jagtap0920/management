<template>
  <section class="card">
    <h2>
      Please select brand name
      <span @click="showForm">({{ isFormVisible ? 'Hide' : 'Add' }})</span>
    </h2>

    <transition name="fade">
      <add-brand-form
        v-if="isFormVisible"
        @on-submit="onSubmitForm"
      ></add-brand-form>
    </transition>

    <transition name="fade">
      <div v-if="!isFormVisible">
        <brand-list-item
          class="form-control"
          v-for="option in brandOptions"
          :key="option.value"
          :value="option.value"
          :label="option.label"
          @on-change="onChange"
          @on-update="onUpdate"
        >
        </brand-list-item>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddBrandForm from './AddBrandForm.vue';
import BrandListItem from './BrandListItem.vue';
export default {
  data() {
    return {
      brand: null,
      isFormVisible: false,
    };
  },
  components: {
    AddBrandForm,
    BrandListItem,
  },
  methods: {
    ...mapActions({
      onBrandChange: 'onBrandChange',
      submitForm: 'brand/addNewBrand',
      onBrandUpdate: 'brand/updateBrand',
    }),
    onUpdate(data) {
      this.onBrandUpdate({ brand: data });
    },
    onChange(data) {
      this.onBrandChange({ brand: data });
    },
    showForm() {
      this.isFormVisible = !this.isFormVisible;
    },
    onSubmitForm(data) {
      this.submitForm(data);
      this.isFormVisible = false;
    },
  },
  computed: {
    ...mapGetters('brand', ['brandOptions']),
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
  color: blue;
}
</style>
