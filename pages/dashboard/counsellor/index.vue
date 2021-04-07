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

        <div class="counsellor__schedule">
            <div class="actions-toolbar py-2 mb-4">
                <h5 class="mb-1">Your Schedule</h5>
                <p class="text-sm text-muted mb-0">Your available time schedule.</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        layout: 'counsellor',

        data(){
            return{
                loading: true,
                meetings: {},
            }
        },

        mounted(){
            this.getCounsellorMeetings()
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
            }
        }
    }
</script>

<style lang="scss">
    .counsellor__meetings{
        .card {
            margin-bottom: .75rem;
        }
    }
</style>