<script>
    import 'bootstrap/js/dist/dropdown';
    import { store } from '../store';
    export default {
        name : 'NavElement',
        data() {
            return {
                store,
            }
        },
    }
</script>

<template>
    <nav class="navbar navbar-expand-md">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="../assets/img/construction_logo.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown me-4" v-for="navEl in store.NavBarItems">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ navEl.title.toUpperCase() }}
            </a>
            <ul class="dropdown-menu">
                <li  v-for="item in navEl.dropdownItems">
                    <a class="dropdown-item" href="#">{{ item }}</a>
                </li>
            </ul>
            
            </li>
            <button><a href="#">Get Quote</a></button>
        </ul>
        </div>
    </div>
    </nav>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as*;
    nav{
        img{
            width: 80%;
        }
    }
    button{
        background-color: $button-nav-bg;
        @include button-style;

        a{
            text-decoration: none;
            color: $text-color-primary;
            text-transform: uppercase;
        }
    }
</style>