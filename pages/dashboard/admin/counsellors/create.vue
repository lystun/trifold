<template>
    <div class="col-lg-9 order-lg-2 mb-3 counsellor">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Create New Counsellor</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="counsellor__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Counsellor Name</label>
                                    <input class="form-control" v-model="form.name" type="text" placeholder="Counsellor Name" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Counsellor Gender</label>
                                    <select v-model="form.gender" class="custom-select" required>
                                        <option disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Counsellor Email</label>
                                    <input class="form-control" v-model="form.email" type="email" placeholder="Counsellor Email" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Password</label>
                                    <input class="form-control" v-model="form.password" type="password" placeholder="Enter Password" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Confirm Password</label>
                                    <input class="form-control" v-model="form.passwordConfirm" type="password" placeholder="Confirm Password" required>
                                </div>
                            </div>

                            <div class="col-auto ml-auto">
                                <button type="submit" class="btn btn-sm hover-translate-y-n3">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Create Counsellor
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        layout: 'admin',

        head(){
            return {
                title: 'Create New Counsellor | Trifold'
            }
        },

        data(){
            return {
                loading: false,

                form : {
                    name: '',
                    email: '',
                    gender: '',
                    password: '',
                    passwordConfirm: '',
                    role: 'counsellor',
                    status: 'counsellor',
                },

            }
        },


        methods: {

            async create(){
                this.loading = true;

                try {
                    
                    await this.$axios.$post('/auth/register', this.form)
                    this.loading = false;

                    this.$toast.success("Counsellor created successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/dashboard/admin/counsellors')
                    this.getCounsellors();

                } catch (err) {
                    this.loading = false;
                }
            },

            uploadImage(e){

                const image = this.$refs.image.files[0];
                
                this.status = true
                this.imageErr = ''

                if(image.type.startsWith('image')){

                    if(image.size <= 1000000){
                        this.form.image = image
                        this.status = false
                    }else {
                        this.imageErr = "Image Size Must be less than 1mb"
                    }
                }else {
                    this.imageErr = "File Must be of an Image format (PNG, JPG, JPEG)"
                }
            },

            async getCounsellors(){
                let counsellors = await this.$axios.$get('/counsellors')
                this.$store.dispatch('counsellors/setCounsellors', counsellors.data.data)
            },

        }
        
    }
</script>

<style lang="scss" scoped>
    .counsellor  {
        
        &__form {
            .btn {
                color: $white;
                background: $secondary;
            }

            .quill-editor {
                min-height: 200px;
                max-height: 300px;
                overflow-y: auto;
            }
        }
    }
</style>