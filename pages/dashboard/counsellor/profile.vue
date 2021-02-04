<template>
    <div>
        <div class="actions-toolbar py-2 mb-4">
            <h5 class="mb-1">Update Information</h5>
            <p class="text-sm text-muted mb-0">You can update your profile information.</p>
        </div>
        <form @submit.prevent="create">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                    <label class="form-control-label">First Name:</label>
                    <input class="form-control" v-model="form.fname" type="text" placeholder="Enter your first name">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                    <label class="form-control-label">Last Name:</label>
                    <input class="form-control" v-model="form.lname" type="text" placeholder="Enter your Last name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                    <label class="form-control-label">Email:</label>
                    <input class="form-control"  type="email" :placeholder="user.email" readonly>
                        <small class="form-text text-muted mt-2">This is the main email address that we'll send notifications to. Please ensure it's checked regularly</small>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Phone:</label>
                        <input class="form-control" v-model="form.phone" type="text" placeholder="+40-777 245 549">
                    </div>
                </div>
            </div>

            <!-- Professional information -->
            <div class=" mt-3 delimiter-top">
                <div class="actions-toolbar py-2 mb-4">
                    <h5 class="mb-1">Professional Information</h5>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Professional Title</label>
                            <input class="form-control" v-model="form.title" type="text" placeholder="Professional Title">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Change Profile Photo</label>
                            <input class="form-control" type="file">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="form-group">
                                <label class="form-control-label">Brief Description</label>
                                <textarea class="form-control" v-model="form.description" placeholder="Tell us a few words about yourself" rows="3"></textarea>
                                <!-- <small class="form-text text-muted mt-2">You can @mention other users and organizations to link to them.</small> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Save changes buttons -->
            <div class="mt-2 mb-5 delimiter-top">
                <button type="submit" class="btn btn-sm hover-translate-y-n3 btn-primary">
                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span> Save changes
                </button>
                <nuxt-link to="/admin/counsellor" class="btn btn-link text-muted">Cancel</nuxt-link>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        layout: 'counsellor',

        head(){
            return {
                title: 'Profile | Trifold'
            }
        },

        data(){
            return{
                loading: false,

                form: {
                    fname: '',
                    lname: '',
                    name: '',
                    email: '',
                    phone: '',
                    title: '',
                    description: '',
                    photo: ''
                },

                user: {}
            }
        },

        computed:{
            ...mapGetters({
                counsellor: 'counsellors/getCounsellor'
            })
        },

        created(){
            this.getCounsellor()
        },

        methods: {
    
            async getCounsellor(){
                const user = await this.$axios.$get(`/users/${ this.$store.state.auth.user.me.id }`);
                this.form = user.data.data.counsellor[0];
                this.form.fname = this.form.name.split(' ')[0];
                this.form.lname = this.form.name.split(' ')[1];

                this.user = user.data.data
            },

            async create(){
                this.loading = true;

                try {
                    this.form.name =  this.form.fname+' '+this.form.lname;

                    await this.$axios.$patch(`/counsellors/${this.counsellor.id}`, this.form)
                    this.loading = false;

                    this.$toast.success("Information updated successfully", {
                        icon : 'check'
                    });

                    this.loadCounsellor()

                } catch (err) {
                    this.loading = false;
                }
            },

            async loadCounsellor (){
                const user = await this.$axios.$get(`/users/${ this.$store.state.auth.user.me.id }`);
                this.$store.dispatch('counsellors/setCounsellor', ...user.data.data.counsellor)
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

        }
    }
</script>

<style>

</style>