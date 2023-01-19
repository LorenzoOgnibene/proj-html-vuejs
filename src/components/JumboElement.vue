<script>
    export default {
        name : 'JumboElement'
    }
</script>

<template>
    <div class="jumbo-wrapper">
        <div class="elements-container text-center">
            <h1>Building inspiring spaces</h1>
            <p>We Build Inspiring Residential & Commercial Spaces</p>
            <button class="dark-btn me-3"><a href="#">Explore recent work</a></button>
            <button class="get-btn"><a href="#">Get a quote today</a></button>
        </div>
    </div>
    <div class="emphasis-bar text-center">
        <h3>Do You Have A Construction Project We Can Help With?</h3>
        <button class="dark-btn"><a href="#">Get a free quote</a></button>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss' as*;
    @use '../style/partials/variables' as*;
    .jumbo-wrapper{
        background-image: url('../assets/img/home-slider-62528242.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 800px;
        width: 100%;
        @include flex-center;
    }

    .elements-container{
        
        h1{
            color: $text-color-white;
            text-transform: uppercase;
            font-weight: 600;
        }
        
        p{
            color: $jubo-text-color;
            font-size: 1.15rem;
            padding: 1.2rem 0;
        }
        
        button{
            @include button-style;
        }
        
    }
    .get-btn{
        background-color: $jumbo-bg-color;
        a{
            color: $text-color-primary;
        }
        }

    .emphasis-bar{
        background-color: $jumbo-bg-color;
        position: relative;
        h3{
            padding: 2.5rem 0;
            color: $text-color-secondary;
            font-weight: 300;
            
        }
        button{
            position: absolute;
            top: 95px;
            transform: translate(-50%);
            @include button-style;
            border: 2px solid white;
        }
    }
    .dark-btn{
        background-color: $button-bg-color;
        a{
            color: $text-color-white;
        }
    }
    </style>    