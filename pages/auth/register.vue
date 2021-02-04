<template>
    <div class="card shadow zindex-100 mb-0">
        <div class="card-body px-md-5 py-5">
            <div class="mb-5">
                <h6 class="h3">Create account</h6>
                <p class="text-muted mb-0">Create an account as a counsellor and await confirmation from the team</p>
            </div>
            <span class="clearfix"></span>
            <form role="form">
                <div class="form-group">
                    <label class="form-control-label">Email address</label>
                    <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="email" class="form-control" id="input-email" placeholder="name@example.com">
                    </div>
                </div>
                <div class="form-group mb-4">
                    <label class="form-control-label">Password</label>
                    <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" class="form-control" id="input-password" placeholder="********">
                    <div class="input-group-append">
                        <span class="input-group-text">
                        <i class="fas fa-eye"></i>
                        </span>
                    </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-control-label">Confirm password</label>
                    <div class="input-group input-group-merge">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" class="form-control" id="input-password-confirm" placeholder="********">
                    </div>
                </div>
                <div class="mt-4">
                    <button type="button" class="btn btn-sm btn-primary btn-icon rounded-pill">
                        <span class="btn-inner--text">Create account</span>
                        <span class="btn-inner--icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                    </button>
                </div>
            </form>
        </div>  
    </div>
</template>

<script>
    export default {
        layout: 'auth'
    }
</script>

<style lang="scss" scoped>

</style>