<template>
    <section>
        <div class="thanks-list">
            <h1>Ви успішно зареєстровані</h1>
            <p>Ваша інформація обробляється.</p>
            <p>Вам прийде лист з параметрами доступу і посиланням на скачування програми.</p>
            <button v-on:click="toMain()" id="toMain">на головну</button>
        </div>
    </section>
</template>


<script>
import router from 'vue-router'

export default {
  data(){
      return {

      }
  },
  methods: {
      toMain(){
          this.$router.push({path: '/main'})
      }
  }
}
</script>
<style>
.thanks-list{
    margin: 0 auto;
    text-align: center;
    margin-top: 5vh;
    font-size: 2vh;
}


#toMain{
     border: none;
    cursor: pointer;
    background: #0152a3;
    padding: 1vh;
    color: white;
    border-radius: 5px;
    font-size: 2vh;
    text-transform: uppercase;
}
</style>
