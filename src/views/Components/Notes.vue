<template>
    <section>
        <div class="container"></div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    // import List from './components/List';

    export default {
        components: {},
        data() {
            return {};
        },
        methods: {
            ...mapActions(['getNotes', 'deleteNote']),
        },
        computed: {
            notes() {
                return this.$store.state.notes;
            },
        },
        created() {
            this.getNotes();
        },
    };
</script>

<style lang="scss">
    .container {
        width: 100%;
        height: 100%;
    }
</style>
