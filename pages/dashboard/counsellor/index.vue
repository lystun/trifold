<template>
    <div>
        <div class="actions-toolbar py-2 mb-4">
            <h5 class="mb-1">Scheduled Counselling Meetings</h5>
            <p class="text-sm text-muted mb-0">Listed below is a list of scheduled meetings with clients.</p>
        </div>

        

        <div class="card bg-gradient-info hover-shadow-lg">
            <div class="card-body py-3">
                <div class="row row-grid align-items-center">
                    <div class="col-lg-8">
                        <div class="media align-items-center">
                            <div class="mr-3 text-white">
                                <span class="fas fa-bell fa-3x"></span>
                            </div>
                            <div class="media-body">
                                <h5 class="text-white mb-0">Josh Duru</h5>
                                <p class="mb-0 text-secondary">joshduru@mail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto flex-fill mt-4 mt-sm-0 text-sm-right d-none d-lg-block">
                        <nuxt-link to="/dashboard/counsellor/client" class="btn btn-sm btn-white rounded-pill btn-icon shadow">
                            <span class="btn-inner--icon text-dark"><i class="fas fa-info"></i></span>
                            <span class="btn-inner--text text-dark">More Info</span>
                        </nuxt-link>
                    </div>
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

            }
        }
    }
</script>

<style>

</style>