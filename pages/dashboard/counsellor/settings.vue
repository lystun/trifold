<template>
    <div>
        <div class="actions-toolbar py-2 mb-4">
            <h5 class="mb-1">Settings</h5>
            <p class="text-sm text-muted mb-0">You can update your profile information.</p>
        </div>
        <form role="form" @submit.prevent="submit">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Current Password</label>
                        <input class="form-control" v-model="form.passwordCurrent" type="password" :class="{'is-invalid': errors.status }" required>
                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">New Password</label>
                        <input class="form-control" v-model="form.password" type="password" :class="{'is-invalid': passwordErr }" required>
                        <div class="invalid-feedback" v-if="passwordErr"> {{ passwordErr }} </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Confirm New Password</label>
                        <input class="form-control" v-model="form.passwordConfirm" type="password" :class="{'is-invalid': passwordErr }" required>
                    </div>
                </div>
            </div>

             <div class="mt-3 mb-5 delimiter-top text-cente">
                <button type="submit" class="btn btn-sm btn-primary">Update Password</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        layout: 'counsellor',

        head(){
            return {
                title: 'Settings | Trifold'
            }
        },

        data(){
            return{
                loading: false,

                form : {
                    passwordCurrent: '',
                    password: '',
                    passwordConfirm: ''
                },
                passwordErr: ''
            }
        },

        methods : {
            async submit(){
                try {

                    if(this.form.password !== this.form.passwordConfirm ){
                        this.passwordErr = "Passwords do not match";

                        throw err
                    }

                    await this.$axios.$post('/auth/update-password', this.form);

                    this.$toast.success('Password updated successfully', {
                        icon : 'check',
                    })

                    this.$router.push({ 
                        path: this.$route.query.redirect || '/dashboard/counsellor'
                    });
                    
                } catch (err) {
                    this.loading = false
                }
            }
        }
    }
</script>

<style>

</style>