<template>
    <div class="my-3">
        <div class="d-flex justify-content-between">
            <select v-model="perPage" class="custom-select custom-select-sm mr-5">
                <option value="10" disabled >Per Page</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            <pagination v-model="page" :records="records" :per-page="perPage *1" @paginate="data"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data'],

        data(){
            return {
                page: 1,
                perPage: 10,
                records: 0,
            }
        }

    }
</script>

<style>

</style>