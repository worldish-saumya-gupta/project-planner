<template>
  <nav class="main-nav">
    <router-link :to="{name: 'home'}">Projects</router-link> |
    <router-link :to="{name: 'add-project'}">Add New Project</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>