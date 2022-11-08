<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
import { mapActions } from 'vuex'
export default {
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(['getAddress', 'getUserInfo'])
    },
    mounted() {
        // this.$store.dispatch('getAddress')
        this.getAddress()
        this.getUserInfo()
    },
    components: {
        FooterGuide
    },

}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>