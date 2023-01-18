<script>
    import NavElement from './NavElement.vue';
    import JumboElement from './JumboElement.vue';
    export default {
        name : 'AppHeader',
        components:{
            NavElement,
            JumboElement,
        }
    }
</script>

<template>
    <nav class="wrapper-lg">
        <NavElement />
    </nav>
    <JumboElement />
</template>

<style lang="scss">
    .wrapper-lg{
        width: 90%;
        margin: 0 auto;
    }
</style>