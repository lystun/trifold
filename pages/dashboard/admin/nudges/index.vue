<template>
    <div class="col-lg-9 order-lg-2 nudges">
        <section class="container">
            <div class="mb-5">
                <div class="row row-grid">
                    <div class="col mb-3">
                        <nuxt-link to="/dashboard/admin/nudges/create" class="btn btn-sm btn-primary hover-translate-y-n3">Create a new nudge</nuxt-link>
                    </div>

                    <div class="col-md-12 text-center justify-content-center my-5" v-if="!nudges">
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

                    <div class="table-responsive" v-if="nudges">
                        <table class="table table-cards align-items-center">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nudge</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Section</th>
                                    <th scope="col">Date</th>
                                    <th scope="col" class="text-">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr v-for="(nudge, index) in nudges"  :key="index">
                                    <td class="">{{ index+1 }}</td>
                                    <td class="">{{ nudge.nudge }}</td>
                                    <td class="">{{ nudge.category.name }}</td>
                                    <td class="">{{ nudge.section }}</td>
                                    <td class="">{{ nudge.createdAt | formatDate }}</td>
                                    <td class="text-white">
                                        <nuxt-link :to="{ name: 'dashboard-admin-nudges-id', params:{ id: nudge._id } }" class="btn-sm btn-warning">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <a href="#" @click="deleteNudge(nudge._id)" class="btn-sm btn-danger" title="Move to trash">
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
                            <pagination v-model="page" :records="records" :per-page="perPage *1" @paginate="getNudges"/>
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
                title: 'Nudges | Trifold'
            }
        },

        
        data(){
            return{
                page: 1,
                perPage: 10,
                records: 0,
                nudges: []
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
            this.getNudges();
        },

        methods: {

            async getNudges(){
                let nudges = await this.$axios.$get(`/nudges?page=${this.page}&limit=${this.perPage}`)
                this.records = nudges.records
                this.nudges = nudges.data.data
            },

            deleteNudge(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$delete(`/nudges/${id}`)
                        this.$toast.success("Nudge deleted successfully", {
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
    .nudges  {
        .table {
            .list {

                img {
                    width: 50px;
                }
            }
        }
    }
</style>