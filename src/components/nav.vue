<template>
    <el-container>
        <el-header>
            <div class="logoBox">LOGO</div>
            <div class="navMenu">
                <div class="navMenuItem" v-for="(item, key) in list" :key="key">{{item}}</div>
            </div>
            <div class="userInfo">
                <div class="iconBox"><i class="el-icon-search"></i></div>
                <div class="iconBox"><i class="el-icon-bell"></i></div>
                <div class="iconBox ">
                    <i class="el-icon-setting"></i>
                </div>
                <div class="userName">JuLien Renvoye</div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'nav',
        data() {
            return {
                list: ['工作门户', '个人门户', '经营决策', '运营门户', '职能管理']
            }
        }
    }
</script>

<style>
    .el-header,
    .el-footer {
        background-color: #008d58;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }
    
    .el-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .el-aside {
        background-color: #262c31;
        color: #333;
        text-align: center;
        line-height: 200px;
        height: 100vh;
    }
    
    .el-main {
        background-color: #e3e4e4;
        color: #333;
        text-align: center;
        line-height: 160px;
        height: 100vh;
    }
    
    body>.el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    
    .logoBox {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        /* background-image: url('./img.jpg'); */
        background-size: 100% 100%;
    }
    
    .navMenu {
        display: flex;
    }
    
    .navMenuItem {
        width: 80px;
    }
    
    .navMenuItem:hover {
        background-color: #05775c;
        cursor: pointer;
    }
    
    .userInfo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .iconBox {
        width: 40px;
        height: 40px;
        display: flex;
        font-size: 24px;
        justify-content: center;
        align-items: center;
    }
    
    .userName {
        font-size: 14px;
        margin-left: 6px;
    }
</style>

