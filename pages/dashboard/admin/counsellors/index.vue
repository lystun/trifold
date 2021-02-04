<template>
    <div class="col-lg-9 order-lg-2 counsellors">
        <section class="container">
            <div class="mb-5">
                <div class="row row-grid">
                    <div class="col mb-3">
                        <nuxt-link to="/dashboard/admin/counsellors/create" class="btn btn-sm btn-primary hover-translate-y-n3">Add new counsellor</nuxt-link>
                        <nuxt-link to="/dashboard/admin/counsellors/pending" class="btn btn-sm btn-primary hover-translate-y-n3">Pending Counsellors </nuxt-link>
                    </div>

                    <div class="col-md-12 text-center justify-content-center my-5" v-if="!counsellors">
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

                    <div class="table-responsive" v-if="counsellors">
                        <table class="table table-cards align-items-center">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Avatar</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Date</th>
                                    <th scope="col" class="text-">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr v-for="(counsellor, index) in counsellors"  :key="index">
                                    <td class="">{{ index+1 }}</td>
                                    <td class="">
                                        <img :src="counsellor.image" width="50px">
                                    </td>
                                    <td class="">{{ counsellor.user.name }}</td>
                                    <td class="">{{ counsellor.title }}</td>
                                    <td class="">{{ counsellor.createdAt | formatDate }}</td>
                                    <td class="text-white">
                                        <nuxt-link :to="{ name: 'dashboard-admin-counsellors-id', params:{ id: counsellor._id } }" class="btn-sm btn-warning">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <a href="#" @click="makeInactive(counsellor._id)" class="btn-sm btn-danger mr-1" v-if="counsellor.active">
                                            <i class="fas fa-user-alt-slash"></i> Deactivate
                                        </a>
                                        <a href="#" @click="makeActive(counsellor._id)" class="btn-sm btn-success mr-1" v-else>
                                            <i class="fas fa-user-check"></i> Activate
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
                title: 'Counsellors | Trifold'
            }
        },

        computed: {
            ...mapGetters({
                counsellors: 'counsellors/getCounsellors',
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
            this.checkCounsellors();
        },

        methods: {
            checkCounsellors(){
                if( Object.entries(this.counsellors) == 0){
                    this.getCounsellors();
                }
            },

            async getCounsellors(){
                let counsellors = await this.$axios.$get('/counsellors')
                this.$store.dispatch('counsellors/setCounsellors', counsellors.data.data)
            },

            makeActive(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "Activate Counsellor, making them available for consultation!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Activate!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$patch(`/counsellors/${id}`, { active: true } )
                        this.$toast.success("Counsellor Activated successfully", {
                            icon: "check"
                        })

                        location.reload()
                    }
                })
            },

            makeInactive(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "Deactivate Counsellor, Making them unavailable for consultation",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Deactivate!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$patch(`/counsellors/${id}`, { active: false })
                        this.$toast.success("Counsellor Deactivated successfully", {
                            icon: "check"
                        })

                        location.reload()
                    }
                })
            },

            deleteCounsellor(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$delete(`/counsellors/${id}`)
                        this.$toast.success("Counsellor deleted successfully", {
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
    .counsellors  {
        .table {
            .list {

                img {
                    width: 50px;
                }
            }
        }
    }
</style>