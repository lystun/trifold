<template>
    <div class="col-lg-9 order-lg-2 events">
        <section class="container">
            <div class="mb-5">
                <div class="row row-grid">
                    <div class="col mb-3">
                        <nuxt-link to="/dashboard/admin/events/create" class="btn btn-sm btn-primary hover-translate-y-n3">Create a new event</nuxt-link>
                    </div>

                    <div class="col-md-12 text-center justify-content-center my-5" v-if="!events">
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

                    <div class="table-responsive" v-if="events">
                        <table class="table table-cards align-items-center">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">URL</th>
                                    <th scope="col">Date</th>
                                    <th scope="col" class="text-">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr v-for="(event, index) in events"  :key="index">
                                    <td class="">{{ index+1 }}</td>
                                    <td class="">
                                        <img :src="event.image" width="50px">
                                    </td>
                                    <td class="">{{ event.name }}</td>
                                    <td class="">{{ event.url }}</td>
                                    <td class="">{{ event.createdAt | formatDate }}</td>
                                    <td class="text-white">
                                        <nuxt-link :to="{ name: 'dashboard-admin-events-id', params:{ id: event._id } }" class="btn-sm btn-warning">
                                            <span class="fas fa-edit"></span>
                                        </nuxt-link>
                                        <a href="#" @click="deleteEvent(event._id)" class="btn-sm btn-danger" title="Move to trash">
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
                title: 'Events | Trifold'
            }
        },

        computed: {
            ...mapGetters({
                events: 'events/getEvents'
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
            this.checkEvents();
        },

        methods: {
            checkEvents(){
                if( Object.entries(this.events) == 0){
                    this.getEvents();
                }
            },

            async getEvents(){
                let events = await this.$axios.$get('/events')
                this.$store.dispatch('events/setEvents', events.data.data)
            },

            deleteEvent(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.$axios.$delete(`/events/${id}`)
                        this.$toast.success("Event deleted successfully", {
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
    .events  {
        .table {
            .list {

                img {
                    width: 50px;
                }
            }
        }
    }
</style>