<template>
    <div class="main-content">
        <!-- Hero -->
        <section class="slice slice-lg bg-gradient-primary header-main header align-items-center">
            <div class="container d-flex align-items-center position-relative zindex-100">
                <div class="col">
                    <div class="row">
                        <div class="col-lg-7 col-xl-6 align-self-center header__info">
                            <div class="text-lg-left pb-5">
                                <vue-typed-js 
                                    :strings="promises"
                                    :typeSpeed="100"
                                    :backSpeed="20"
                                    :loop="true"
                                >
                                    <h2 class="text-white mb-4 typed">  <span class="typing"></span></h2>
                                </vue-typed-js>
                                <p class="lead lh-180 text-white">
                                    Trifold is an all-encompassing marriage app that gives you curated faith-based answers to prevailing issues such as; finances, parenting, sex and intimacy, and other marital questions; all at your fingertips.
                                </p>

                                <div class="mt-5 ctas">
                                    <a href="#cta" class="btn download hover-translate-y-n3 mr-lg-4 mb-4" data-toggle="modal" data-target="#staticBackdrop">
                                        <i class="fab fa-apple"></i>
                                        <div class="btn-inner">
                                            <span class="btn-inner--text">Download on the</span>
                                            <span class="btn-inner--brand">App Store</span>
                                        </div>
                                    </a>
                                    <a href="#cta" class="btn download hover-translate-y-n3 mb-4" data-toggle="modal" data-target="#staticBackdrop">
                                        <i class="fab fa-google-play"></i>
                                        <div class="btn-inner">
                                            <span class="btn-inner--text">Download on the</span>
                                            <span class="btn-inner--brand">Play Store</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 ml-lg-auto header__img">
                            <div class="position-relative" style="z-index: 10;">
                                <img alt="Image placeholder" src="~/assets/img/mockup.png" class="img-fluid img-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice slice-lg belief overflow-hidden">
            <div class="container position-relative zindex-100 mt-lg-6">
                <div class="text-left text-md-center">
                    <h1 class="text-center">Our Belief</h1>
                    <div class="mt-4">
                        <p class="lead text-whit lh-180">That marriage is a spiritual union rooted in God, our Father. Therefore, a proper understanding of how it ought to work will bring the happiness, peace, and fulfillment God intends for this type of union; thereby furthering the Father's will on earth. Your marriage matters to God - as well as to us. With Trifold, your marriage can be heaven on earth.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- App Features -->
        <section class="slice slice-lg bg-translucent-primary">
            <div class="container features">
                <div class="mb-7 text-center">
                    <h3 class="text-primary mt-4">App Features</h3>
                    <div class="fluid-paragraph mt-3">
                        <p class="lead lh-180 text-primary">
                            The Trifold app is a one-stop digital space for marriage-related solutions. It is tastefully designed with an amazing experience.
                        </p>
                    </div>
                </div>
                <div class="row row-grid align-items-center">
                    <div class="col-lg-4 features__list">
                        <div class="d-flex align-items-start mb-5">
                        <div class="pr-4">
                            <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                            <i class="fas fa-expand"></i>
                            </div>
                        </div>
                        <div class="icon-text">
                            <h5 class="h5 text-primary">Godly Perspective</h5>
                            <p class="mb-0 text-primary">Get God’s perspective for a fulfilling marriage, and a happy home.</p>
                        </div>
                        </div>
                        <div class="d-flex align-items-start mb-5">
                        <div class="pr-4">
                            <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                            <i class="fas fa-box-open"></i>
                            </div>
                        </div>
                        <div class="icon-text">
                            <h5 class="text-primary">Curated Contents</h5>
                            <p class="mb-0 text-primary">You get over a thousand curated articles on marriage, relationships, parenting, finances, sex and intimacy, and so much more. </p>
                        </div>
                        </div>
                        <div class="d-flex align-items-start">
                        <div class="pr-4">
                            <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                            <i class="fas fa-smile"></i>
                            </div>
                        </div>
                        <div class="icon-text">
                            <h5 class="text-primary">Speak to a Counsellor</h5>
                            <p class="mb-0 text-primary">Qualified and vetted counsellors to give you real time answers and practical insights. </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-3 features__img m-auto">
                        <div class="position-relative" style="z-index: 10;">
                        <img alt="Image placeholder" src="~/assets/img/mockup1.png" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-4 features__list">
                        <div class="d-flex align-items-start mb-5">
                        <div class="pr-4">
                            <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                            <i class="fas fa-file-archive"></i>
                            </div>
                        </div>
                        <div class="icon-text">
                            <h5 class="text-primary">Free Resources</h5>
                            <p class="mb-0 text-primary">Such as books, podcasts to spice up your marriage. </p>
                        </div>
                        </div>
                        <div class="d-flex align-items-start mb-5">
                        <div class="pr-4">
                            <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                            <i class="fas fa-user-shield"></i>
                            </div>
                        </div>
                        <div class="icon-text">
                            <h5 class="text-primary">Confidentiality</h5>
                            <p class="mb-0 text-primary">Every detail and information provided by you will be treated with utmost secrecy and confidentiality. </p>
                        </div>
                        </div>
                        <div class="d-flex align-items-start">
                        <div class="pr-4">
                            <div class="icon icon-shape bg-white text-primary box-shadow-3 rounded-circle">
                            <i class="fas fa-user-friends"></i>
                            </div>
                        </div>
                        <div class="icon-text">
                            <h5 class="text-primary">Couple Packages</h5>
                            <p class="mb-0 text-primary">Register as a couple and get complimentary contents, couple’s discount as well as couple counselling sessions. </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="slice slice-lg testimonials">
            <div class="container">
                <div class="mb-5 text-center">
                    <h3 class="mt-lg-4">Testimonials</h3>
                    <div class="fluid-paragraph mt-3">
                        <p class="lead lh-180">Your marriage matters to God as well as to us; it can be heaven on earth. Our users believe so. Here is what some of them are saying.</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <img alt="Image placeholder" src="https://via.placeholder.com/150" class="avatar  rounded-circle">
                                    </div>
                                    <div class="pl-3">
                                        <h5 class="h6 mb-0">Queen .O.</h5>
                                        <small class="d-block text-muted">Testifier</small>
                                    </div>
                                </div>
                                <p class="mt-4 lh-180">I was always scared of marriage and commitments, but not anymore! i'm super excited and eager to get married because it's going to be Vision-driven!</p>

                                <span class="static-rating static-rating-sm">
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <img alt="Image placeholder" src="https://via.placeholder.com/150" class="avatar  rounded-circle">
                                    </div>
                                    <div class="pl-3">
                                        <h5 class="h6 mb-0">Damilola .S.</h5>
                                        <small class="d-block text-muted">Testifier</small>
                                    </div>
                                </div>
                                <p class="mt-4 lh-180">I wish I had had this tool 4 years earlier. It's more to me than a book, it is a marriage manual. Thank you! </p>
                                <span class="static-rating static-rating-sm">
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <img alt="Image placeholder" src="https://via.placeholder.com/150" class="avatar  rounded-circle">
                                    </div>
                                    <div class="pl-3">
                                        <h5 class="h6 mb-0">Mrs. Morenike O.</h5>
                                        <small class="d-block text-muted">Marriage Counsellor</small>
                                    </div>
                                </div>
                                <p class="mt-4 lh-180"> The Vision-Driven Marriage - a book on the app - is a must read for all youths contemplating marriage not them alone but all true Bible-believing Christians. </p>
                                <span class="static-rating static-rating-sm">
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                    <i class="star fas fa-star voted"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- FAQs -->
        <section class="slice slice-lg bg-translucent-primary">
            <div class="container">
                <div class="mb-lg-7 mb-5 text-center">
                    <h3 class="mt-lg-4">FAQs</h3>
                    <div class="fluid-paragraph mt-3">
                        <p class="lead lh-180">Here are common questions users of Trifold ask and helpful answers to each of them.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6">
                        <div id="accordion-1" class="accordion accordion-spaced">
                            <!-- Accordion card 1 -->
                            <div class="card">
                                <div class="card-header py-4" id="heading-1-1" data-toggle="collapse" role="button" data-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                    <h6 class="mb-0"><i class="fas fa-question mr-3"></i>Does Trifold offer offline counselling sessions?</h6>
                                </div>
                                <div id="collapse-1-1" class="collapse" aria-labelledby="heading-1-1" data-parent="#accordion-1">
                                    <div class="card-body">
                                        <p>No, we don’t. </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Accordion card 2 -->
                            <div class="card">
                                <div class="card-header py-4" id="heading-1-2" data-toggle="collapse" role="button" data-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                <h6 class="mb-0"><i class="fas fa-question mr-3"></i>Can my partner/spouse see what I do on the app?</h6>
                                </div>
                                <div id="collapse-1-2" class="collapse" aria-labelledby="heading-1-2" data-parent="#accordion-1">
                                <div class="card-body">
                                    <p>No, except you want them to. In which case, you are to subscribe to the couple’s package. </p>
                                </div>
                                </div>
                            </div>
                            <!-- Accordion card 3 -->
                            <div class="card">
                                <div class="card-header py-4" id="heading-1-3" data-toggle="collapse" role="button" data-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                    <h6 class="mb-0"><i class="fas fa-question mr-3"></i>Is Trifold a free app online?</h6>
                                </div>
                                <div id="collapse-1-3" class="collapse" aria-labelledby="heading-1-3" data-parent="#accordion-1">
                                <div class="card-body">
                                    <p>Yes. However, it has options to upgrade to any of its paid plans. </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div id="accordion-2" class="accordion accordion-spaced">
                        <!-- Accordion card 1 -->
                        <div class="card">
                            <div class="card-header py-4" id="heading-2-1" data-toggle="collapse" role="button" data-target="#collapse-2-1" aria-expanded="false" aria-controls="collapse-2-1">
                                <h6 class="mb-0"><i class="fas fa-question mr-3"></i>Is Trifold a marriage help app?</h6>
                            </div>
                            <div id="collapse-2-1" class="collapse" aria-labelledby="heading-2-1" data-parent="#accordion-2">
                                <div class="card-body">
                                    <p>Yes, it is. </p>
                                </div>
                            </div>
                        </div>
                        <!-- Accordion card 2 -->
                        <div class="card">
                            <div class="card-header py-4" id="heading-2-2" data-toggle="collapse" role="button" data-target="#collapse-2-2" aria-expanded="false" aria-controls="collapse-2-2">
                            <h6 class="mb-0"><i class="fas fa-question mr-3"></i> Is my data safe?</h6>
                            </div>
                            <div id="collapse-2-2" class="collapse" aria-labelledby="heading-2-2" data-parent="#accordion-2">
                            <div class="card-body">
                                <p>Yes, all information supplied is encrypted and can not be stolen or hacked. </p>
                            </div>
                            </div>
                        </div>
                        <!-- Accordion card 3 -->
                        <div class="card">
                            <div class="card-header py-4" id="heading-2-3" data-toggle="collapse" role="button" data-target="#collapse-2-3" aria-expanded="false" aria-controls="collapse-2-3">
                            <h6 class="mb-0"><i class="fas fa-question mr-3"></i>What do I get out of the Trifold Marriage App?</h6>
                            </div>
                            <div id="collapse-2-3" class="collapse" aria-labelledby="heading-2-3" data-parent="#accordion-2">
                            <div class="card-body">
                                <p>Information, advice, resources, counselling, and recommendations on the three major areas of marital relationships - Blending, Finances, and Sex & Intimacy - from a godly perspective. </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        layout:'pages',

        data(){
            return {
                promises: ['Love. Beauty. Harmony.', 'Friendship. Adventure. Joy.', 'Rekindled Passion. Fulfilment. Peace.', 'Excitement. Godly Offspring. Heaven on Earth.', 'A Three-fold Cord is not Easily Broken.']
            }
        },
    }
</script>

<style lang="scss" scoped>

    .header-main {
        .typed {
            font-weight: bold;
        }
    }

    .header {
        
        height: 100vh;

        .container{
            margin: 5rem auto;

            .ctas {

                display: flex;

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
    }

    .belief {
        background: url('../assets/img/pattern_3.png') repeat;
    }

    .testimonials {
        background: url('../assets/img/pattern_3.png') repeat;
    }

    @media screen and (max-width: 576px) {
        .header{

            height: auto;

            .container{
                margin: 5rem auto 3rem;

                .ctas {

                    display: inline-block;
                    text-align: center;
                    width: 100%;

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
            }

            &__img{
                display: none;
            }
        }

        .features{
            &__img{
                display: none;
            }
        }

    }
       
    @media screen and (min-width: 576px) and (max-width: 767px){
        .header{
            height: auto;
            &__img{
                display: none;
            }
        }

        .features{
            &__img{
                display: none;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px){
        .header{
            &__img{
                display: none;
            }
        }

        .features{
            &__img{
                display: none;
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1200px){}
    @media screen and (min-width: 1200px) and (max-width: 1920px){
        .header{
            .container{
                margin: 2rem auto 1rem;
            }
        }
    }

</style>