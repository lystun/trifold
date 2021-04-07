<template>
    <div>
        <div class="actions-toolbar py-2 mb-4">
            <h5 class="mb-1">My Meetings</h5>
            <p class="text-sm text-muted mb-0">Here is a list of all meetings. </p>
        </div>
        <div class="meetings">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Scheduled Time </th>
                        <th scope="col">Meeting Info</th>
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
                <tbody v-if="meetings">
                    <tr v-for="(meeting, index) in meetings" :key="index">
                        <td scope="row"> {{ $moment(meeting.meeting_schedule) }}  </td>
                        <td> {{ truncate(meeting.meeting_title) }} </td>
                        
                        <td class="text-white">
                            <nuxt-link :to="{ name: 'dashboard-counsellor-client', params:{ client: meeting.id } }" class="btn-sm btn-warning">
                                <span class="fas fa-eye"></span>
                            </nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

    export default {
        layout: 'counsellor',

        head(){
            return {
                title: 'Counsellor Meetings | Trifold'
            }
        },

        data(){
            return{
                loading: true,
                id: '123',
                meetings: {}
            }
        },

        created(){
        },

        mounted(){
            this.getCounsellorMeetings()
        },

        methods : {
            truncate(data) {
                let body = this.stripTags(data);
                return body.length > 70 ? body.substring(0, 70) + '...' : body;           
            },

            stripTags(text) {
                return text.replace(/(<([^>]+)>)/ig, '');
            },

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
                    let result = await this.$axios.$get(`/meetings/counsellor/${counsellor_id}`)
                    this.meetings = result.data.meetings
                    this.loading = false

                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
</script>

<style>

</style>