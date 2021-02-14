<template>
    <div class="card shadow zindex-100 mb-0 login">
        <div class="card-body px-md-5 py-5">
            <div class="mb-5">
                <h6 class="h3">Reset Password</h6>
                <p class="text-muted mb-0">Enter new password to complete process.</p>
            </div>
            <span class="clearfix"></span>
            <form role="form" @submit.prevent="submit">
                <div class="form-group mb-4">
                    <label class="form-control-label">Password</label>
                    <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" v-model.trim="form.password" :class="{'is-invalid': errors.status }" class="form-control pl-3" id="input-password" placeholder="Password">
                        
                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                    </div>
                </div>
                <div class="form-group mb-4">
                    <label class="form-control-label">Confirm Password</label>
                    <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" v-model.trim="form.passwordConfirm" :class="{'is-invalid': passwordErr }" class="form-control pl-3" id="input-confirmPassword" placeholder="Confirm Password">
                        <div class="invalid-feedback" v-if="passwordErr"> {{ passwordErr }} </div>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit" class="btn btn-sm btn-primary btn-icon rounded-pill">
                        <span class="fas fa-spinner fa-spin" v-if="loading"></span>
                        <span class="btn-inner--text">Reset Password</span>
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

        data(){
            return {
                loading: false,

                form : {
                    passwordConfirm: '',
                    password: ''
                },
                passwordErr: ''
            }
        },

        methods: {
            async submit(){
                this.loading = true
                
                try {
                    
                    if(this.form.password !== this.form.passwordConfirm ){
                        this.passwordErr = "Passwords do not match";

                        throw err
                    }

                    await this.$axios.$patch(`/auth/reset-password/${this.$route.params.token}`, this.form )
                    
                    this.$toast.success('Password Reset Successfully. Return to App and login', {
                        icon : 'check',
                    })

                    this.$router.push({ 
                        path: this.$route.query.redirect || '/'
                    });
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