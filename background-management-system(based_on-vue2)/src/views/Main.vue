<template>
    <div id="main">
        <el-container>
            <el-aside width="auto">
                <!-- Aside -->
                <CommonAside></CommonAside>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- Header -->
                    <CommonHeader></CommonHeader>
                </el-header>
                <CommonTag></CommonTag>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'
export default {
    data(){
        return{
            
        }
    },
    components: {
        CommonAside,CommonHeader,CommonTag
    }
}
</script>

<style scoped>
.el-header{
    padding: 0;
} 
</style>