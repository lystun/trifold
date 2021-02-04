<template>
    <div>
        <div class="actions-toolbar py-2 mb-4">
            <h5 class="mb-1">Settings</h5>
            <p class="text-sm text-muted mb-0">You can update your profile information.</p>
        </div>
        <form>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Current Password</label>
                        <input class="form-control" type="password">
                        <small class="form-text text-danger mt-2">Password is incorrect. Please try again</small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">New Password</label>
                        <input class="form-control" type="password">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Confirm New Password</label>
                        <input class="form-control" type="password">
                    </div>
                </div>
            </div>

             <div class="mt-3 mb-5 delimiter-top text-cente">
                <button type="submit" class="btn btn-sm btn-primary">Update Password</button>
                <nuxt-link to="/admin/counsellor" class="btn btn-sm btn-secondary text-muted">I forgot Password</nuxt-link>
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

            }
        }
    }
</script>

<style>

</style>