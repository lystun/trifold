<template>
    <header class="header header-transparent" id="header-main">
        <!-- Main navbar -->
        <nav class="navbar navbar-main navbar-expand-md navbar-transparent" id="navbar-main">
            <div class="container px-lg-0">
                <nuxt-link class="navbar-brand mr-lg-5" to="/">
                    <img alt="Trifold" src="/logo.png" id="navbar-logo" style="height: 50px;">
                </nuxt-link>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <nuxt-link class="nav-link nuxt-link-active exact" to="/" >Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link nuxt-link-active exact" to="/about" >About</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link nuxt-link-active exact" to="/blog" >Blog</nuxt-link>
                    </li>
                    <li class="nav-item mr-0 ">
                        <a href="#cta" type="button" class="btn btn-sm btn-white d-none d-lg-inline-flex" data-toggle="modal" data-target="#staticBackdrop">
                            <span class="btn-inner--text">Download</span>
                        </a>
                    </li>
                </ul>
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
            display: flex;
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
            align-items: center;

            .nav-link {

                color: $white;
                padding: 0.5rem 1rem;
                
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

    @media screen and (max-width: 576px) {
        .header {

        .navbar-nav {
            display: flex;
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;

            .nav-link {

                color: $white;
                padding: 0.5rem;
                padding-left: 0.5rem;
                
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
    }
</style>