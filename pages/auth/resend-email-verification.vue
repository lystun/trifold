<template>
    <div class="card shadow zindex-100 mb-0 login">
        <div class="card-body px-md-5 py-5">
            <div class="mb-5">
                <h6 class="h3">Resend Email Verification</h6>
                <p class="text-muted mb-0">Enter your email address to proceed.</p>
            </div>
            <span class="clearfix"></span>
            <form role="form" @submit.prevent="submit">
                <div class="form-group">
                    <label class="form-control-label">Email address</label>
                    <div class="input-group input-group-merge">
                        <div class="input-group-prepend"> <span class="input-group-text"><i class="fas fa-user"></i></span> </div>
                        <input type="email" v-model.trim="form.email" class="form-control pl-3" :class="{'is-invalid': errors.status }" id="input-email" placeholder="email@mail.com" autofocus>
                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit" class="btn btn-sm btn-primary btn-icon rounded-pill">
                        <span class="fas fa-spinner fa-spin" v-if="loading"></span>
                        <span class="btn-inner--text">Resend Email Verification</span>
                        <span class="btn-inner--icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'auth',
        middleware: ['guest'],

        head(){
            return {
                title: 'Resend Email Verification | Trifold'
            }
        },

        data(){
            return {
                loading: false,

                form : {
                    email: '',
                }
            }
        },

        computed: {
            
        },

        created(){

        },

        methods: {
            async submit(){
                this.loading = true
                
                try {

                    await this.$axios.$post('/auth/resend-email-verification', this.form);

                    this.$toast.success('Email Verification token has been sent to your mail. Please check your email box to proceed.', {
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