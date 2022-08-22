<template>
    <div>
    <h2>示例列表</h2>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="item.path">
                 {{item.name}}
                </router-link>
           
            </li>
        </ul>
    </div>
</template> 
<script>
export default {
    
    data(){return{
        list:[{
            name:'生命周期',
            path:'/lifecycle'
        },{
            name:'组件通信',
            path:'/componentComm'
        },{
            name:'内置组件',
            path:'/components'
        },{
            name:'常用指令',
            path:'/directives'
        },{
            name:'逻辑复用',
            path:'/logicReuse'
        }]
    }}
}
</script>