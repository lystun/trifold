<template>
    <div class="col-lg-9 order-lg-2 mb-3 podcast">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Edit Podcast</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="podcast__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Podcast Title</label>
                                    <input class="form-control" v-model="form.title" type="text" placeholder="Podcast Title" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Podcast Author</label>
                                    <input class="form-control" v-model="form.author" type="text" placeholder="Podcast Author" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Podcast Category</label>
                                    <select v-model="form.category" class="custom-select">
                                        <option value="category" disabled>Select Category</option>
                                        <option v-for="(category, index) in categories" :key="index" :value="category._id">{{ category.name }} </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Podcast Description</label>
                                    <input class="form-control" v-model="form.description" type="text" placeholder="Brief Description" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Podcast Image</label>
                                    <input class="form-control" type="file" ref="image"
                                    @change="uploadImage" :class="{'is-invalid': imageErr }" >
                                    <div class="invalid-feedback">{{ this.imageErr }} </div>
                                </div>
                            </div>
                            
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Podcast File</label>
                                    <input class="form-control" type="file" ref="podcast"
                                    @change="uploadPodcast" :class="{'is-invalid': fileErr }">
                                    <div class="invalid-feedback">{{ this.fileErr }} </div>
                                </div>
                            </div>

                            <div class="col-auto ml-auto">
                                <button type="submit" class="btn btn-sm hover-translate-y-n3">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Edit Podcast
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
                title: 'Edit Podcast | Trifold'
            }
        },

        data(){
            return {
                loading: false,

                form : {
                    title: '',
                    description: '',
                    author: '',
                    image: '',
                    category: '',
                    podcast: '',
                },

                imageErr: null,
                fileErr: null,
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
            this.getPodcast();
        },

        methods: {
            onEditorChange({ editor, html, text }) {
                this.form.content = html
            },

            async getPodcast(){
                let podcast = await this.$axios.$get(`/podcasts/${this.$route.params.id}`)
                this.form = podcast.data.data
                this.form.category = podcast.data.data.id
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
                    formData.append('description', this.form.description)
                    formData.append('image', this.form.image)
                    formData.append('author', this.form.author)
                    formData.append('category', this.form.category)
                    formData.append('podcast', this.form.podcast)
                    
                    await this.$axios.$patch(`/podcasts/${this.$route.params.id}`, formData)

                    this.loading = false;

                    this.$toast.success("Podcast updated successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/dashboard/admin/podcasts')
                    this.getPodcasts();

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

            uploadPodcast(e){
                const podcast = this.$refs.podcast.files[0];
            
                if(podcast.type.startsWith('audio')){
                    this.form.podcast = podcast
                }else {
                    this.fileErr = "File Must be of an Audio format (MP3, MP4, OCC)"
                }
            },

            async getPodcasts(){
                let podcasts = await this.$axios.$get('/podcasts')
                this.$store.dispatch('podcasts/setPodcasts', podcasts.data.data)
            },

            async getCategories(){
                let categories = await this.$axios.$get('/categories')
                this.$store.dispatch('categories/setCategories', categories.data.data)
            },

        }
        
    }
</script>

<style lang="scss" scoped>
    .podcast  {
        
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