<template>
    <div id="app">
     <header>
        <button @click="show = !show">
            <i class="ion-navicon"></i>
        </button>
        <h1 class="smartbi-header-text">SmartBI</h1>
    </header>
        <transition name="slide-fade">
        <aside v-show="show">
            <div class="buttons-container" @click="show = false">
            <router-link to="/main">
                <i class="ion-home"></i>
            </router-link>
            <router-link to="/registration">
                <i class="ion-key"></i>
            </router-link>
            <router-link to="/downloading">
                <i class="ion-arrow-down-a"></i>
            </router-link>
            </div>
        </aside>
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
      show: false
    };
  }
};
</script>
<style>
.smartbi-header-text{
    color:white;
    font-size: 2.7vh;
    font-weight: 100;
    margin-left: 1vh;
}


</style>