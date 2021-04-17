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

                    <div class="my-3">
                        <div class="d-flex justify-content-between">
                            <select v-model="perPage" class="custom-select custom-select-sm mr-5">
                                <option value="10" disabled >Per Page</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                            <pagination v-model="page" :records="records" :per-page="perPage *1" @paginate="getArticles"/>
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
                title: 'Articles | Trifold'
            }
        },

        data(){
            return{
                page: 1,
                perPage: 10,
                records: 0,
                articles: null
            }
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
            this.getArticles();
        },

        methods: {

            async getArticles(){
                const res = await this.$axios.$get(`/articles?page=${this.page}&limit=${this.perPage}`)
                this.articles = res.data.data
                this.records = res.records
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