
<script>
    export default {
        name : 'CardNews',
        props:[
            'articleEl'
        ],

        methods: {
            getImgPath(imgPath){
                return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
            }
        },
    }
</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="getImgPath(articleEl.img)" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ articleEl.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ articleEl.date }}</h6>
            
            <p class="card-text">{{ articleEl.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as*;
    .card{
        margin: 0 .5rem;
        img{
            border-radius: 0;
        }
        h5{
            padding-bottom: .5rem;
        }
        h6{
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(143, 143, 143, 0.6);
            font-size: .8rem;
            
        }
        p{
            line-height: 2;
            color: $text-color-primary;
        }
    }
</style>