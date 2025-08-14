<template>
<div class="product-card">
<img :src="image" :alt="name" class="product-image" />
<h2>{{ name }}</h2>
<p>{{ description }}</p>
<p>{{ price }}</p>
<button class="buy-button">Купити</button>
</div>
</template>
<script>
export default{
    name: "ProductCardComponent",
    props: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
.product-card{
    max-width: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow:  4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.product-image{
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.buy-button{
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;

}

</style>