<template>
    <div>
        <h1>
            这是一个测试页面
    
        </h1>
        <h2>{{one}}
        </h2>
        <button class="btn" @click="handleClickAdd">加</button>
        <button class="btn" @click="handleClickRduce">减</button>
        <button class="btn" @click="handleClickRest">重置</button>
        <button class="btn" @click="handleClicGetData">获取数据</button>
        <div v-if="show" class="dataBox">
            <ul>
                <li v-for="(item,key) in abc" :key="key">{{item}}</li>
            </ul>
        </div>
        <div v-else>暂时没有数据...</div>
        <div>
            <router-link to="/pageA">pageA</router-link>
            <router-link to="/pageB">pageB</router-link>
    
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import mockData from '../mock.js'
    
    let mateDate = {
        a: 1,
        b: 2,
        c: 3,
    }
    export default {
        name: "Hi",
        props: {
            num: String
        },
        data() {
            return {
                one: 0,
                abc: mateDate,
                show: false
            }
        },
        mounted() {
            console.log(mockData)
        },
    
        methods: {
            handleClickAdd: function() {
                return this.one += 1
            },
            handleClickRduce: function() {
                return this.one -= 1
            },
            handleClickRest: function() {
                return this.one = 0
            },
            handleClicGetData: function() {
                return this.show = true
            }
        }
    }
</script>

<style>
    h1 {
        color: brown;
    }
    
    ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }
    
    li {
        list-style-type: none;
    }
    
    .dataBox {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background-color: cadetblue;
        display: flex;
        justify-content: center;
        align-items: center
    }
</style>
