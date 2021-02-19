<template>
    <div class="blog">
        <section class="jumbotron blog__header bg-gradient-primary">
            <div class="container text-center">
                <h1 class="header text-white">Blog Posts</h1>
                <p class="lead"> </p>
            </div>
        </section>

        <section class="slice-sm">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center justify-content-center my-5" v-if="!posts">
                        <div class="spinner-grow text-" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                
                    <div class="card-columns">
                        <div class="card border-0 hover-shadow-lg shadow p-3" v-for="(post, index) in posts" :key="index">
                            <nuxt-link :to="{ name: 'blog-id', params: { id: post.id } }">
                                <img :alt="post.title" :src="post.image" class="img-fluid rounded shadow" >
                                <div class="pt-4 text-muted">
                                    <small class="text-uppercase">{{ post.createdAt | formatDate }} </small>
                                    <h5>{{ post.title }}</h5>
                                    <p class="mt-3">{{ truncate(post.content) }} </p>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>

                </div>

                <!-- <div class="row">
                    <div class="col-md-12  mt-5">
                        <nav class="">
                            <ul class="pagination justify-content-end">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" aria-label="Previous"> Previous </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">Next </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div> -->
            </div>
        </section>

        <Subscriber />
    </div>
</template>

<script>    
    import Subscriber from "../../components/utils/SubscriberModal";
    import { mapGetters } from "vuex";

    export default {
        layout:'pages',

        components: {
            Subscriber
        },

        head(){
            return{
                title: "Blog | Trifold"
            }
        },

        data(){
            return{

            }
        },

        filters : {
            formatDate(value){
                return new Date(value).toDateString()
            }
        },

        computed:{
            ...mapGetters({
                posts: 'posts/getPosts',
            })
        },

        created(){
            this.checkPosts();
            // this.getPosts()
        },

        methods: {
            checkPosts(){
                if( Object.entries(this.posts) == 0){
                    this.getPosts();
                }
            },
            async getPosts(){
                let posts = await this.$axios.$get('/posts')
                this.$store.dispatch('posts/setPosts', posts.data.data)
            },

            truncate(post) {
                let body = this.stripTags(post);
                return body.length > 120 ? body.substring(0, 120) + '...' : body;           
            },

            stripTags(text) {
                return text.replace(/(<([^>]+)>)/ig, '');
            },
        },

    }
</script>

<style lang="scss" scoped>
    .blog {

        &__header{
            padding-top: 12rem;
            color: $white;
        }
    }
</style>