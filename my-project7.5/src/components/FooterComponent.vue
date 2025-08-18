<template>
<footer>
<p>{{ email }}</p>
<p>{{ phone }}</p>
<ul>
<li><a>Про нас</a></li>
<li><a>Доставка</a></li>
</ul>
</footer>
</template>
<script>
export default {
    name: "FooterComponent",
    props: {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        }
    }
}
</script>
<style scoped>
footer{
    text-align: center;
    font-size: 18px;
    font-weight: bold;

}
ul{
    display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
list-style: none
}
</style>
