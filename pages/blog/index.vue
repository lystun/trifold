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

                    <!-- pagination -->
                    <div class="my-3">
                        <div class="d-flex justify-content-between">
                            <select v-model="perPage" class="custom-select custom-select-sm mr-5">
                                <option value="10" disabled >Per Page</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                            <pagination v-model="page" :records="records" :per-page="perPage *1" @paginate="getPosts"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <Subscriber />
    </div>
</template>

<script>    
    import Subscriber from "../../components/utils/SubscriberModal";

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
                page: 1,
                perPage: 10,
                records: 0,
                posts: null
            }
        },

        filters : {
            formatDate(value){
                return new Date(value).toDateString()
            }
        },

        created(){
            this.getPosts()
        },

        methods: {

            
            async getPosts(){
                let posts = await this.$axios.$get(`/posts?page=${this.page}&limit=${this.perPage}`)
                this.records = posts.records
                this.posts = posts.data.data
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