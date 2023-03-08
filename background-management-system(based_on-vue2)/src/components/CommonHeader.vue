<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right:20px ;" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    <img class="userImage" src="../assets/images/userImage.jpeg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="cancel">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Cookie from 'js-cookie'
export default {
    data(){
        return{
            
        }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        },
        handleClick (command) {
            if (command == 'cancel') {
                this.$confirm('是否确认登出账号?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    //清除cookie的token信息
                    Cookie.remove('token')
                    // 清除cookie中的menu
                    Cookie.remove('menu')
                    // 跳转到登录页面
                    this.$router.push('/login')
                    this.$message({
                        type: 'warning',
                        message: '已退出登陆'
                    });
                    
                }).catch(() => {
                    this.$message({
                        type: 'warning',
                        message: '操作已取消'
                    });          
                });
                
            }
            
        }
    },
    computed:{
        ...mapState({
            tags:state => state.tab.tabsList
        })
    }
}
</script>

<style lang="less" scoped>
.header-container{
    padding: 0 20px;
    height: 60px;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        color:#fff;
        font-size:14px;
        margin-left:10px;
    }
    .r-content{
        .userImage{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .l-content{
        display: flex;
        align-items: center;
        /deep/.el-breadcrumb__item{
            .el-breadcrumb__inner{
                font-weight: normal;
                &.is-link {
                    color:#666
                }
            }
            &:last-child {
                .el-breadcrumb__inner{
                    color: #fff;
                }
                
            }
        }
    }
}
</style>