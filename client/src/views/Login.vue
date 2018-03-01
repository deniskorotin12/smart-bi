<template>
    <section class="registration-form">
    <div class="login-page">
       <div class="form">
      
      <form class='login-form' id="form-reg" @submit.prevent="login">
          <input
            type="text"
            name="login"
            v-model="model.login"
            placeholder="Логін"
          >
          <input 
            type="password"
            name="udid"
            v-model="model.password"
            placeholder="Пароль"
          > 
          <button
            type="submit"
            :disabled="errors.any()"
          >
            Увійти
          </button>
                    
      </form>
       </div>
    </div>
    </section>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
import router from 'vue-router'

    export default {
        data() {
            return {
                model: {
                    login: "",
                    password: ""
                }
            };
        },
        methods: {
            login(){
                 const response = AuthenticationService.login({
                        login: this.model.login,
                        password: this.model.password
                    })
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

    
   .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
.form a{
  font-size: 12px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;

}
.form input, .form-mask {
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
  color: #FFFFFF;
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