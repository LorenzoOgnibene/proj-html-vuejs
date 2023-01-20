<script>
    import { store } from '../store';
    export default {
        name : 'MainJumboSlider',
        data() {
            return {
                store,
                activeIndex : 0,
            }
        },

        methods: {

            getImgPath(imgPath){
                return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
            }, 

            prevImg(){
                this.activeIndex--
                if(this.activeIndex < 0){
                    this.activeIndex = store.testimonials.length - 1;
                }
            },

            nextImg(){
                this.activeIndex++
                if(this.activeIndex >= store.testimonials.length){
                    this.activeIndex = 0
                }
            },
            autoPlay(){
               return setInterval(this.nextImg, 5000)
            }
        },

        // mounted() {
        //     this.autoPlay()
        // },
    }
</script>

<template>
    <div class="jumbo-wrapper">
        <div class="top-wave"></div>
        <div class="content">
            <div class="cards-preview text-center">
                <h3>Our Home Owners Say</h3>
                <span></span>
            </div>
            <div class="slider text-center">
                <div class="slider-content">
                    <img :src="getImgPath(store.testimonials[activeIndex].img)" alt="">
                    <p><em>{{ store.testimonials[activeIndex].description }}</em> </p>
                </div>
                <h6>Harry smith - new home owner</h6>
                <i class="fa-regular fa-circle" @click="prevImg()" :class="(activeIndex == 0) ? 'bg-white' : ''"></i>
                <i class="fa-regular fa-circle" @click="nextImg()" :class="(activeIndex == 1) ? 'bg-white' : ''"></i>
            </div>
        </div>
        <div class="bottom-wave"></div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as*;
    @import "@fortawesome/fontawesome-free/css/all.css";
    .jumbo-wrapper{
        background-image: url('../assets/img/home-parallax-144609983.jpg');
        background-position: center;
        background-size: cover;
        height: 600px;
        width: 100%;
        position: relative;
        .top-wave{
            width: 100%;
            height: 133px;
            border-radius: 40%;
            background-color: $second-jumbo-bg;
            position: absolute;
            bottom: 520px;
        }

        .bottom-wave{
            width: 100%;
            height: 133px;
            border-radius: 40%;
            background-color: $second-jumbo-bg;
            position: absolute;
            top: 521px;
        }

        .content{
            height: 100%;
            @include flex-column-center;
            
            h3{
                color: $text-color-white;
            }
            .cards-preview{
                padding-bottom: 0;
                padding-top: 7rem;
            }
            .slider{
                width: 40%;
                .slider-content{
                    height: 260px;
                }

                img{
                    border-radius: 50%;
                    margin-bottom: 1rem;
                }

                p{
                    color: $text-color-white;
                    margin-bottom: 1rem;
                }

                h6{
                    color: $text-color-white;
                    text-transform: uppercase;
                    font-weight: 700;
                }

                i{
                    color: $text-color-white;
                    border-radius: 100%;
                    margin-left: .5rem;
                    font-size: .6rem;
                }
            }

            }
        }
    
</style>