<template>
    <div class="col-lg-9 order-lg-2 mb-3 nudge">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="mt-2 mb-4">
                        <h4>Create New Nudge</h4>
                    </div>
                    
                    <form @submit.prevent="create" class="nudge__form">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Nudge</label>
                                    <input class="form-control" v-model="form.nudge" type="text" placeholder="Nudge" required>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Select Category</label>
                                    <select v-model="form.category" class="custom-select" required>
                                        <option value="category" disabled>Select Category</option>
                                        <option v-for="(category, index) in categories" :key="index" :value="category._id">{{ category.name }} </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-12 mb-2">
                                <div class="form-group">
                                    <label class="form-control-label">Select Section</label>
                                    <select v-model="form.section" class="custom-select" required>
                                        <option value="category" disabled>Select Section</option>
                                        <option value="individual">Individual</option>
                                        <option value="couples">Couples</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-auto my-2 ml-auto">
                                <button type="submit" class="btn btn-sm hover-translate-y-n3">
                                    <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                    Create Nudge
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
                title: 'Create New Nudge | Trifold'
            }
        },

        data(){
            return {
                loading: false,
                categories: {},

                form : {
                    nudge: '',
                    category: '',
                    section: '',
                },
            }
        },

        created(){
            this.getCategories();
        },

        methods: {
            async create(){
                this.loading = true;

                try {
                    
                    await this.$axios.$post('/nudges', this.form)
                    this.loading = false;

                    this.$toast.success("Nudge created successfully", {
                        icon : 'check'
                    });

                    this.$router.push('/dashboard/admin/nudges')

                } catch (err) {
                    this.loading = false;
                }
            },

            async getCategories(){
                let categories = await this.$axios.$get('/categories')
                this.categories = categories.data.data
            },

        }
        
    }
</script>

<style lang="scss" scoped>
    .nudge  {
        
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