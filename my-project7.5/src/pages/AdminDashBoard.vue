<template>
<div class="dashboard">
<nav class="sidebar">
<router-link to="/admin/products" class="nav-link">Головна</router-link>
<router-link to="/admin/reviews" class="nav-link">Відгуки</router-link>
<router-link to="/admin/login" class="nav-link">Особистий кабінет</router-link>
</nav>
<main class="main-content">
<router-view > </router-view>
</main>
</div>
</template>
<script>
export default {
    name: 'AdminDashBoard'
}
</script>
<style scoped>
.dashboard{
    display: flex;
    min-height: 100vh;
}
.sidebar{
    width: 220px;
  background-color: #2c3e50;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    
}
.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #34495e;
}

.router-link-exact-active {
  background-color: #1abc9c;
  color: white;
}

.main-content {
  flex: 1;
  padding: 30px;
  background-color: #f4f4f4;
}
</style>
