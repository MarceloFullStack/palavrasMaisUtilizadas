<template>
<div class="pill"> 
    
    <span class="name">{{name}} </span>
    <span class="amount">{{amount}}</span>
</div>
</template>

<script>
export default {
    props: [
        "name", "amount"
    ]
}
</script>

<style scoped>
    .pill{
        margin: 10px;
        padding: 5px;
        background-color:tomato;
        color:#fff;
        height: 55px;
        border-radius: 30px;
        font-size: 1.2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .pill .name{
        margin-left: 15px;
    }
    .pill .amount{
        margin: 10px;
        padding: 5px;
        height: 35px;
        width: 35px;
        border-radius: 18px;
        background-color: white;
        color: tomato;
        display: flex;
        align-content: center;
        align-items: center;
        font-size: 14px;
    }
</style>