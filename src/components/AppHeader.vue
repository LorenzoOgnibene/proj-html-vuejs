<script>
    import NavElement from './NavElement.vue';
    export default {
        name : 'AppHeader',
        components:{
            NavElement,
        }
    }
</script>

<template>
    <nav class="wrapper-lg">
        <NavElement />
    </nav>
</template>

<style lang="scss">
    .wrapper-lg{
        width: 90%;
        margin: 0 auto;
    }
</style>