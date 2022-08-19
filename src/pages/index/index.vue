<template>
    <div>
        <button type="button">按钮</button>
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
        }]
    }}
}
</script>