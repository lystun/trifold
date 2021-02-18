<template>
    <div class="main-content">
        <section class="jumbotron about__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white">About Us</h1>
            </div>
        </section>

        <section class="slice slice-lg delimiter-bottom">
            <div class="container">
                <div class="row row-grid">
                    <div class="col-lg-4">
                        <h4>Who We Are</h4>
                    </div>
                    <div class="col-lg-8">
                        <p class="lead lh-180">
                            We are reformers who have refused to accept failed marriages as a norm. So, we created a mobile app that provides on-the-go marriage health information and affordable counseling to young couples.
                        </p>
                    </div>
                </div>
                <div class="row row-grid">
                    <div class="col-lg-4">
                        <h4>What We Do</h4>
                    </div>
                    <div class="col-lg-8">
                        <p class="lead lh-180">We now live in a fast-paced world, where communications and relationships are far-reaching. While this can be really advantageous as the world has become a global village, it could also be hard on personal relationships that are off the digital space. One of such is marriage. So here is how we want to help manage, protect, and improve your marriage relationship.</p>
                        <p class="lead lh-180">We provide you with access to on-the-go answers to questions and problem-triggers in marriage at affordable rates integrated right into the new tech culture in which the world operates, making it easier for you as a married, about-to wed and even single to acquire the right knowledge and understanding that would help you prepare for marriage and scale through challenges that might arise in marriage.</p>
                        <p class="lead lh-180">We created these solutions into a product that provides good counsel in the 3 most important areas (Parenting, Finance, and Intimacy). Thereby, securing not only marriages but the future of the children that could come from good and godly marriages as well as the socio-economic stability of the society at large.</p>
                    </div>
                </div>
                <div class="row row-grid">
                    <div class="col-lg-4">
                        <h4>The App</h4>
                    </div>
                    <div class="col-lg-8">
                        <p class="lead lh-180">Trifold is an all-encompassing marriage app that gives you faith-based curated answers to prevailing issues such as; finances, parenting, sex and intimacy, and other marital questions; all at your finger tip. We place God right in the centre of your marital life. Why? Because a threefold cord is not easily broken.</p>
                        <p class="lead lh-180">Learn the principles that govern successful, happy, and fulfilling marriages with Trifold. Whether you are married, about to wed, dating, or single, this app is a must for understanding the ‘how-tos’ to  building a thriving and lasting marital relationship.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Subscriber from "../components/utils/SubscriberModal";

    export default {
        layout:'pages',
        
        components: {
            Subscriber
        },

        data(){
            return {

            }
        },

        created(){

        },

        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
     .about {

        &__header{
            padding-top: 12rem;
            color: $white;
        }
    }
</style>