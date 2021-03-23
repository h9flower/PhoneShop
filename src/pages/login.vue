<template>
  <div>
    <navigations />
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
            <div v-if="!$v.formReg.password.required" class="invalid-feedback">
              Пожалуйста введите пароль
            </div>
          </div>

          <router-link to="/">
            <button
              :disabled="
                $v.formReg.mail.$error || !$v.formReg.password.required
              "
              type="submit"
              class="btn btn-primary"
            >
              Войти
            </button>
          </router-link>
          <router-link class="ml-3" to="/regist"
            >Зарегистрироваться</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formReg: {
        mail: "",
        password: "",
      },
    };
  },

  validations: {
    formReg: {
      mail: { required, email },
      password: { required },
    },
  },
};
</script>
