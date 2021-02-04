<template>
    <div class="col-lg-9 order-lg-2 articles">
        <section class="container">
            <div class="mb-5">
                <div class="row row-grid">
                    <div class="col mb-3">
                        <nuxt-link to="/dashboard/admin/articles/create" class="btn btn-sm btn-primary hover-translate-y-n3">Create a new article</nuxt-link>
                    </div>

                    <div class="col-md-12 text-center justify-content-center my-5" v-if="!articles">
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

                    <div class="table-responsive" v-if="articles">
                        <table class="table table-cards align-items-center">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <!-- <th scope="col">Category</th> -->
                                    <th scope="col">Date</th>
                                    <th scope="col" class="text-">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr v-for="(article, index) in articles"  :key="index">
                                    <td class="">{{ index+1 }}</td>
                                    <td class="">
                                        <img :src="article.image" width="50px">
                                    </td>
                                    <td class="">{{ article.title }}</td>
                                    <td class="">{{ article.author }}</td>
                                    <!-- <td class="">{{ getCategoryName(article.category) }}</td> -->
                                    <td class="">{{ article.createdAt | formatDate }}</td>
                                    <td class="text-white">
                                        <nuxt-link :to="{ name: 'dashboard-admin-articles-id', params:{ id: article._id } }" class="btn-sm btn-warning">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <a href="#" @click="deleteArticle(article._id)" class="btn-sm btn-danger" title="Move to trash">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr class="table-divider"></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        layout: 'admin',

        head(){
            return {
                title: 'Articles | Trifold'
            }
        },

        computed: {
            ...mapGetters({
                articles: 'articles/getArticles',
                categories: 'categories/getCategories',
            })
        },
        
        filters:{
            uppercase(value) {
                if (!value) return ''
                value = value.toString()
                return value.toUpperCase()
            },

            formatDate(value){
                return new Date(value).toDateString()
            },
        },

        created(){
            this.checkArticles();
            this.checkCategories()
        },

        methods: {
            checkArticles(){
                if( Object.entries(this.articles) == 0){
                    this.getArticles();
                }
            },

            checkCategories(){
                if( Object.entries(this.categories) == 0){
                    this.getCategories()
                }
            },

            getCategoryName(id){
                const categoryName = this.categories.find(category => {
                    return category._id === id
                })

                return categoryName.name;
            },

            async getArticles(){
                let articles = await this.$axios.$get('/articles')
                this.$store.dispatch('articles/setArticles', articles.data.data)
            },

            deleteArticle(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$delete(`/articles/${id}`)
                        this.$toast.success("Article deleted successfully", {
                            icon: "check"
                        })

                        location.reload()
                    }
                })
            },

            async getCategories(){
                let categories = await this.$axios.$get('/categories')
                this.$store.dispatch('categories/setCategories', categories.data.data)
            },

        }
        
    }
</script>

<style lang="scss" scoped>
    .articles  {
        .table {
            .list {

                img {
                    width: 50px;
                }
            }
        }
    }
</style>