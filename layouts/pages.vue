<template>
    <div>
        <Header />
        <Nuxt />
        <Subscriber />
        <Footer />
        
    </div>
</template>

<script>
    
    import Header from '@/components/nav/Header'
    import Footer from '@/components/nav/Footer'
    import Subscriber from '@/components/utils/SubscriberModal'

    export default {
        data(){
            return {

            }
        },

        head(){
            return {
                title: "Trifold - All-encompassing marriage app that gives you faith-based curated answers to prevailing issues"
            }
        },

        components: {
            Header,
            Footer,
            Subscriber
        },

        created(){

        },

        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    
</style>