<script>
    export default {
        name : 'JumboElement'
    }
</script>

<template>
    <div class="jumbo-wrapper">
        <div class="element-container">
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>test</button>
            <button>test</button>
        </div>
    </div>
    <div class="emphasis-bar text-center">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <button>test button</button>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as*;
    .jumbo-wrapper{
        background-image: url('../assets/img/home-slider-62528242.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 800px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .emphasis-bar{
        background-color: $jumbo-bg-color;
        position: relative;
        h3{
            padding: 2.5rem 0;
        }
        button{
            position: absolute;
            top: 95px;
            transform: translate(-50%);
        }
    }
</style>    