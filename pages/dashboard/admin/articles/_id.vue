<template>
    <div class="col-lg-9 order-lg-2 mb-3 article">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Edit Article</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="article__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Article Title</label>
                                    <input class="form-control" v-model="form.title" type="text" placeholder="Article Title" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Article Author</label>
                                    <input class="form-control" v-model="form.author" type="text" placeholder="Article Author" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Article Category</label>
                                    <select v-model="form.category" class="custom-select">
                                        <option value="category" disabled>Select Category</option>
                                        <option v-for="(category, index) in categories" :key="index" :value="category._id">{{ category.name }} </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Article Image</label>
                                    <input class="form-control" type="file" ref="image"
                                    @change="uploadImage" :class="{'is-invalid': imageErr }" >
                                    <div class="invalid-feedback">{{ this.imageErr }} </div>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Article Nudge</label>
                                    <input class="form-control" v-model="form.nudge" type="text" placeholder="Article Nudge" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label for="form-control-label">Article Content</label>
                                    <div class="quill-editor" required
                                        :content="form.content"
                                        v-quill:myQuillEditor="editorOption"
                                        @change="onEditorChange($event)" >
                                    </div>
                                </div>
                            </div>

                            <div class="col-auto ml-auto">
                                <button type="submit" class="btn btn-sm hover-translate-y-n3">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Edit Article
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

    import { mapGetters } from "vuex";

    export default {
        layout: 'admin',

        head(){
            return {
                title: 'Create New Article | Trifold'
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
                    author: '',
                    image: '',
                    category: '',
                    nudge: '',
                },

                imageErr: null,
                status: true,
            }
        },

        computed:{
            ...mapGetters({
                categories: 'categories/getCategories',
            })
        },

        created(){
            this.getCategories();
            this.getArticle();
        },

        methods: {
            onEditorChange({ editor, html, text }) {
                this.form.content = html
            },

            async getArticle(){
                let article = await this.$axios.$get(`/articles/${this.$route.params.id}`)
                this.form = article.data.data
                this.form.category = article.data.data.id
            },
            
            checkCategories(){
                if( Object.entries(this.categories) == 0){
                    this.getCategories()
                }
            },

            async create(){
                this.loading = true;

                try {

                    let formData = new FormData()
                    formData.append('title', this.form.title)
                    formData.append('content', this.form.content)
                    formData.append('image', this.form.image)
                    formData.append('author', this.form.author)
                    formData.append('category', this.form.category)
                    formData.append('nudge', this.form.nudge)
                    
                    await this.$axios.$patch(`/articles/${this.$route.params.id}`, formData)

                    this.loading = false;

                    this.$toast.success("Article updated successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/dashboard/admin/articles')
                    this.getArticles();

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

            async getArticles(){
                let articles = await this.$axios.$get('/articles')
                this.$store.dispatch('articles/setArticles', articles.data.data)
            },

            async getCategories(){
                let categories = await this.$axios.$get('/categories')
                this.$store.dispatch('categories/setCategories', categories.data.data)
            },

        }
        
    }
</script>

<style lang="scss" scoped>
    .article  {
        
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