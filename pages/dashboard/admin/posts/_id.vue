<template>
    <div class="col-lg-9 order-lg-2 mb-3 post">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Edit Blog Post</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="post__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Post Title</label>
                                    <input class="form-control" v-model="form.title" type="text" placeholder="Post Title" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Post Image</label>
                                    <input class="form-control" type="file" ref="image"
                                    @change="uploadImage" :class="{'is-invalid': imageErr }">
                                    <div class="invalid-feedback">{{ imageErr }} </div>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label for="form-control-label font-weight-bold">Post Content</label>
                                    <div class="quill-editor" required
                                        :content="form.content"
                                        v-quill:myQuillEditor="editorOption"
                                        @change="onEditorChange($event)" >
                                    </div>
                                </div>
                            </div>

                            <div class="col-auto my-2 ml-auto">
                                <button type="submit" class="btn btn-sm hover-translate-y-n3">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Edit Post
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
                title: 'Edit New Post | Trifold'
            }
        },

        data(){
            return {
                loading: false,

                editorOption: {
                },

                form : {
                    title: '',
                    content: '',
                    image: '',
                },

                imageErr: null,
                status: true,
            }
        },

        created(){
            this.getPost()
        },

        methods: {
            onEditorChange({ editor, html, text }) {
                this.form.content = html
            },

            async getPost(){
                let post = await this.$axios.$get(`/posts/${this.$route.params.id}`)
                this.form = post.data.data
            },

            async create(){
                this.loading = true;

                try {

                    let formData = new FormData()

                    formData.append('title', this.form.title)
                    formData.append('content', this.form.content)
                    formData.append('image', this.form.image)
                    
                    await this.$axios.$patch(`/posts/${this.$route.params.id}`, formData)

                    this.loading = false;

                    this.$toast.success("Post edited successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/dashboard/admin/posts')
                    this.getPosts();

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

            async getPosts(){
                let posts = await this.$axios.$get('/posts')
                this.$store.dispatch('posts/setPosts', posts.data.data)
            },
        }
        
    }
</script>

<style lang="scss" scoped>
    .post  {
        
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