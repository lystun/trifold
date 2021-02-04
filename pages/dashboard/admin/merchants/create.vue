<template>
    <div class="col-lg-9 order-lg-2 mb-3 merchant">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Create New Merchant</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="merchant__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Merchant Name</label>
                                    <input class="form-control" v-model="form.personalInfo" type="text" placeholder="Merchant Name" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Business Name</label>
                                    <input class="form-control" v-model="form.description" type="text" placeholder="Business Name" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Business Location</label>
                                    <input class="form-control" v-model="form.location" type="text" placeholder="Business Location" required>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Business Description</label>
                                    <input class="form-control" v-model="form.businessInfo" type="text" placeholder="Business Description" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Business URL</label>
                                    <input class="form-control" v-model="form.url" type="text" placeholder="Business URL" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Subscription Duration(in Days)</label>
                                    <input class="form-control" v-model="form.duration" type="text" placeholder="Subscription Duration" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Business Banner Image</label>
                                    <input class="form-control" type="file" ref="image" required
                                    @change="uploadImage" :class="{'is-invalid': imageErr }" >
                                    <div class="invalid-feedback">{{ this.imageErr }} </div>
                                </div>
                            </div>

                            <div class="col-auto ml-auto">
                                <button type="submit" class="btn btn-sm hover-translate-y-n3" :disabled="status">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Create Merchant
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
                title: 'Create New Merchant | Trifold'
            }
        },

        data(){
            return {
                loading: false,

                editorOption: {
                },

                form : {
                    personalInfo: '',
                    businessInfo: '',
                    location: '',
                    image: '',
                    description: '',
                    duration: '',
                    url: '',
                },

                imageErr: null,
                status: true,
            }
        },

        methods: {

            async create(){
                this.loading = true;

                try {

                    let formData = new FormData();

                    formData.append('personalInfo', this.form.personalInfo)
                    formData.append('businessInfo', this.form.businessInfo)
                    formData.append('image', this.form.image)
                    formData.append('location', this.form.location)
                    formData.append('description', this.form.description)
                    formData.append('duration', this.form.duration)
                    formData.append('url', this.form.url)
                    
                    await this.$axios.$post('/merchants', formData)

                    this.loading = false;

                    this.$toast.success("Merchant Information Created successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/dashboard/admin/merchants')
                    this.getMerchants();

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

            async getMerchants(){
                let merchants = await this.$axios.$get('/merchants')
                this.$store.dispatch('merchants/setMerchants', merchants.data.data)
            },

        }
        
    }
</script>

<style lang="scss" scoped>
    .merchant  {
        
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