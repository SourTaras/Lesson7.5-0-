<template>
<div>
<HeaderComponent title="Вітаю у Vue-додатку!" mydata="Додаткова інформація" />
<MessageComponent title="Привіт, Vue!" message="Я вмію створювати компоненти із пропсами!" />
<MessageComponent title="Що далі?" message="Тепер я можу передавати різні дані в комопоненти" />
<ProductCardComponent name="Українська вишиванка" description="Стильна вишиванка з традиційними орнаментами" price=1500 image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfzL7Q3MpK7qhw_stK9ZruwOj8KKT-esyJDi0CMJS2RIpT0OjnHmvGALxUHwfWb65UE7H5lFZVElwi3Zy0nAUlZgJlyEvdUK6H6R88GflE" />

</div>
</template>
<script>
import HeaderComponent from "./components/Header.vue"
import MessageComponent from "./components/MessageComponent.vue"
import ProductCardComponent from "./components/ProductCard.vue"
export default{
  components: {
    HeaderComponent,
    MessageComponent,
    ProductCardComponent
  }
}
</script>