<template>
    <section class="registration-form">
    <div class="login-page">
       <div class="form">
      
      <form class='register-form' id="form-reg" @submit.prevent="validateForm('form-reg'); errors.clear('form-reg')" data-vv-scope="form-reg">
          <input 
            type="text"
            name="pib"
            v-model="model.pib"
            v-validate="'required'"
            placeholder="ПІБ"
            :class="{'form-control': true, 'error': errors.has('form-reg.pib') }"
          >
          <input 
            type="tel"
            name="place"
            v-model="model.place"
            v-validate="'required'"
            placeholder="Посада та організація"
            :class="{'form-control': true, 'error': errors.has('form-reg.place') }"
          >
           
          <the-mask
           value="+380"
           class="form-mask"
           mask="+380(##)-###-####"
           name="phone"
           v-model="model.phone"
           v-validate="'required'"
           placeholder="Телефон"
            :class="{'form-control': true, 'error': errors.has('form-reg.phone') }"/>
          <input
            type="email"
            name="email"
            v-model="model.email"
            v-validate="'required|email'"
            placeholder="Email"
            :class="{'form-control': true, 'error': errors.has('form-reg.email') }"
          >
          <input 
            type="text"
            name="udid"
            v-model="model.udid"
            v-validate="{ rules: { regex:  /.[A-Za-z0-9]{40,}$/} }"
            placeholder="UDID"
            :class="{'form-control': true, 'error': errors.has('form-reg.udid') }"
          > 
          <button
            type="submit"
            :disabled="errors.any()"
          >
            <span>Зареєструватися</span>   
         
              <span class="loader loader--style2" v-if="disabled">
                  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                  <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                    <animateTransform attributeType="xml"
                      attributeName="transform"
                      type="rotate"
                      from="0 25 25"
                      to="360 25 25"
                      dur="0.6s"
                      repeatCount="indeFfinite"/>
                    </path>
                  </svg>
            </span>
           
          </button>
          <p>
             <router-link to="/udid">
                Що таке UDID і як його знайти
            </router-link>
          </p>
          
      </form>
       </div>
    </div>
    </section>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  data() {
    return {
      title: "Реєстрація",
      disabled: false,
      model: {
        pib: "",
        place: "",
        phone: "",
        email: "",
        udid: ""
      }
    };
  },
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then(result => {
        this.disabled = true;
        if (result) {
          const response = AuthenticationService.register({
            pib: this.model.pib,
            place: this.model.place,
            phone: this.model.phone,
            email: this.model.email,
            udid: this.model.udid
          }).then(() => {
            this.disabled = false;
            this.model.pib = "";
            this.model.place = "";
            this.model.phone = "";
            this.model.email = "";
            this.model.udid = "";
            setTimeout(() => {
              this.errors.clear("form-reg");
            }, 0);
          });
        }
      });
    }
  }
};
</script>




<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
.login-page {
  width: 55vh;
  padding: 8% 0 0;
  margin: auto;
}

svg path,
svg rect{
  fill: rgb(0, 162, 255);
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form a {
  font-size: 12px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
.form input,
.form-mask {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  background: #3f7ab7;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
}

button:disabled {
  background: lightgray;
  color: white;
}

button:disabled:hover {
  background: lightgray;
  color: white;
}
.form-control.error {
  border: 1px solid red;
  border-radius: 4px;
}
</style>