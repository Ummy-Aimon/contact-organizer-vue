<template>
    <NavBar/>
    <router-view/>
  </template>
  
  <!-- <style>
  @import "styles.css";
  </style> -->
  <script>
  import NavBar from "./components/NavBar";
  export default {
    Name:'App1',
    components: {NavBar}
  }
  </script>