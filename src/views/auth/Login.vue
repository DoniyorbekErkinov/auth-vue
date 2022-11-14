<template>
    <div>
        <!--Hey! This is the original version
        of Simple CSS Waves-->
        <div class="header">
            <div class="inner-header">
                <div class="logo" >
                    <span>PAWS WMS</span>
                    <span>Makes Everything Simple</span>
                </div>
                <div class="form-box">
                    <div class="window">
                        <h2>Login</h2>
                        <form class="box">
                            <input v-model="form.username" type="username" class="mt-4 form-control" placeholder="Your username">
                            <input v-model="form.password" type="password" class="mt-2 form-control" placeholder="Your password">
                            <input type="submit" class="mb-2 btn btn-light mt-2" value="Sign In" @click="setTokent">
                        </form>
                    </div>
                </div>
            </div>
            <!--Waves Container-->
            <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
            <!--Waves end-->
        </div>
        <!--Header ends-->
    </div>
</template>

<script setup>
import AuthService from '@/service/auth.service'
import axios from 'axios'
import { ref } from 'vue';
const form = ref({
    username: "",
    password: ""
})
const setTokent = (e) => { 
    e.preventDefault();  
    if(form.value.password && form.value.username) {
        AuthService.login(form.value).then(res => {
            console.log(res)
        }).catch(e => {
            alert(e.message)
        })
    } else {
        alert('Login yoki parol kiritilmagan')
    }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

body {
  margin:0;
}
.header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
  color:white;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.logo{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 42px;
    letter-spacing: 1px;
    font-weight: 700;
}
.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}

.window{
  width:400px;
  height:380px;
  padding:40px;
  text-align:center;
  border-radius:20px;
  display:flex;
  z-index: 999;
  border: 2px solid rgb(255,255,255,0.5);
  flex-direction:column;
  background: inherit;
  justify-content:center;
  align-items:center;
  color:white;
}

.form-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
form.box {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: 100%;
}
input[type="username"], input[type="password"]{
  border-radius:8px;
  border:1px solid white;
  color:white !important;
  background:transparent;
}
form{
  width:100%;
}
input[type="username"]:focus, input[type="password"]:focus{
  background:#00000040;
  box-shadow:none;

  border:1px solid white;
}
input[type="username"]::placeholder, input[type="password"]::placeholder{
  color:white;
}
input[type="submit"]{
  width:100%;
  border-radius:8px;
  text-transform:uppercase;
  font-weight:bold;
  font-size:14px;
}
</style>