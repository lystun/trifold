<template>
    <div class="main-content">
        <section class="slice slice-lg min-vh-100 d-flex align-items-center bg-section-secondary">
            <div class="bg-absolute-cover bg-size--contain d-none d-lg-block">
                <figure class="w-100">
                    <img alt="Image placeholder" src="~/assets/img/backgrounds-use/bg-use.svg" class="svg-inject">
                </figure>
            </div>
            <div class="container py-5 px-md-0 d-flex align-items-center">
                <div class="w-100">
                    <div class="row row-grid justify-content-center justify-content-lg-between align-items-center">
                        <div class="col-sm-8 col-lg-6 col-xl-5 order-lg-2">
                            <Nuxt />
                        </div>
                        <div class="col-lg-5 order-lg-1 d-none d-lg-block">
                            <blockquote>
                                <h3 class="h2 mb-4">Your marriage matters to God - as well as to us. With Trifold, your marriage can be heaven on earth. </h3>
                                <footer>— <cite class="text-lg">Trifold Team</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        middleware: 'guest',

        head(){
            return {
                title: 'Login | Trifold '
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>