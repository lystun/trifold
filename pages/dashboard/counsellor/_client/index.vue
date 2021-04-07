<template>
    <div>
        <div class="actions-toolbar py-2 mb-2">
            <h5 class="mb-1">Meeting Details</h5>
        </div>

        <div class="card meeting">
            <div class="card-header pt-4 pb-2">
                <div class="d-flex align-items-center">
                    <a href="#" class="avatar shadow">
                        <img class="" :alt="meeting.client.name+' profile picture'" :src="meeting.client.image">
                    </a>
                    <div class="avatar-content">
                        <h6 class="mb-0"> {{ meeting.client.name }} </h6>
                        <small class="d-block text-muted"><i class="fas fa-clock mr-1"></i> 
                        {{ $moment(meeting.client.created_at).format('MMMM Do YYYY, h:mm:ss a')  }} 
                        </small>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div>
                    <h6 class="mb-4">Client Information </h6>

                    <ul class="list-group">
                        <li class="mb-2">Name: {{ meeting.client.name }}</li>
                        <li class="mb-2">Email: {{ meeting.client.email }} </li>
                        <li class="mb-2">Gender: {{ meeting.client.gender }}</li>
                        <li class="mb-2">Marital Status: {{ meeting.client.status }}</li>
                    </ul>
                </div>

                <div class="d-lg-flex mt-4">
                    <a href="#" class="d-flex align-items-center mr-lg-5 mb-3 mb-lg-0">
                        <div>
                            <div class="icon icon-sm bg-gradient-info text-white rounded-circle icon-shape">
                                <i class="fas fa-clock"></i>
                            </div>
                        </div>
                        <div class="pl-2">
                           <span class="h6">{{ $moment(meeting.meeting_schedule).format('MMMM Do YYYY, h:mm:ss a')  }}</span>
                        </div>
                    </a>
                    <a :href="meeting.meeting_join_url" target="blank" class="d-flex align-items-center mr-lg-5 mb-3 mb-lg-0">
                        <div>
                            <div class="icon icon-sm bg-gradient-info text-white rounded-circle icon-shape">
                                <i class="fas fa-link"></i>
                            </div>
                        </div>
                        <div class="pl-2">
                           <span class="h6">Click to Open Zoom</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'counsellor',

        data(){
            return{
                // meeting: {}
            }
        },

        created(){
            // this.getMeeting()
        },

        methods: {
            async getMeeting(){

                try {

                    let result = await this.$axios.$get(`/meetings/${this.$route.params.client}`)
                    this.meeting = result.data.data;

                } catch (err) {
                    console.log(err);
                }
            }
        },

        async asyncData({ $axios, params }) {
            const meeting = await $axios.$get(`/meetings/${params.client}`)
            console.log(meeting.data.data);
            return { 
                meeting: meeting.data.data
            }
        }

    }
</script>

<style lang="scss">
    .meeting {
        .avatar{
            
            position: relative;
            color: #FFF;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            font-weight: 600;
            height: auto;
            width: 50px;
            border-radius: 0.25rem;

            .profile{
                background: teal !important;
                width: 100%!important;
            }
        }
    }
</style>