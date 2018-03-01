<template>
    <section>
       
        <table class='table-users'>
    <thead>
        <th>Id</th>
        <th>ПІБ</th>
        <th>Посада та організація</th>
        <th>Телефон</th>
        <th>Email</th>
        <th>Udid</th>
    </thead>
    <tr v-for="user in users" :key="user">
        <td>{{user.id}}</td>
        <td>{{user.pib}}</td>
        <td>{{user.place}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td>{{user.udid}}</td>
    </tr>
</table>
    <div class="spinner" v-if="disabled">
        <svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-facebook" style="background: none;"><rect ng-attr-x="{{config.x1}}" ng-attr-y="{{config.y}}" ng-attr-width="{{config.width}}" ng-attr-height="{{config.height}}" ng-attr-fill="{{config.c1}}" x="17.5" y="29.2289" width="15" height="41.5423" fill="#1d3f72"><animate attributeName="y" calcMode="spline" values="18;30;30" keyTimes="0;0.5;1" dur="0.6" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.12s" repeatCount="indefinite"></animate><animate attributeName="height" calcMode="spline" values="64;40;40" keyTimes="0;0.5;1" dur="0.6" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.12s" repeatCount="indefinite"></animate></rect><rect ng-attr-x="{{config.x2}}" ng-attr-y="{{config.y}}" ng-attr-width="{{config.width}}" ng-attr-height="{{config.height}}" ng-attr-fill="{{config.c2}}" x="42.5" y="28.4271" width="15" height="43.1458" fill="#5699d2"><animate attributeName="y" calcMode="spline" values="20.999999999999996;30;30" keyTimes="0;0.5;1" dur="0.6" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.06s" repeatCount="indefinite"></animate><animate attributeName="height" calcMode="spline" values="58.00000000000001;40;40" keyTimes="0;0.5;1" dur="0.6" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.06s" repeatCount="indefinite"></animate></rect><rect ng-attr-x="{{config.x3}}" ng-attr-y="{{config.y}}" ng-attr-width="{{config.width}}" ng-attr-height="{{config.height}}" ng-attr-fill="{{config.c3}}" x="67.5" y="27.9191" width="15" height="44.1618" fill="#d8ebf9"><animate attributeName="y" calcMode="spline" values="24;30;30" keyTimes="0;0.5;1" dur="0.6" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="0s" repeatCount="indefinite"></animate><animate attributeName="height" calcMode="spline" values="52;40;40" keyTimes="0;0.5;1" dur="0.6" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="0s" repeatCount="indefinite"></animate></rect></svg>
    </div>
    </section>
</template>


<script>
import AuthenticationService from "../services/AuthenticationService";
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

export default {
  data() {
    return {
      users: [],
      disabled: false
    };
  },
  methods: {
    getUsers: function() {
     this.disabled = true;
      Vue.http.post("/getJson").then((response = [] )=> {
        this.disabled = false;
        this.users = response.body;
      });
    }
  },
    created: function () {
        return this.getUsers();
    }
};
</script>

<style>
    .table-users {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

.table-users td, .table-users th {
    border: 1px solid #ddd;
    padding: 8px;
}

.table-users tr:nth-child(even){background-color: #f2f2f2;}

.table-users tr:hover {background-color: #ddd;}
.spinner{
    text-align: center;
    margin-top: 5vh;
}
.table-users th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0152a3;
    color: white;
}
</style>
