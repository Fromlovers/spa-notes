<template>
    <section>
        <div class="container">
            <List :notes="notes" @delete="deleteNote" />
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    import List from './components/List';

    export default {
        components: {
            List,
        },
        data() {
            return {};
        },
        methods: {
            ...mapActions(['getNotes', 'deleteNote']),
            // async add() {
            //     await this.addNote({ name: 'notik', tasks: ['wowo'] });
            //     this.getNotes();
            // },
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
