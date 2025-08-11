<template>
<div class="product-card">
<img :src="image" :alt="name" class="product-image" />
<h2>{{ name }}</h2>
<p>{{ description }}</p>
<p>{{ price }}</p>
<button>Купити</button>
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
