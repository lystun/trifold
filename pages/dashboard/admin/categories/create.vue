<template>
    <div class="col-lg-9 order-lg-2 mb-3 category">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Create New Category</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="category__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Category Name</label>
                                    <input class="form-control" v-model="form.name" type="text" placeholder="Category Title" >
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Category Icon</label>
                                    <input class="form-control" type="file" ref="image"
                                    @change="uploadImage" :class="{'is-invalid': imageErr }" >
                                    <div class="invalid-feedback">{{ this.imageErr }} </div>
                                </div>
                            </div>

                            <div class="col-auto my-2 ml-auto">
                                <button type="submit" class="btn btn-sm hover-translate-y-n3" :disabled="status">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Create Category
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
                title: 'Create New Category | Trifold'
            }
        },

        data(){
            return {
                loading: false,

                editorOption: {
                },

                form : {
                    name: '',
                    image: '',
                },

                imageErr: null,
                status: true,
            }
        },


        methods: {
            onEditorChange({ editor, html, text }) {
                this.form.content = html
            },

            async create(){
                this.loading = true;

                try {

                    let formData = new FormData()
                    formData.append('name', this.form.name)
                    formData.append('image', this.form.image)
                    
                    await this.$axios.$post('/categories', formData)

                    this.loading = false;

                    this.$toast.success("Category created successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/dashboard/admin/categories')
                    this.getCategories();

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

            async getCategories(){
                let categories = await this.$axios.$get('/categories')
                this.$store.dispatch('categories/setCategories', categories.data.data)
            },

        }
        
    }
</script>

<style lang="scss" scoped>
    .category  {
        
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