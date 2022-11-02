<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        FooterGuide
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>