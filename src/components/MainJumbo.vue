<script>
    import { store } from '../store';
    export default {
        name : 'MainJumbo',
        data() {
            return {
                store
            }
        },

    }
</script>

<template>
    <div class="jumbo-wrapper">
        <div class="top-wave"></div>
        <div class="content">
            <div class="little-card text-center" v-for="item in store.statsCompany">
                <i :class="item.icon" class="fa-3x mb-1"></i>
                <h2>{{ item.number }}</h2>
                <p>{{ item.description.toUpperCase() }}</p>
            </div>
        </div>
        <div class="bottom-wave"></div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as*;
    @import "@fortawesome/fontawesome-free/css/all.css";
    .jumbo-wrapper{
        background-image: url('../assets/img/home-244125289.jpg');
        background-position: center;
        background-size: cover;
        height: 500px;
        width: 100%;
        border-top: solid 20px white;
        position: relative;
        .top-wave{
            width: 100%;
            height: 130px;
            border-radius: 70%;
            background-color: white;
            position: absolute;
            bottom: 414px;
        }

        .bottom-wave{
            width: 100%;
            height: 131px;
            border-radius: 70%;
            background-color: white;
            position: absolute;
            top: 414px;
        }

        .content{
            height: 100%;
            @include flex-center;
            
            .little-card{
                padding: 0 1.5rem;

                i,
                h2{
                    color: $icon-color;
                }

                p{
                    color: $text-color-white;
                    font-size: .9rem;
                }
            }
        }
    }
</style>