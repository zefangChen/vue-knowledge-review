<template>
    <div class="sidebar">

        <el-scrollbar class="scrollbar-wrapper">
            <div class="logo">
                <img src="../../../assets/img/name-logo1.png" alt="logo" style="width: 70%; height: 50px;" v-show="!isCollapse">
                <i class="el-icon-eleme" v-show="isCollapse"></i>
            </div>
            <el-menu
                    :default-active="$route.path"
                    router
                    class="el-menu-vertical-demo"
                    :collapse="isCollapse"
            >
                <SideBarItem :routes="menuList"></SideBarItem>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import { constantRouterMap } from '@/router'
    import {mapState, mapActions, mapGetters} from 'Vuex'
    import SideBarItem from './SideBarItem'
    export default {
        name: "SideBar",
        components: {
            SideBarItem
        },
        data() {
            return {
                menuList: [...constantRouterMap]

            }
        },
        computed: {
            ...mapState({
                isCollapse: ({app}) => app.isCollapse
            }),
        /*    ...mapGetters([
                'menuList'
            ])*/
        },
        mounted(){
            console.log('menuList',this.menuList)
        },
        methods: {
            ...mapActions({
                toggleSideBar: 'toggleSideBar'
            })

        },
        watch: {


        }

    }
</script>

<style lang="less">
    .scrollbar-wrapper{
        height: 100%;
        .el-scrollbar__wrap{
            overflow-x: hidden!important;
        }

        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 260px;
            height: 100%;
            overflow-x: hidden!important;
        }
    }

    .logo {
        text-align: center;
        padding: 4px;
        border-bottom: 1px solid #ddd;
    }

    .el-icon-eleme {
        font-size: 40px;
        color: #409EFF;
        margin: 5px;
    }
</style>
