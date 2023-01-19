<script>

    export default {
        name : 'CardElement',
        props:[
            'cardEl',
        ]
    }
</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <i :class="cardEl.logo"></i>
            <h5 class="card-title">{{ cardEl.title }}</h5>
            <p class="card-text text-center">{{ cardEl.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as*;
    @import "@fortawesome/fontawesome-free/css/all.css";
    .card{
        background-color: $cards-bg-color;
        border: 0;
        padding: 1rem 0;
        
        .card-body{
            @include flex-column-center;
        }

        h5{
            color: $text-color-secondary;
        }
        i{
            border: .5px solid $text-color-primary;
            border-radius: 100%;
            height: 50px;
            width: 50px;
            @include flex-center;
            color: $text-color-primary;
            margin-bottom: .5rem;
        }
        p{
            color: $text-color-primary;
            line-height: 1.6;
        }
    }
</style>