<template>
  <div>
    <router-view />
    <FooterComponent email="example@mail.com" phone="+38009768342" />
  </div>
</template>
<script>
import FooterComponent from "./components/FooterComponent.vue"
export default{
  components: {
    FooterComponent
  }
}
</script>