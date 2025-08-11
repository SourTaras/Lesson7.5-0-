<template>
<div class="MessageBox">
<h2>{{ title }}</h2>
<p>{{ message }}</p>
</div>
</template>
<script>
export default{
        name: "MessageComponent",
        props: {
            title:{
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            }
        }
    }
    

    

</script>
<style scoped>
.MessageBox{
    border: 2px solid #42b983;
    border-radius: 15px;
    padding: 15px;
    margin: 10px auto;
    width: 350px;
    text-align: center;
    font-size: 18px;
    color: #333;
    background-color: #f0f9f5;
}
h2{
    color: #2c3e50;
    font-size: 22px;
    margin-bottom: 10px;
}
</style>