<script>
    export default {
        name: 'PaintfulCard',
        props:[
            'cardIt'
        ]
    }
</script>

<template>
    <div class="card-wrapper text-center">
        <i :class="cardIt.icon, cardIt.color" class="fa-2x"></i>
        <h6>{{ cardIt.title }}</h6>
        <span></span>
        <p>{{ cardIt.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as*;
    @import "@fortawesome/fontawesome-free/css/all.css";
    .card-wrapper{
        padding: 0 1rem;
        @include flex-column-center;

        span{
            width: 15px;
            border: 1px solid $text-color-primary;
            margin-bottom: 0.8rem;
        }
        h6,
        p{
            line-height: 1.8;
            color: $text-color-primary;
            
        }

        i{
            border: .5px solid;
            border-radius: 100%;
            height: 70px;
            width: 70px;
            @include flex-center;
            color: $text-color-white;
            margin-bottom: .5rem;
        }
        
        .acqua{
            background-color: $house-icon-bg;
        }
        .blue{
            background-color: $gear-icon-bg;
        }

        .orange{
            background-color: $users-icon-bg;
        }

        .green{
            background-color: $lightbulb-icon-bg;
        }
    }
</style>