<template>
    <div>
        <div class="actions-toolbar py-2 mb-2">
            <h5 class="mb-1">Scheduled Meetings</h5>
            <p class="text-sm text-muted mb-0">Listed below is a list of upcoming meetings with clients.</p>
        </div>

        <div class="counsellor__meetings mb-5" v-if="!meetings">
            <div class="card bg-gradient-primary text-white text-center py-5">
                <h4 class="text-white">You have no Scheduled Meeting(s).</h4>
            </div>
        </div>

        <div class="counsellor__meetings mb-5" v-if="meetings">
            <div class="card bg-gradient-info hover-shadow-lg" v-for="(meeting, index) in meetings" :key="index">
                <div class="card-body py-3">
                    <div class="row row-grid align-items-center">
                        <div class="col-lg-8">
                            <div class="media align-items-center">
                                <div class="mr-3 text-white">
                                    <span class="fas fa-bell fa-3x"></span>
                                </div>
                                <div class="media-body">
                                    <h5 class="text-white mb-0">Meeting with {{ meeting.client.name }} </h5>
                                    <p class="mb-0 text-secondary">{{ $moment(meeting.meeting_schedule).format('MMMM Do YYYY, h:mm:ss a')  }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto flex-fill mt-4 mt-sm-0 text-sm-right d-none d-lg-block">
                            <nuxt-link  :to="{ name: 'dashboard-counsellor-client', params:{ client: meeting.id } }" class="btn btn-sm btn-white rounded-pill btn-icon shadow">
                                <span class="btn-inner--icon text-dark"><i class="fas fa-info"></i></span>
                                <span class="btn-inner--text text-dark">More Info</span>
                            </nuxt-link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

        <div class="actions-toolbar py-2 mb-2 d-flex">
            <div>
                <h5 class="mb-1">Your Schedule</h5>
                <p class="text-sm text-muted mb-0">A list of your available time.</p>
            </div>
            <div class="ml-auto">
                <nuxt-link to="/dashboard/counsellor/profile#schedule" class="btn btn-sm btn-primary hover-translate-y-n3">Create new schedule</nuxt-link>
            </div>
        </div>

        <div class="counsellor__schedules mb-5" v-if="schedules.length == 0">
            <div class="card bg-gradient-primary text-white text-center py-3">
                <h5 class="text-white mb-0">You are yet to create any schedule(s).</h5>
            </div>
        </div>

        <div class="counsellor__schedules mb-5" v-if="schedules.length > 0">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Start Time </th>
                        <th scope="col">End Time </th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody v-if="loading">
                    <tr class="my-3">
                        <td class="text-center" colspan="3">
                            <div class="spinner-grow text-sm" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-sm" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-if="schedules">
                    <tr v-for="(schedule, index) in schedules" :key="index">
                        <td> {{ $moment(schedule.start_time) }}  </td>
                        <td> {{ $moment(schedule.end_time) }}  </td>
                        
                        <td class="text-white">
                            <a href="#" @click="deleteSchedule(index)" class="btn-sm btn-danger" title="Move to trash">
                                <i class="fas fa-trash"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        layout: 'counsellor',

        data(){
            return{
                loading: true,
                meetings: {},
                schedules: {},
            }
        },

        computed:{
            ...mapGetters({
                counsellor: 'counsellors/getCounsellor'
            })
        },

        created(){
            this.getCounsellorMeetings()
            this.getCounsellorSchedule()
        },

        methods:{
            //get counsellor's meetings
            async getCounsellorMeetings(){

                let counsellor_id;

                //get counsellor id either from the vuex store or fetch from the counsellor info user the user endpoint
                if(this.$store.state.counsellors.counsellor.id){
                    counsellor_id = this.$store.state.counsellors.counsellor.id
                }else {
                    const user = await this.$axios.$get(`/users/${ this.$store.state.auth.user.me.id }`);
                    counsellor_id = user.data.data.counsellor[0].id           
                }

                try {
                    let result = await this.$axios.$get(`/meetings/counsellor/${counsellor_id}/upcoming`)
                    this.meetings = result.data.meetings
                    this.loading = false

                } catch (err) {
                    console.log(err);
                }
            },

            //get counsellor schedule
            async getCounsellorSchedule(){

                let counsellor_id;

                //get counsellor id either from the vuex store or fetch from the counsellor info user the user endpoint
                if(this.$store.state.counsellors.counsellor.id){
                    counsellor_id = this.$store.state.counsellors.counsellor.id
                }else {
                    const user = await this.$axios.$get(`/users/${ this.$store.state.auth.user.me.id }`);
                    counsellor_id = user.data.data.counsellor[0].id           
                }

                try {
                    let result = await this.$axios.$get(`/counsellors/${counsellor_id}`)
                    this.schedules = result.data.data.schedule;


                    this.loading = false;
                } catch (err) {
                    console.log(err);
                }
            },

            async deleteSchedule(id){

                let counsellor_id;

                if(this.$store.state.counsellors.counsellor.id){
                    counsellor_id = this.$store.state.counsellors.counsellor.id
                }else {
                    const user = await this.$axios.$get(`/users/${ this.$store.state.auth.user.me.id }`);
                    counsellor_id = user.data.data.counsellor[0].id           
                }

                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {

                        this.schedules.splice(id, 1)
                        const schedule = {
                            schedule: this.schedules
                        }

                        this.$axios.$patch(`/counsellors/${counsellor_id}`, schedule)

                        this.$toast.success("Schedule removed successfully", {
                            icon: "check"
                        })
                        // location.reload()
                    }
                })
            },
        }
    }
</script>

<style lang="scss">
    .counsellor__meetings, .counsellor__schedules{
        .card {
            margin-bottom: .75rem;
        }
    }
</style>