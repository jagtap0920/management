<template>
  <section>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: $v.name.$error }">
        <label for="name">Brand name:</label>
        <input type="text" id="name" v-model.trim="name" />
        <p class="error" v-if="$v.name.$dirty && !$v.name.required">
          Brand name must not be empty.
        </p>
        <p class="error" v-if="$v.name.$dirty && !$v.name.minLength">
          Brand name must have at least
          {{ $v.name.$params.minLength.min }}
          letters.
        </p>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      name: '',
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
  },
  emits: ['submit-form'],
  methods: {
    submitForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.$emit('on-submit', {
        name: this.name,
      });
    },
  },
};
</script>

<style scoped>
form {
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.error {
  color: red;
}

.invalid input {
  border: 1px solid red;
}
</style>
