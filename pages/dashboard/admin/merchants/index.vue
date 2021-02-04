<template>
    <div class="col-lg-9 order-lg-2 merchants">
        <section class="container">
            <div class="mb-5">
                <div class="row row-grid">
                    <div class="col mb-3">
                        <nuxt-link to="/dashboard/admin/merchants/create" class="btn btn-sm btn-primary hover-translate-y-n3">Create a new merchant</nuxt-link>
                    </div>

                    <div class="col-md-12 text-center justify-content-center my-5" v-if="!merchants">
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

                    <div class="table-responsive" v-if="merchants">
                        <table class="table table-cards align-items-center">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Business Name</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Expiration</th>
                                    <th scope="col">Date</th>
                                    <th scope="col" class="text-">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr v-for="(merchant, index) in merchants"  :key="index">
                                    <td class="">{{ index+1 }}</td>
                                    <td class="">
                                        <img :src="merchant.image" width="50px">
                                    </td>
                                    <td class="">{{ merchant.personalInfo }}</td>
                                    <td class="">{{ merchant.businessInfo }}</td>
                                    <td class="">{{ merchant.location }}</td>
                                    <td class="">{{ merchant.duration }}</td>
                                    <td class="">{{ merchant.createdAt | formatDate }}</td>
                                    <td class="text-white">
                                        <nuxt-link :to="{ name: 'dashboard-admin-merchants-id', params:{ id: merchant._id } }" class="btn-sm btn-warning">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <a href="#" @click="deleteMerchant(merchant._id)" class="btn-sm btn-danger" title="Move to trash">
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
                title: 'Merchants | Trifold'
            }
        },

        computed: {
            ...mapGetters({
                merchants: 'merchants/getMerchants',
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
            this.checkMerchants();
            this.checkCategories()
        },

        methods: {
            checkMerchants(){
                if( Object.entries(this.merchants) == 0){
                    this.getMerchants();
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

            async getMerchants(){
                let merchants = await this.$axios.$get('/merchants')
                this.$store.dispatch('merchants/setMerchants', merchants.data.data)
            },

            deleteMerchant(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$delete(`/merchants/${id}`)
                        this.$toast.success("Merchant deleted successfully", {
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
    .merchants  {
        .table {
            .list {

                img {
                    width: 50px;
                }
            }
        }
    }
</style>