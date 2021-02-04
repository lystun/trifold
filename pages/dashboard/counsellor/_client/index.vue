<template>
    <div>
        <div class="actions-toolbar py-2 mb-2">
            <h5 class="mb-1">Meeting Details</h5>
        </div>

        <div class="card">
            <div class="card-header pt-4 pb-2">
                <div class="d-flex align-items-center">
                    <a href="#" class="avatar rounded-circle shadow">
                        <img alt="Image placeholder" src="~/assets/img/theme/light/team-1-800x800.jpg">
                    </a>
                    <div class="avatar-content">
                        <h6 class="mb-0">Josh Duru</h6>
                        <small class="d-block text-muted"><i class="fas fa-clock mr-2"></i>3 hrs ago</small>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div>
                    <h6 class="mb-4">Client Information </h6>

                    <ul class="list-group">
                        <li class="mb-2">Name: Josh Duru</li>
                        <li class="mb-2">Email: joshduru@mail.com</li>
                        <li class="mb-2">Gender: Male</li>
                        <li class="mb-2">Marital Status: Married</li>
                    </ul>

                </div>
                <!-- Badges -->
                <div class="d-lg-flex mt-4">
                    <a href="#" class="d-flex align-items-center mr-lg-5 mb-3 mb-lg-0">
                        <div>
                            <div class="icon icon-sm bg-gradient-info text-white rounded-circle icon-shape">
                                <i class="fas fa-calendar"></i>
                            </div>
                        </div>
                        <div class="pl-2">
                            <span class="h6">25th January, 2021</span>
                        </div>
                    </a>
                    <a href="#" class="d-flex align-items-center mr-lg-5 mb-3 mb-lg-0">
                        <div>
                            <div class="icon icon-sm bg-gradient-info text-white rounded-circle icon-shape">
                                <i class="fas fa-clock"></i>
                            </div>
                        </div>
                        <div class="pl-2">
                           <span class="h6">9am</span>
                        </div>
                    </a>
                    <a href="https://zoom.us/j/92791613197" class="d-flex align-items-center mr-lg-5 mb-3 mb-lg-0">
                        <div>
                            <div class="icon icon-sm bg-gradient-info text-white rounded-circle icon-shape">
                                <i class="fas fa-link"></i>
                            </div>
                        </div>
                        <div class="pl-2">
                           <span class="h6">Open zoom</span>
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
                
            }
        }
    }
</script>

<style>

</style>