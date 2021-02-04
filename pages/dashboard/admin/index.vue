<template>
    <div class="col-lg-9 order-lg-2">
        <section class="container">
            <div class="mb-5">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-primary border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-book-reader"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ articlesCount }} </span>
                                        <span class="text-white">Articles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-warning border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-music"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ podcastsCount }} </span>
                                        <span class="text-white">Podcasts</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-dark border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-book"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ booksCount }} </span>
                                        <span class="text-white">Books</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-info border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-tags"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ categoriesCount }} </span>
                                        <span class="text-white">Categories</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-danger border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-book"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ postsCount }} </span>
                                        <span class="text-white">Posts</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-success border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-book"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ merchantsCount }} </span>
                                        <span class="text-white">Merchants</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-secondary-dark border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-book"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ eventsCount }} </span>
                                        <span class="text-white">Events</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-stats bg-gradient-primary border-0 hover-shadow-lg hover-translate-y-n3 mb-4 ml-lg-0">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <div class="icon text-white icon-sm">
                                            <i class="fas fa-book"></i>
                                        </div>
                                    </div>
                                    <div class="pl-4">
                                        <span class="d-block h5 text-white mr-2 mb-1">{{ counsellorsCount }} </span>
                                        <span class="text-white">Counsellors</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        layout: 'admin',

        head(){
            return {
                title: 'Admin Dashboard | Trifold'
            }
        },

        data(){
            return {
                postsCount: 0,
                articlesCount: 0,
                podcastsCount: 0,
                booksCount: 0,
                eventsCount: 0,
                merchantsCount: 0,
                counsellorsCount: 0,
                categoriesCount: 0,
            }
        },

        created(){
            this.getData()
        },

        methods: {
            async getData(){
                const articles = await this.$axios.$get('/articles/count')
                const podcasts = await this.$axios.$get('/podcasts/count')
                const books = await this.$axios.$get('/books/count')
                const posts = await this.$axios.$get('/posts/count')
                const categories = await this.$axios.$get('/categories')
                const events = await this.$axios.$get('/events/count')
                const merchants = await this.$axios.$get('/merchants/count')
                const counsellors = await this.$axios.$get('/counsellors/count')

                this.postsCount =  posts.data.data
                this.articlesCount =  articles.data.data
                this.podcastsCount =  podcasts.data.data
                this.booksCount =  books.data.data
                this.eventsCount =  events.data.data,
                this.merchantsCount =  merchants.data.data,
                this.counsellorsCount =  counsellors.data.data,

                this.categoriesCount =  categories.data.data.length
                this.$store.dispatch('categories/setCategories', categories.data.data)
            }
        },
        
    }
</script>

<style>

</style>