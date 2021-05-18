<template>
    <div>
        <div class="actions-toolbar py-2 mb-4">
            <h5 class="mb-1">Update Information</h5>
            <p class="text-sm text-muted mb-0">You can update your profile information.</p>
        </div>
        <!-- <form> -->
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

            <!-- Update schedule -->
            <div class="mt-4 delimiter-top" id="schedule">
                <div class="actions-toolbar py-2 mb-2">
                    <h5 class="mb-1">Update Schedule</h5>
                    <p class="text-sm text-muted mb-0">Select your available day(s) and time.</p>
                </div>

                <!-- Sunday -->
                <div class="row">
                    <div class="col-md-5">
                        <div class="form-group">
                            <label class="form-control-label">Select Day</label>
                            <input type="text" class="form-control" v-model="schedules[0].day" readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label class="form-control-label">Start Time</label>
                                    <input class="form-control" @change="addSelection(0)" v-model="schedules[0].start_time" type="time" placeholder="Start Time">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label class="form-control-label">End Time</label>
                                    <input class="form-control" @change="addSelection(0)" v-model="schedules[0].end_time" type="time" placeholder="End Time">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1" v-if="schedules[0].start_time && schedules[0].end_time !== '' " >
                        <div class="form-group">
                            <label class="form-control-label">Clear</label>
                            <span class="btn btn-danger btn-sm d-inline-block" @click="clearSelection(0)">
                                <span class="fas fa-times"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Monday -->
                <div class="row">
                    <div class="col-md-5">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="schedules[1].day" readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(1)" v-model="schedules[1].start_time" type="time" placeholder="Start Time">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(1)" v-model="schedules[1].end_time" type="time" placeholder="End Time">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1" v-if="schedules[1].start_time && schedules[1].end_time !== '' ">
                        <div class="form-group">
                            <span class="btn btn-danger btn-sm d-inline-block" @click="clearSelection(1)">
                                <span class="fas fa-times"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Tuesday -->
                <div class="row">
                    <div class="col-md-5">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="schedules[2].day" readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(2)" v-model="schedules[2].start_time" type="time" placeholder="Start Time">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(2)" v-model="schedules[2].end_time" type="time" placeholder="End Time">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1" v-if="schedules[2].start_time && schedules[2].end_time !== '' ">
                        <div class="form-group">
                            <span class="btn btn-danger btn-sm d-inline-block" @click="clearSelection(2)">
                                <span class="fas fa-times"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Wednesday -->
                <div class="row">
                    <div class="col-md-5">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="schedules[3].day" readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(3)" v-model="schedules[3].start_time" type="time" placeholder="Start Time">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(3)" v-model="schedules[3].end_time" type="time" placeholder="End Time">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1" v-if="schedules[3].start_time && schedules[3].end_time !== '' ">
                        <div class="form-group">
                            <span class="btn btn-danger btn-sm d-inline-block" @click="clearSelection(3)">
                                <span class="fas fa-times"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Thursday -->
                <div class="row">
                    <div class="col-md-5">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="schedules[4].day" readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(4)" v-model="schedules[4].start_time" type="time" placeholder="Start Time">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(4)" v-model="schedules[4].end_time" type="time" placeholder="End Time">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1" v-if="schedules[4].start_time && schedules[4].end_time !== '' ">
                        <div class="form-group">
                            <span class="btn btn-danger btn-sm d-inline-block" @click="clearSelection(4)">
                                <span class="fas fa-times"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Friday -->
                <div class="row">
                    <div class="col-md-5">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="schedules[5].day" readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(5)" v-model="schedules[5].start_time" type="time" placeholder="Start Time">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(5)" v-model="schedules[5].end_time" type="time" placeholder="End Time">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1" v-if="schedules[5].start_time && schedules[5].end_time !== '' ">
                        <div class="form-group">
                            <span class="btn btn-danger btn-sm d-inline-block" @click="clearSelection(5)">
                                <span class="fas fa-times"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Saturday -->
                <div class="row">
                    <div class="col-md-5">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="schedules[6].day" readonly>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(6)" v-model="schedules[6].start_time" type="time" placeholder="Start Time">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" @change="addSelection(6)" v-model="schedules[6].end_time" type="time" placeholder="End Time">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1" v-if="schedules[6].start_time && schedules[6].end_time !== '' ">
                        <div class="form-group">
                            <span class="btn btn-danger btn-sm d-inline-block" @click="clearSelection(6)">
                                <span class="fas fa-times"></span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <small class="text-danger" v-if="err">{{ err }}</small>
                </div>
            </div>

            <!-- Professional information -->
            <div class="mt-4 delimiter-top">
                <div class="actions-toolbar py-2 mb-2">
                    <h5 class="mb-1">Professional Information</h5>
                    <p class="text-sm text-muted mb-0">Tell us more about yourself.</p>
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
                <button class="btn btn-sm hover-translate-y-n3 btn-primary">
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
                title: 'Counsellor Profile | Trifold'
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
                    photo: '',
                },

                schedules: [],
                user: {},
                err: ""
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

        async asyncData({ $axios, store }) {
            let id;

            if( store.state.auth.user.id){
                id = store.state.auth.user.id
            }else {
                id = store.state.auth.user.me.id
            }

            const res = await $axios.$get(`/users/${ id }`);
            
            const schedules = res.data.data.counsellor[0].schedule;
            const user = res.data.data;

            return { schedules, user };
        },

        methods: {
    
            async getCounsellor(){
                let id;

                if(this.$store.state.auth.user.id){
                    id = this.$store.state.auth.user.id
                }else {
                    id = this.$store.state.auth.user.me.id
                }

                const user = await this.$axios.$get(`/users/${ id }`);
                this.form = user.data.data.counsellor[0];
                this.form.fname = this.form.name.split(' ')[0];
                this.form.lname = this.form.name.split(' ')[1];

                this.user = user.data.data;
            },

            clearSelection(index){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, clear selection!'
                }).then((result) => {
                    if (result.value) {
                        
                        const selection =  this.schedules[index];

                        selection.start_time = '',
                        selection.end_time = '',
                        selection.timeChunks = [],

                        this.$toast.success("Time selection cleared.", {
                            icon: "check"
                        })
                    }
                })
            },

            addSelection(index) {
                try {

                    const sch = this.schedules[index];

                    if(sch.start_time == '' || sch.end_time == '') throw "Please select start and end time."
                    
                    const startTime = this.convertTimeToMin(sch.start_time)
                    const endTime = this.convertTimeToMin(sch.end_time)

                    const interval = 60;

                    const diff = endTime.convertedTime - startTime.convertedTime;

                    if(diff < interval) throw `Your selected time difference is lesser than the required intervals of ${interval} minutes.`;
                    if(diff % interval > 0 ) throw `Your selected time is not precisely in the required intervals of ${interval} minutes.`;

                    if(diff >= interval && diff % interval == 0){

                        const getInterval = parseInt( (endTime.convertedTime - startTime.convertedTime) / interval);
                        const minutes = (startTime.minutes == 0) ? "00" : startTime.minutes

                        const timeChunks = [];

                        for(let i=0; i < getInterval; i++){
                            let hour = startTime.hour + i;

                            if(hour > 23) hour = 0;
                            const time = `${hour}:${minutes}`;

                            timeChunks.push(time)
                        }

                        sch.timeChunks = [...timeChunks];
                        this.schedules.splice(index, 1, sch)
                    }

                    console.log(this.schedules);
                    
                    this.err = "";
                } catch (err) {
                    this.err = err;
                }
            },

            //convert time in hh:min to minutes;
            convertTimeToMin(input){
                const time = input.split(/[.:]/)
                const hour = parseInt(time[0], 10)
                const minutes = time[1] ? parseInt(time[1], 10) : 0;
                    
                return {
                    hour,
                    minutes,
                    convertedTime: minutes + (hour *  60)
                }
            },

            async create(){
                this.loading = true;

                try {
                    this.form.name =  this.form.fname+' '+this.form.lname;

                    this.form.schedule = this.schedules;

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