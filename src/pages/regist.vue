<template>
  <div>
    <div class="row mt-5">
      <div class="col-sm-3 mx-auto">
        <form novalidate>
          <div class="form-group">
            <label for="exampleInputEmail1">Ваша почта</label>
            <input
              :class="{ 'is-invalid': $v.formReg.mail.$error }"
              @blur="$v.formReg.mail.$touch()"
              v-model="formReg.mail"
              type="email"
              class="form-control"
              id="mail"
              aria-describedby="emailHelp"
              placeholder="Почта"
            />
            <div v-if="!$v.formReg.mail.required" class="invalid-feedback">
              Пожалуйста введите почту
            </div>
            <div v-if="!$v.formReg.mail.email" class="invalid-feedback">
              Поле должно быть Email адресом
            </div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input
              :class="{ 'is-invalid': $v.formReg.password.$error }"
              @blur="$v.formReg.password.$touch()"
              v-model="formReg.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Пароль"
            />
            <div v-if="!$v.formReg.password.minLength" class="invalid-feedback">
              Пароль должен быть не меньше 6 символов
            </div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword2">Повторите пароль</label>
            <input
              :class="{ 'is-invalid': $v.formReg.confirmPassword.$error }"
              @blur="$v.formReg.confirmPassword.$touch()"
              v-model="formReg.confirmPassword"
              type="password"
              class="form-control"
              id="confirmPassword"
              placeholder="Пароль"
            />
            <div
              v-if="!$v.formReg.confirmPassword.sameAs"
              class="invalid-feedback"
            >
              Пароли не совпадают
            </div>
          </div>

          <router-link to="/">
            <button
              :disabled="
                $v.formReg.mail.$error ||
                !$v.formReg.password.required ||
                !$v.formReg.confirmPassword.sameAs
              "
              type="submit"
              class="btn btn-primary"
            >
              Зарегистрироваться
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formReg: {
        mail: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  validations: {
    formReg: {
      mail: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { sameAs: sameAs("password") },
    },
  },
};
</script>
