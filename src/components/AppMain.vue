<script>
    
    import { store } from '../store';
    import CardElement from './CardElement.vue';
    import MainJumbo from './MainJumbo.vue';
    import PaintfulCard from './PaintfulCard.vue';
    import MainJumboSlider from './MainJumboSlider.vue';
    import CardNews from './CardNews.vue';
    
    export default {
        name : 'AppMain',
        components:{
            CardElement,
            MainJumbo,
            PaintfulCard,
            MainJumboSlider,
            CardNews,
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

    <section class="news">
        <div class="cards-preview text-center">
            <h3>Latest News</h3>
            <span></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, beatae repellat. Sit maxime quasi consequatur? Placeat assumenda ratione consequatur</p>
        </div>
        <div class="news-cards container-custom">
            <CardNews v-for="article in store.latestNews" :articleEl="article" />
        </div>
        <div class="accordion-element">
            <span class="horizontal-line"></span>
            <h6>View all articles</h6>
            <span class="horizontal-line"></span>
        </div>
    </section>

    <section class="partners">
        <div class="cards-preview text-center">
            <h3>Trusted Partners</h3>
            <span></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, beatae repellat. Sit maxime quasi consequatur? Placeat assumenda ratione consequatur</p>
        </div>
        <div class="partners-slider">
            <div class="img-wrapper" v-for="imgEl in store.partners">
                <img :src="getImgPath(imgEl)" alt="">
            </div>
        </div>
    </section>

    <section class="pre-footer">
        <div class="box-container container-custom">
            <div class="left-box">
                <h3>Building Inspiring Spaces</h3>
                <span></span>
                <p>Vivamus sed consectetur tellus dolor sit amet, consectetur adipiscing lorem elit sadip ipsum ets ficilis uns.</p>
            </div>
            <div class="right-box">
                <button class="get-btn"><a href="#">Get a free quote</a></button>
                <p>Only takes a few seconds!</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss' as*;
    @use '../style/partials/variables' as*;

    .cards-preview{
        margin: 0 auto;
        width: 50%;
        padding-top: 5rem;
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
        padding-bottom: 4rem;
        
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

    .news{
        background-color: $second-jumbo-bg;
        padding-bottom: 2.5rem;
        .news-cards{
            @include flex-center;
            padding-bottom: 3rem;
        }

        .accordion-element{
            h6{
                padding: 0 6.5rem;
            }

            span{
                height: 2px;
                width: 280px;
                background-color: $text-color-white;
                opacity: 100%;
            }
        }
    }

    .partners-slider{
        @include flex-center;
        padding-bottom: 4rem;
        .img-wrapper{
            margin: 0 .5rem;
            img{
                width: 150px;
            }
        }
    }

    .pre-footer{
        background-image: url('../assets/img/about-call-to-action-57862405.jpg');
        background-position: bottom;
        background-size: cover;
        padding: 5rem;
        .box-container{
            @include flex-center;
            padding: 5rem 0;
            .left-box{
                flex-basis: 60%;
                h3{
                    color: $text-color-white;
                    padding-bottom: 1rem
                }
                span{
                    @include horizontal-line-yhellow;
                }
                p{
                    color: $text-color-white;
                }
            }
            .right-box{
                flex-basis: 40%;
                text-align: center;
                button{
                    @include button-style;
                }
                .get-btn{
                    background-color: $button-nav-bg;
                    a{
                        color: $text-color-primary;
                    }
                }

                p{
                    color: $text-color-white;
                    padding-top: 1rem;
                }
            }
        }
    }
</style>