<template>
    <div>
        <header class="header header-transparent" id="header-main">
            <!-- Main navbar -->
            <nav class="navbar navbar-main navbar-expand-lg navbar-dark" id="navbar-main">
                <div class="container px-lg-0">
                    <nuxt-link class="navbar-brand mr-lg-5" to="/dashboard/admin" target="_blank">
                        <img alt="trifold logo" src="/logo.png" id="navbar-logo" style="height: 50px;">
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
                    <div class="row">
                        <div class=" col-lg-12">
                            <div class="row align-items-center mb-4">
                                <Greetings />
                            </div>
                            <div class="d-flex navigation">
                                <nuxt-link to="/dashboard/admin" class="btn btn-icon btn-group-nav shadow btn-neutral">
                                    <span class="btn-inner--icon"><i class="fas fa-home"></i></span>
                                    <span class="btn-inner--text d-none d-md-inline-block">Dashboard</span>
                                </nuxt-link>

                                <div class="btn-group btn-group-nav shadow ml-auto" role="group" aria-label="Basic example">
                                    <div class="btn-group" role="group">
                                        <nuxt-link to="/dashboard/admin/settings" id="btn-group-settings" type="button" class="btn btn-neutral btn-icon nuxt-link-active exact">
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

            <section class="slice">
                <div class="container">
                    <div class="row row-grid">
                        
                        <Nuxt />

                        <div class="col-lg-3 order-lg-1 links">
                            <div class="card">
                                <div class="list-group list-group-sm list-group-flush">
                                    <nuxt-link to="/dashboard/admin" class="list-group-item list-group-item-action nuxt-link-active">
                                        <i class="fas fa-home mr-2"></i>
                                        <span>Home</span>
                                    </nuxt-link>
                                    <nuxt-link to="/dashboard/admin/categories" class="list-group-item list-group-item-action nuxt-link-active">
                                        <i class="fas fa-tags mr-2"></i>
                                        <span>Categories</span>
                                    </nuxt-link>
                                    <nuxt-link to="/dashboard/admin/articles" class="list-group-item list-group-item-action nuxt-link-active">
                                        <i class="fas fa-book-reader mr-2"></i>
                                        <span>Articles</span>
                                    </nuxt-link>
                                    <nuxt-link to="/dashboard/admin/podcasts" class="list-group-item list-group-item-action nuxt-link-active">
                                        <i class="fas fa-podcast mr-2"></i>
                                        <span>Podcasts</span>
                                    </nuxt-link>
                                    <nuxt-link to="/dashboard/admin/books" class="list-group-item list-group-item-action nuxt-link-active">
                                        <i class="fas fa-atlas mr-2"></i>
                                        <span>Books</span>
                                    </nuxt-link>
                                    <nuxt-link to="/dashboard/admin/posts" class="list-group-item list-group-item-action nuxt-link-active">
                                        <i class="fas fa-book mr-2"></i>
                                        <span>Blog Posts</span>
                                    </nuxt-link>
                                    <nuxt-link to="/dashboard/admin/events" class="list-group-item list-group-item-action nuxt-link-active">
                                        <i class="fas fa-users mr-2"></i>
                                        <span>Events</span>
                                    </nuxt-link>
                                    <nuxt-link to="/dashboard/admin/merchants" class="list-group-item list-group-item-action nuxt-link-active">
                                        <i class="fas fa-ad mr-2"></i>
                                        <span>Merchants</span>
                                    </nuxt-link>
                                    <nuxt-link to="/dashboard/admin/counsellors" class="list-group-item list-group-item-action nuxt-link-active">
                                        <i class="fas fa-user-shield mr-2"></i>
                                        <span>Counsellors</span>
                                    </nuxt-link>
                                </div>
                            </div>
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
    import Greetings from '@/components/utils/Greetings'

    export default {
    
        middleware: ['admin'],

        head(){
            return {
                title: 'Admin Dashboard | Trifold'
            }
        },

        component:{
            Greetings,
        },

        data(){
            return {
                user: null,
                greetings: {
                    day: '',
                    message: ''
                }
            }
        },

        computed:{
            ...mapGetters([
                'loggedInUser',
                'isAuthenticated'  
            ])
        },

        created(){
            this.$nuxt.refresh()
        },

        methods: {

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

    .links {
        
        .card {
            position: sticky;
            top: 1rem;
        }

        .list-group{

            a.nuxt-link-exact-active{
                background: $secondary;
                color: $white;
                border: 1px solid $secondary;
            }
        }

        
    }

    @media screen and (max-width: 768px) {
       .links {
            &__profile {
                margin-top: 0rem;
                margin-bottom: 2rem;
            }
        }
    }
</style>