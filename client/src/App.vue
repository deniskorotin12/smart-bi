<template>
    <div id="app">
     <header>
    <div class='home-block'>
       <router-link class='home_link' to="/main">
            <i class="material-icons">home</i>
       </router-link>
        <router-link to="/main"> <h1 class="smartbi-header-text">SmartBI</h1> </router-link>
    </div>
    <div class="contacts">
        <h4>Email: support@smartbi.com.ua</h4>
    </div>
    <div class="login-block">
            <router-link v-if="!isEnabled" id='login-link' to="/login">
                <i class="material-icons">exit_to_app</i>
            </router-link>
            <router-link v-if="isEnabled" id='users-link' to="/users">
                <i class="material-icons">person</i>
            </router-link>
     </div>
    </header>
        <transition name="slide-fade">
        </transition>
        <main id="main-block" @click="show = false">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        </main>
    </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      isEnabled: window.localStorage.getItem('authUser')?true:false
    };
  }
};
</script>
<style>
.contacts{
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
}


.home_link {
  text-decoration: none;
  color: white;
}
.smartbi-header-text {
  color: white;
  font-size: 2.7vh;
  font-weight: 100;
  margin-left: 1vh;
}
header {
  text-decoration: none;
}
</style>