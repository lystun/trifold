<template>
    <div class="card shadow zindex-100 mb-0 login">
        <div class="card-body px-md-5 py-5">
            <div class="mb-5">
                <h6 class="h3">Login   </h6>
                <p class="text-muted mb-0">Sign in to your account to continue </p>
            </div>
            <span class="clearfix"></span>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label class="form-control-label">Email address</label>
                    <div class="input-group input-group-merge">
                        <div class="input-group-prepend"> <span class="input-group-text"><i class="fas fa-user"></i></span> </div>
                        <input type="email" v-model.trim="form.email" class="form-control pl-3" :class="{'is-invalid': errors.status }" id="input-email" placeholder="name@mail.com" autofocus>
                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                    </div>
                </div>
                <div class="form-group mb-4">
                    <label class="form-control-label">Password</label>
                    <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" v-model.trim="form.password" class="form-control pl-3" id="input-password" placeholder="Password">
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit" class="btn btn-sm btn-primary btn-icon rounded-pill">
                        <span class="fas fa-spinner fa-spin" v-if="loading"></span>
                        <span class="btn-inner--text">Login</span>
                        <span class="btn-inner--icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from "vuex";

    export default {
        layout: 'auth',
        middleware: ['guest'],

        data(){
            return {
                loading: false,

                form : {
                    email: '',
                    password: ''
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
                    const user = await this.$axios.$post(`/users/get-user`, { email: this.form.email})

                    let destination;

                    if(!user){
                        this.$router.push({ 
                            path: '/auth/login'
                        });
                    }

                    if(user.data.role == "user"){
                        this.$toast.error('Sorry, you are not authorized to access this page.', {
                            icon : 'times-circle',
                        })

                        throw "You're not authorized!";
                    }

                    if(user.data.role == 'counsellor'){
                        destination = '/dashboard/counsellor'
                    }else if(user.data.role == 'admin' ){
                        destination = '/dashboard/admin'
                    }

                    let res = await this.$auth.loginWith('local', { data: this.form });
                    this.loading = false
                    
                    this.$auth.setUser(res.data.data.user);

                    this.$toast.success('Successfully logged in', {
                        icon : 'check',
                    })

                    this.$router.push({ 
                        path: this.$route.query.redirect || destination
                    });

                } catch (err) {
                    this.loading = false
                    console.log(err)
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