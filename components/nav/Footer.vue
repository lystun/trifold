<template>
    <div>
         <section class="slice slice-lg get-app bg-primary">
            <a href="#sct-call-to-action" class="tongue tongue-up tongue-section-primary" data-scroll-to>
                <i class="fas fa-angle-up"></i>
            </a>
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="font-weight-bol text-white mb-5">Get The App</h2>

                        <p class="font-weight-400 text-white">
                            Your marriage matters to God - as well as to us. With Trifold, your marriage can be heaven on earth.
                        </p>

                        <div class="mt-5 ctas">
                            <a href="#cta" type="button" class="btn download hover-translate-y-n3 mr-lg-4 mb-4" data-toggle="modal" data-target="#staticBackdrop">
                                <i class="fab fa-apple"></i>
                                <div class="btn-inner">
                                    <span class="btn-inner--text">Download on the</span>
                                    <span class="btn-inner--brand">App Store</span>
                                </div>
                            </a>
                            <a href="#cta" type="button" class="btn download hover-translate-y-n3 mb-4" data-toggle="modal" data-target="#staticBackdrop">
                                <i class="fab fa-google-play"></i>
                                <div class="btn-inner">
                                    <span class="btn-inner--text">Download on the</span>
                                    <span class="btn-inner--brand">Play Store</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer footer-dark bg-primary text-primary pt-2 pb-2" id="footer-main">
            <div class="container">
                <div class="py-4">
                    <div class="row align-items-md-center">
                        <div class="col-md-4 mb-4 mb-md-0">
                            <div class=" align-items-center">
                                <p class="text-sm text-center mb-0">Trifold by <a href="https://www.ennovatelab.com" target="_blank" class="font-weight-bold" style="color:#fa8316">Ennovate Lab</a>. All rights reserved &copy; {{ year }} </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 mb-4 mb-sm-0">
                            <ul class="nav justify-content-center">
                                <li class="nav-item">
                                    <nuxt-link to="/about" class="nav-link">About</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="https://www.instagram.com/trifold_marriage_app/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://twitter.com/AppTrifold" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://web.facebook.com/The-Trifold-Marriage-App-104671568033784/" target="_blank">
                                    <i class="fab fa-facebook"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    
</template>

<script>
    export default {
        
        data(){
            return{
                year: new Date().getFullYear(),
            }
        },

        created(){

        }
    }
</script>

<style lang="scss" scoped>

    .container{
        .ctas {

            display: flex;
            justify-content: center;

            .download {
                display: flex;
                background: #000;
                color: #fff;

                .fab {
                    font-size: 2.5rem;
                    display: block;
                    padding-right: 1rem;
                }

                .btn-inner{
                    &--text{
                        display: block;
                        font-size: .75rem;
                        line-height: .75rem;
                        margin-bottom: .125rem;
                    }
                    &--brand {
                        display: block;
                        text-align: left;
                        font-size: 21px;
                        line-height: 21px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 576px) {

        .container{

            .ctas {

                display: inline-block;
                text-align: center;

                .download {
                    display: flex;
                    margin: 0 auto;
                    justify-content: center;
                    text-align: center;

                    .fab {
                        font-size: 2.5rem;
                        display: block;
                    }

                    .btn-inner{
                        &--text{
                            display: block;
                            font-size: .75rem;
                            line-height: .75rem;
                            margin-bottom: .125rem;
                        }
                        &--brand {
                            display: block;
                            text-align: left;
                            font-size: 21px;
                            line-height: 21px;
                        }
                    }
                }
            }

            .footer {
                text-align: center;
            }
        }

    }
</style>