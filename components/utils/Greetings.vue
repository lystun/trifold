<template>
    <div class="col-md-6 mb-4 mb-md-0">
        <span class="h2 mb-0 text-white d-block">{{greetings.day}}, {{ name | firstName }} </span>
        <span class="text-white">{{greetings.message}}</span>
    </div>
</template>

<script>
    export default {

        props: ['name'],

        data(){
            return{
                greetings: {
                    day: '',
                    message: ''
                },
            }
        },

        filters:{
            firstName(value){
                if(!value) return ''

                value = value.toString()
                return value.split(' ')[0];
            },
            
            uppercase(value) {
                if (!value) return ''
                value = value.toString()
                return value.toUpperCase()
            },
        },

        created(){
            this.checkDay()
        },

        methods: {
            
            checkDay(){
                let hour = new Date().getHours();

                if(hour < 12){
                    this.greetings.day = 'Morning'
                    this.greetings.message = 'Have a productive day!'
                }else if(hour >= 12 && hour <= 18){
                    this.greetings.day = 'Afternoon'
                    this.greetings.message = 'Have a nice day!'
                }else{
                    this.greetings.day = 'Evening'
                    this.greetings.message = 'Have a nice day!'
                }
            },
        }
    }
</script>

<style>

</style>