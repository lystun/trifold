<template>
    <div class="col-lg-9 order-lg-2 mb-3 event">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Edit Event</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="event__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Event Name</label>
                                    <input class="form-control" v-model="form.name" type="text" placeholder="Event Name" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Event URL</label>
                                    <input class="form-control" v-model="form.url" type="text" placeholder="Event URL" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Event Image</label>
                                    <input class="form-control" type="file" ref="image"
                                    @change="uploadImage" :class="{'is-invalid': imageErr }">
                                    <div class="invalid-feedback">{{ this.imageErr }} </div>
                                </div>
                            </div>


                            <div class="col-auto my-2 ml-auto">
                                <button type="submit" class="btn btn-sm hover-translate-y-n3">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Edit Event
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
                title: 'Edit Event | Trifold'
            }
        },

        data(){
            return {
                loading: false,

                form : {
                    name: '',
                    url: '',
                    image: '',
                },

                imageErr: null,
            }
        },

        created(){
            this.getEvent()
        },

        methods: {

            async getEvent(){
                let event = await this.$axios.$get(`/events/${this.$route.params.id}`);
                this.form = event.data.data
            },

            async create(){
                this.loading = true;

                try {

                    let formData = new FormData()
                    
                    formData.append('name', this.form.name)
                    formData.append('url', this.form.url)
                    formData.append('image', this.form.image)
                    
                    await this.$axios.$patch(`/events/${this.$route.params.id}`, formData)
                    this.loading = false;

                    this.$toast.success("Event edited successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/dashboard/admin/events')
                    this.getEvents();

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

            async getEvents(){
                let events = await this.$axios.$get('/events')
                this.$store.dispatch('events/setEvents', events.data.data)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .event  {
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