<template>
    <header class="header header-transparent" id="header-main">
        <!-- Main navbar -->
        <nav class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark bg-dark" id="navbar-main">
            <div class="container px-lg-0">
                <!-- Logo -->
                <nuxt-link class="navbar-brand mr-lg-5" to="/">
                    <img alt="Stebab Exchange logo" src="/logo.png" id="navbar-logo" style="height: 50px;">
                    <!-- <img alt="Image placeholder" src="~/assets/img/brand/white.png" id="navbar-logo" style="height: 50px;"> -->
                </nuxt-link>
                <!-- Navbar collapse trigger -->
                <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse"
                    aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Navbar nav -->
                <div class="collapse navbar-collapse" id="navbar-main-collapse">
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <li class="nav-item d-lg-none d-xl-block">
                            <nuxt-link class="nav-link nuxt-link-active exact" to="/" >Home</nuxt-link>
                        </li>
                        <li class="nav-item d-lg-none d-xl-block">
                            <nuxt-link class="nav-link nuxt-link-active exact" to="/about" >About</nuxt-link>
                        </li>
                        <li class="nav-item d-lg-none d-xl-block">
                            <nuxt-link class="nav-link nuxt-link-active exact" to="/blog" >Blog</nuxt-link>
                        </li>
                        <li class="nav-item mr-0 ">
                            <nuxt-link to="/sell-crypto" class="btn btn-sm btn-white d-none d-lg-inline-flex">
                                <span class="btn-inner--text">Download</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
	</header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    .header {
        .navbar-nav {
            .nav-link {

                color: $white;
                
                &:hover{
                    color: lightgray;;
                }

                &.nuxt-link-exact-active{
                    color: $secondary;
                }
            }

            .btn {
                color: #fff;
                border: none;
                background: $secondary;

                &:hover {
                    color: $primary;
                    background: white;
                }
            }
        }
    }
</style>