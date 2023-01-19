<script>
    import { store } from '../store';
    import CardElement from './CardElement.vue'
    import MainJumbo from './MainJumbo.vue';
    export default {
        name : 'AppMain',
        components:{
            CardElement,
            MainJumbo,
        },

        data() {
            return {
                store,
            }
        },

    }
</script>

<template>
    <div class="cards-preview text-center">
        <h3>Specialists In Modern Construction</h3>
        <span></span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, beatae repellat. Sit maxime quasi consequatur? Placeat assumenda ratione consequatur</p>
    </div>
    <div class="cards-wrapper container-custom">
        <CardElement v-for="card in store.workChain" :cardEl="card" />
    </div>
    
    <MainJumbo />

    <div class="cards-preview text-center">
        <h3>Explore Recent Work</h3>
        <span></span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, beatae repellat. Sit maxime quasi consequatur? Placeat assumenda ratione consequatur</p>
    </div>

    <div class="recent-img">
        <img v-for="img in store.imgRecentWork" :src="`/src/assets/img/${img}`" alt="">
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as*;
    @use '../style/general.scss' as*;
    .cards-preview{
        margin: 0 auto;
        width: 50%;
        padding-top: 6rem;
        padding-bottom: 3rem;

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

        p{
            line-height: 2;
            color: $text-color-primary;
        }
    }

    .cards-wrapper{
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;
    }

    .recent-img{
        @include flex-center;

        img{
            margin: 0 .5rem;
            width: 250px;
            height: 250px;
        }
    }
</style>