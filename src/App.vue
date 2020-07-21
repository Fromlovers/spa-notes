<template>
    <Main />
</template>

<script>
    import Main from './views/Main';
    import { mapActions } from 'vuex';

    export default {
        components: { Main },
        methods: {
            ...mapActions(['setStateNotes']),
        },
        async created() {
            await this.setStateNotes();
        },
    };
</script>
