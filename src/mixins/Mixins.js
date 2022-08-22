export const Mixins = {
    data(){
        return{
            message:'来自Mixins+++++'
        }
    },
    methods:{

        changeMessage(){
            this.message = '更改方法来自Mixins的changeMessage'
        }
    }
}