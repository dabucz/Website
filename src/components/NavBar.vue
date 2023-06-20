<template>
  <div class="navbar">
    <div class="logo">
      DABU
      <div class="menu menu2" :class="{ responsive: isResponsive }">
        <RouterLink
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
        >
          {{ route.name }}
        </RouterLink>
      </div>
    </div>
    <div class="menu" :class="{ responsive: isResponsive2 }">
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path ? route.path : ''">
        {{ route.name }}
      </RouterLink>
      <button href="javascript:void(0);" class="icon" @click="toggleResponsive">
        <i class="fa" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import router from "./../router/";

const excludedRoutes = ["NotFound"];
const routes = router
  .getRoutes()
  .filter((route) => !excludedRoutes.includes(route.name));

const isResponsive = ref(false);
const isResponsive2 = ref(false);
const isMenuOpen = ref(false);

const toggleResponsive = () => {
  isResponsive.value = !isResponsive.value;
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #fff;
  border-bottom: 1px solid #2c2c2c;
}
.menu {
  overflow: hidden;
}
.menu a {
  color: rgb(212, 212, 212);
}

.menu a:hover {
  border-radius: 5px;
  transition: 0.3s ease;
  color: hsla(160, 100%, 37%, 1);
  transform: translateY(-2px);
}
.menu a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.logo {
  margin-right: auto;
  font-size: 32px;
}
button i {
  color:#fff
}

button {
  border: none;
  background-color: transparent;
  outline: none;
}
.menu .icon {
  display: none;
  background-color: #00000000;
}
@media screen and (min-width: 480px) {
  .menu2 {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .menu a {
    display: none;
  }
  .menu button.icon {
    float: right;
    display: block;
  }
  .menu.responsive {
    position: relative;
  }
  .menu.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .menu.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .menu.responsive2 {
    position: relative;
  }
  .menu.responsive2 .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .menu.responsive2 a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
