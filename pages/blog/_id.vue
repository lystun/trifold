<template>
    <div class="blog">
        <section class="jumbotron blog__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white"> {{ post.title }} </h1>
                <div class="d-flex align-items-center justify-content-center mt-5">
                    <!-- <div>
                        <a href="#" class="avatar rounded-circle mr-3">
                            <img :alt="post.title" :src="post.photo">
                        </a>
                    </div> -->
                    <div class="text-left">
                        <span class="d-block h6 mb-0 text-white">{{ post.author }} </span>
                        <span class="text-sm text-white"> {{ post.createdAt | formatDate }} </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice blog__article">
            <div class="container">
                <div class="row">
                    <!-- <div class="col-md-3 bg-info">
                        Share this post
                    </div> -->
                    <div class="col-md-9 mx-auto">
                        <section class="image mb-3">
                            <img :src="post.photo" class="img-fluid" alt="">
                        </section>
                        <article>
                            <div class="lead text" v-html="post.content"></div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice blog__comment">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="">
                            <!-- <Disqus :identifier="this.$route.path" /> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    layout:'pages',
    head(){
        return{

        }
    },

    transitions: 'fade',

    mounted(){
        this.post
    },

    filters : {
        formatDate(value){
            return new Date(value).toDateString()
        },
    },

    async asyncData({$axios, params}){
        const post = await $axios.$get(`/posts/${params.id}`)

        return {
            post : post.data.data
        }
    },

    methods : {
        truncate(post) {
            let body = this.stripTags(post);
            return body.length > 120 ? body.substring(0, 120) + '...' : body;           
        },

        stripTags(text) {
            return text.replace(/(<([^>]+)>)/ig, '');
        },

    }

}
</script>

<style lang="scss" scoped>
    .blog {

        &__header{
            padding-top: 12rem;
            color: $white;
        }

        &__article {
            background: $white;

            .text {
                
                font-size: 1.2rem;
                color: $dark;

                &::first-letter {
                    font-size: 2rem;
                    font-weight: bold;
                }
            }
        }
    }
</style>