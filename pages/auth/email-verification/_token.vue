<template>
    <div class="card shadow zindex-100 mb-0 login">
        <div class="card-body px-md-5 py-5">
            <div class="text-center mb-1" v-if="!err">
                <div class="mb-5">
                    <span class="fas fa-check-circle fa-7x text-success d-block mb-3"></span>
                    <h6 class="text-success">{{ message.msg }}</h6>
                </div>

                <a href="https://play.google.com/store/apps/details?id=com.elab.trifold" class="btn btn-sm btn-primary btn-icon rounded-pill text-right">
                    <span class="btn-inner--text">Proceed to App</span>
                    <span class="btn-inner--icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                </a>
            </div>
                
            <div class="text-center mb-1" v-if="err">
                <div class="mb-5">
                    <span class="fas fa-times-circle fa-7x text-danger d-block mb-3"></span>
                    <h6 class="text-danger">{{ errors.message }} </h6>
                </div>
                <a href="/auth/resend-email-verification" class="btn btn-sm btn-primary btn-icon rounded-pill text-right">
                    <span class="btn-inner--text">Resend Email Verification</span>
                    <span class="btn-inner--icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        layout: 'auth',
        middleware: ['guest'],

        head(){
            return {
                title: 'Email Verification | Trifold'
            }
        },

        data(){
            return {
                loading: false,
            }
        },

        created(){
            // this.verifyEmail()
        },

        async asyncData({ $axios, params }) {
            try {
                
                const token = params.token
                const message = await $axios.$post('/auth/email-verification', {token});

                return { message }
            } catch (err) {
                console.info(err.message)
                return {err};
            }
        },

        methods: {
            async verifyEmail(){
                this.loading = true
                
                try {
                    const token = this.$route.params.token

                    const res = await this.$axios.$post('/auth/email-verification', {token});
                    this.message = res.msg

                    console.info(this.message);

                    this.$toast.success('Email Has been verified. Proceed to app.', {
                        icon : 'check',
                    })

                    this.loading = false

                } catch (err) {
                    this.loading = false
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .login {
        
        .input-group-merge .form-control:not(:last-child):not(.is-valid):not(.is-invalid) {
            border-right: 1px solid #E0E6ED;
        }
        
    }
</style>