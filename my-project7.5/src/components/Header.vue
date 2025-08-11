<template>
<header>
<h1>{{ title }}</h1>
<p>{{ mydata }}</p>
</header>
</template>
<script>
export default{
    name: "HeaderComponent",
    props: {
        title: {
            type: String,
            required: true
        },
        mydata: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
header{
    background: #42b983;
    color: #fff;
    padding: 15px;
    text-align: center;
}
</style>
