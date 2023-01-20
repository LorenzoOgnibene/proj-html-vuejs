<script>
    
    import { store } from '../store';
    import CardElement from './CardElement.vue';
    import MainJumbo from './MainJumbo.vue';
    import PaintfulCard from './PaintfulCard.vue';
    import MainJumboSlider from './MainJumboSlider.vue';
    
    export default {
        name : 'AppMain',
        components:{
            CardElement,
            MainJumbo,
            PaintfulCard,
            MainJumboSlider,
        },

        data() {
            return {
                store,
            }
        },
        methods: {
            getImgPath(imgPath){
                return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
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

    <section class="recent-work container-custom">
        <div class="recent-img">
            <img v-for="img in store.imgRecentWork" :src="getImgPath(img)" alt="" >
        </div>
        <div class="accordion-element">
            <span class="horizontal-line"></span>
            <h6>View all Projects</h6>
            <span class="horizontal-line"></span>
        </div>
    </section>

    <section class="values">
        <div class="cards-preview text-center">
            <h3>Our Core Values</h3>
            <span></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, beatae repellat. Sit maxime quasi consequatur? Placeat assumenda ratione consequatur</p>
        </div>
        <div class="cards-wrapper container-custom">
            <PaintfulCard v-for="cardItem in store.ourCoreValues"  :cardIt="cardItem"/>
        </div>

        <MainJumboSlider />
    </section>

</template>

<style lang="scss">
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
            @include horizontal-line-yhellow;
        }

        p{
            line-height: 2;
            color: $text-color-primary;
        }
    }

    .cards-wrapper{
        display: flex;
        justify-content: space-between;
        padding-bottom: 4rem
    }

    .recent-img{
        @include flex-center;
        margin-bottom: 3rem;
        
        img{
            margin: 0 .5rem;
            width: 250px;
            height: 250px;
        }
    }

    .accordion-element{
        @include flex-center;
        margin-bottom: 4rem;
        h6{
            padding: 0 5rem;
            color: $text-color-secondary;
            text-transform: uppercase;
            font-size: .8rem;
            opacity: 60%;
        }
        span{
            display: inline-block;
            width: 255px;
            height: 1px;
            background-color: $text-color-primary;
            opacity: 30%;
            
        }
    }

    .values{
        width: 100%;
        background-color: $second-jumbo-bg;
    }
</style>