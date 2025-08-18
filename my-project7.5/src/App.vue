<template>
<div>
<HeaderComponent title="Вітаю у Vue-додатку!" mydata="Додаткова інформація" />
<MessageComponent title="Привіт, Vue!" message="Я вмію створювати компоненти із пропсами!" />
<MessageComponent title="Що далі?" message="Тепер я можу передавати різні дані в комопоненти" />
<ProductList/> 

</div>
</template>
<script>
import HeaderComponent from "./components/Header.vue"
import MessageComponent from "./components/MessageComponent.vue"
import ProductList from "./components/ProductList.vue"
export default{
  components: {
    HeaderComponent,
    MessageComponent,
    ProductList
  }
}
</script>