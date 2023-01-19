<script>
    export default {
        name : 'AppMain'
    }
</script>

<template>
    <div class="cards-preview text-center">
        <h3>Specialists In Modern Construction</h3>
        <span></span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, beatae repellat. Sit maxime quasi consequatur?</p>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as*;

    .cards-preview{
        margin: 0 auto;
        width: 50%;
        padding-top: 6rem;

        h3{
            color: $text-color-secondary;
            margin-bottom: 1.2rem;
        }
        span{
            display: inline-block;
            width: 170px;
            height: 2px;
            background-color: $jumbo-bg-color;
            margin-bottom: 1.5rem;
        }
    }
</style>