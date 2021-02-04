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
                        <div class="card border-0 hover-shadow-lg shadow p-3">
                            <nuxt-link :to="{ name: 'blog-slug', params: { slug: "red" } }">
                                <img src="https://via.placeholder.com/400x200" class="img-fluid rounded shadow" >
                                <div class="pt-4 text-muted">
                                    <small class="text-uppercase">5 days ago </small>
                                    <h5>New Blog Post</h5>
                                    <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit beatae temporibus? Delectus aliquam sit aut consequatur quibusdam eius beatae aliquid corrupti facilis nostrum, possimus voluptatem at sequi doloribus iure. </p>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                    <!-- <div class="card-columns">
                        <div class="card border-0 hover-shadow-lg shadow p-3" v-for="(post, index) in posts" :key="index">
                            <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
                                <img :alt="post.title" :src="post.photo" class="img-fluid rounded shadow" >
                                <div class="pt-4 text-muted">
                                    <small class="text-uppercase">{{ post.createdAt | formatDate }} </small>
                                    <h5>{{ post.title }}</h5>
                                    <p class="mt-3">{{ truncate(post.content) }} </p>
                                </div>
                            </nuxt-link>
                        </div>
                    </div> -->

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
    </div>
</template>

<script>
    
    import { mapGetters } from "vuex";

    export default {
        layout:'pages',

        head(){
            return{
                title: "Blog | Trifold"
            }
        },

        data(){
            return{
                posts: [],
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
            // this.checkPosts();
        },

        methods: {
            async getPosts(){
                let { data } = await this.$axios.$get('/posts')
                this.$store.dispatch('posts/setPosts', data)
            },

            checkPosts(){
                if(!this.posts){
                    this.getPosts();
                }
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