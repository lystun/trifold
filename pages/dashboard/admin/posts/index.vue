<template>
    <div class="col-lg-9 order-lg-2 posts">
        <section class="container">
            <div class="mb-5">
                <div class="row row-grid">
                    <div class="col mb-3">
                        <nuxt-link to="/dashboard/admin/posts/create" class="btn btn-sm btn-primary hover-translate-y-n3">Create a new post</nuxt-link>
                    </div>

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

                    <div class="table-responsive" v-if="posts">
                        <table class="table table-cards align-items-center">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Date</th>
                                    <th scope="col" class="text-">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr v-for="(post, index) in posts"  :key="index">
                                    <td class="">{{ index+1 }}</td>
                                    <td class="">
                                        <img :src="post.image" width="50px">
                                    </td>
                                    <td class="">{{ post.title }}</td>
                                    <td class="">{{ post.createdAt | formatDate }}</td>
                                    <td class="text-white">
                                        <nuxt-link :to="{ name: 'dashboard-admin-posts-id', params:{ id: post._id } }" class="btn-sm btn-warning">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <a href="#" @click="deletePost(post._id)" class="btn-sm btn-danger" title="Move to trash">
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
                title: 'Posts | Trifold'
            }
        },

        computed: {
            ...mapGetters({
                posts: 'posts/getPosts'
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
            this.checkPosts();
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

            deletePost(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$delete(`/posts/${id}`)
                        this.$toast.success("Post deleted successfully", {
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
    .posts  {
        .table {
            .list {

                img {
                    width: 50px;
                }
            }
        }
    }
</style>