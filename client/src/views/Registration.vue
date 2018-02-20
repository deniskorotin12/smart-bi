<template>
    <section class="registration-form">
   <div class="login-page">
  <div class="form">
    <form class="login-form">
      <input type="text" v-model="pib" placeholder="ПІБ" required />
      <input type="text" v-model="place" placeholder="Посада та Організація"/>
      <input type="phone" v-model="phone" placeholder="Телефон"/>
      <input type="Email" v-model="email" placeholder="Пошта" required />
      <input type="text" v-model="udid" placeholder="UDID Номер" required/>
      <button @click="register">Зареєструватися</button>
      <p class="message">Вже зареєстровані?</p>
      <router-link to="/downloading" class="message link">Оновити додаток</router-link>
    </form>
  </div>
</div>
    </section>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      pib: "",
      place: "",
      phone: "",
      email: "",
      udid: ""
    };
  },
  methods: {
   register(event) {
     event.preventDefault();
     const response = AuthenticationService.register({
      pib: this.pib,
      place: this.place,
      phone: this.phone,
      email: this.email,
      udid: this.udid
      })
      .then(res=>{

      })
       this.pib = "";
       this.place = "";
       this.phone = "";
       this.email = "";
       this.udid = "";
    }
  }
};
</script>




<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 60vh;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 45vh;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
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
  outline: 0;
  background: #3f7ab7;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #094688;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 1.5vh;
}
.form .message.link {
  color: #3f7ab7;
  text-decoration: underline;
}
.form .register-form {
  display: none;
}
</style>
