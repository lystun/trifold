<template>
    <div class="modal" id="staticBackdrop" data-backdrop="false" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div>
                        <h6 class="modal-title mb-1" id="staticBackdropLabel">Join our Waiting List.</h6>
                        <small>You'll recieve a mail notification when we launch.</small>
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form role="form" @submit.prevent="submit">
                        <div class="form-group">
                            <label for="name" class="form-label font-weight-bold">Name:</label>
                            <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Please enter Name" required>
                        </div>
                        <div class="form-group">
                            <label for="email" class="form-label font-weight-bold">Email:</label>
                            <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Please enter Email" required>
                        </div>
                        <div class="mt-4 text-right">
                            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-sm btn-primary">
                                <span class="fas fa-spinner fa-spin" v-if="loading"></span>
                                Join List
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

                loading: false,
                form : {
                    name: '',
                    email: ''
                },
            }
        },
        methods:{

            async submit(){
                this.loading = true

                try {

                    const subscriber = await this.$axios.$post('/subscribers', this.form)

                    if(subscriber){
                        this.$toast.success('Successful! Thanks for Joining.', {
                            icon : 'check',
                        })
                    }else{
                        this.$toast.error('Faield to submit!', {
                            icon : 'times-circle',
                        })
                        
                    }

                    this.form = ""
                    $('#staticBackdrop').modal('hide')

                    
                } catch (error) {
                    this.loading = false
                }
            }
        }
    }
</script>

<style>

</style>