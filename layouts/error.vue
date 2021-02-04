<template>
    <section class="slice slice-lg vh-100 bg-gradient-primary overflow-hidden" data-offset-top="#header-main">
        <div class="bg-absolute-cover vh-100 overflow-hidden">
            <figure class="w-100">
                <img alt="" src="~/assets/img/backgrounds-use/bg-ne.svg" class="svg-inject">
            </figure>
        </div>

        <div class="container h-100 d-flex align-items-center position-relative zindex-100">
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-lg-7 text-center">
                        <h6 class="h1 mb-5 font-weight-400 text-white" v-if="error.statusCode">Oops! Something Went Wrong</h6>
                        <h6 class="h1 mb-5 font-weight-400 text-white" v-else>Server Error</h6>
                        <nuxt-link to="/" class="btn btn-white btn-icon rounded-pill hover-translate-y-n3">
                            <span class="btn-inner--icon"><i class="fas fa-home"></i></span>
                            <span class="btn-inner--text">Return home?</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="position-absolute bottom-0 right-4 overflow-hidden">
            <figure class="w-50">
                <img alt="Image placeholder" src="~/assets/img/backgrounds-use/page-not-found.svg" class="svg-inject opacity-2">
            </figure>
        </div>
    </section>
</template>


<script>
    export default {
        props : ['error'],
        head(){
            return {
                title: "404 Not Found - Trifold"
            }
        }, 
    }
</script>