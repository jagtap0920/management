<template>
  <section>
    <div>
      <input type="radio" :value="value" name="userBrand" @change="onChange" />
      <span @dblclick="isEditFormVisible = true">
        {{ label }}
      </span>
    </div>
    <div v-if="isEditFormVisible">
      <div>
        <input type="text" v-model="newBrandName" />
        <span @click="isEditFormVisible = false"> X </span>
        <button @click="updateBrand">Update</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newBrandName: this.label,
      isEditFormVisible: false,
    };
  },
  emits: ['on-change'],
  props: {
    value: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    async updateBrand() {
      await this.$emit('on-update', {
        value: this.value,
        label: this.newBrandName,
      });
      this.isEditFormVisible = false;
    },
    onChange() {
      this.$emit('on-change', { value: this.value, label: this.label });
    },
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
}
</style>
