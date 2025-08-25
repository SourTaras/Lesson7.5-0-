<template>
<div>
<router-view></router-view>

</div>
<FooterComponent email="example@mail.com" phone="+38009768342" />
</template>
<script>
import FooterComponent from "./components/FooterComponent.vue"
export default{
  components: {
    FooterComponent
  }
}
</script>