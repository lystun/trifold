<template>
    <div>
        <header class="header header-transparent" id="header-main">
            <!-- Main navbar -->
            <nav class="navbar navbar-main navbar-expand-lg navbar-dark" id="navbar-main">
                <div class="container px-lg-0">
                    <nuxt-link class="navbar-brand mr-lg-5" to="/dashboard/counsellor" target="_blank">
                        <img alt="Trifold Logo" src="/logo.png" id="navbar-logo" style="height: 50px;">
                    </nuxt-link>

                    <div class="">
                        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                            <li class="nav-item mr-0 ">
                                <a @click="logout" target="_blank" class="btn btn-sm btn-white logout d-lg-inline-flex">
                                    <span class="btn-inner--text">Logout</span>
                                </a>
                                <nuxt-link to="/" target="_blank" class="btn btn-sm btn-white visit d-lg-inline-flex">
                                    <span class="btn-inner--text">Visit Site</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <div class="main-content">
            <section class="header-account-page bg-gradient-primary d-flex align-items-end" data-offset-top="#header-main">
                <div class="container pt-4 pt-lg-0">
                    <div class="row justify-content-end">
                        <div class="col-lg-8">
                            <div class="row align-items-center mb-4">
                                <Greetings :name="counsellor.name" />
                            </div>

                            <!-- Account navigation -->
                            <div class="d-flex navigation">
                                <nuxt-link to="/dashboard/counsellor" class="btn btn-icon btn-group-nav shadow btn-neutral">
                                    <span class="btn-inner--icon"><i class="fas fa-user"></i></span>
                                    <span class="btn-inner--text d-none d-md-inline-block">Dashboard</span>
                                </nuxt-link>
                                <div class="btn-group btn-group-nav shadow ml-auto" role="group" aria-label="Basic example">
                                    <div class="btn-group" role="group">
                                        <nuxt-link to="/dashboard/counsellor/profile" id="btn-group-settings" type="button" class="btn btn-neutral btn-icon nuxt-link-active exact">
                                            <span class="btn-inner--icon"><i class="fas fa-user"></i></span>
                                            <span class="btn-inner--text d-none d-sm-inline-block">Profile</span>
                                        </nuxt-link>
                                    </div>
                                    <div class="btn-group" role="group">
                                        <nuxt-link to="/dashboard/counsellor/settings" id="btn-group-settings" type="button" class="btn btn-neutral btn-icon nuxt-link-active exact">
                                            <span class="btn-inner--icon"><i class="fas fa-cogs"></i></span>
                                            <span class="btn-inner--text d-none d-sm-inline-block">Settings</span>
                                        </nuxt-link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pt-5 pt-lg-0">
                <div class="container counsellor">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="counsellor__profile">
                                <div class="card card-profile shadow border-0">
                                    <div class="card-profile-cover counsellor__profile--banner bg-gradient-primary">
                                        <img alt="" src="~/assets/img/pattern.png" class="counsellor__profile--banner">
                                    </div>
                                    <a href="#" class="mx-auto counsellor__profile--image">
                                        <span class="fas fa-camera" @click="$refs.image.click()" ></span>
                                        <input type="file" ref="image" @change="uploadImage" class="d-none">
                                        <img 
                                            :alt="user.name"
                                            :src="user.image"
                                            @click="$refs.image.click()"
                                            class="card-profile-image avatar rounded-circle shadow hover-shadow-lg">
                                    </a>
                                    <div class="card-body p-3 pt-0 text-center">
                                        <h5 class="mb-0">{{ counsellor.name }}</h5>
                                        <span class="d-block text-muted mb-3"> {{ counsellor.title }} </span>
                                        <p class="text-left"> {{ counsellor.description }} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-8 mt-lg-5">
                            <Nuxt />
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <footer class="footer p-0 footer-dark bg-gradient-dark" id="footer-main">
            <div class="container">
                <div class="py-4">
                    <div class="row align-items-md-center">
                        <div class="col-md-4 mb-4 mb-md-0">
                            <div class="d-flex align-items-center">
                            <p class="text-sm mb-0">&copy; Trifold. All rights reserved.</p>
                            </div>
                        </div>

                        <div class="col-sm-8 col-md-4 ml-auto">
                            <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="https://twitter.com/AppTrifold" target="_blank">
                                        <i class="fab fa-1x fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="https://www.instagram.com/trifold_marriage_app/" target="_blank">
                                        <i class="fab fa-1x fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://web.facebook.com/The-Trifold-Marriage-App-104671568033784/" target="_blank">
                                        <i class="fab fa-1x fa-facebook"></i>
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

    import {mapGetters} from 'vuex'
    import Greetings from "@/components/utils/Greetings";

    export default {
    
        middleware: ['counsellor'],

        component :{
            Greetings
        },

        head(){
            return {
                title: 'Counsellor Dashboard | Trifold'
            }
        },

        data(){
            return {
                imageErr: true,
                user: {},
                form : {
                    image: ''
                }
            }
        },

        computed:{
            ...mapGetters({
                loggedInUser: 'loggedInUser',
                isAuthenticated: 'isAuthenticated',
                counsellor: 'counsellors/getCounsellor' 
            }),
        },

        created(){
            this.checkCounsellor()
        },

        methods: {

            checkCounsellor(){
                if(Object.entries(this.counsellor) == 0){
                    this.getCounsellor()
                }
            },

            async getCounsellor(){
                const user = await this.$axios.$get(`/users/${ this.$store.state.auth.user.me.id }`);
                this.user = user.data.data
                this.$store.dispatch('counsellors/setCounsellor', ...user.data.data.counsellor)
            },

            async updateCounsellor(){

                const formData = new FormData();
                formData.append('image', this.form.image)
                
                await this.$axios.$patch(`/users/update-me`, formData);
                this.getCounsellor()
            },

            uploadImage(e){

                const image = this.$refs.image.files[0];                
                this.imageErr = ''

                if(image.type.startsWith('image')){

                    if(image.size <= 1000000){
                        this.form.image = image
                        this.status = false
                    }else {
                        this.imageErr = "Image Size Must be less than 1mb"
                    }
                }else {
                    this.imageErr = "File Must be of an Image format (PNG, JPG, JPEG)"
                }

                this.updateCounsellor()
            },
            
            logout(){
                this.$auth.logout()
                this.$router.push({name: 'index'})

                this.$toast.success('Successfully logged out', {
                    icon : 'check',
                    duration: 5000,
                })
            }
        },


    }
</script>

<style lang="scss" scoped>
    .header {
        .navbar-nav {
            .logout {
                background: gray;
            }
        }
    }

    .navigation {
        .btn  {
            border: none;

            &.nuxt-link-exact-active{
                background: $secondary;
                color: $white;
                border: 1px solid $secondary;
            }
        }
    }

    .counsellor {
        &__profile {
            margin-top: -11rem;
            position: sticky;
            top: 1rem;

            &--banner {
                width: 350px;
                height: 176px;
            }

            &--image {
                position: relative;

                .fas {
                    color: $secondary;
                    font-size: 2rem;
                    position: absolute;
                    z-index: 5;
                    top: 1rem;
                    right: 0;
                    
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
       .counsellor {
            &__profile {
                margin-top: 0rem;
                margin-bottom: 2rem;
            }
        }
    }
</style>