<template>
    <div class="main-container">
        <div class="container">
            <side-bar @setCurrentNoteId="setCurrentNoteId" />
            <content-bar :noteId="currentNoteId" @clearCurrentNoteId="clearCurrentNoteId" />
        </div>
    </div>
</template>

<script>
    import SideBar from './SidebarMenu/SideBar';
    import ContentBar from './ContentMenu/ContentBar';
    import { mapActions } from 'vuex';

    export default {
        components: { SideBar, ContentBar },
        data() {
            return {
                currentNoteId: null,
            };
        },
        methods: {
            ...mapActions(['getNotes']),
            setCurrentNoteId(id) {
                this.currentNoteId = id;
            },
            clearCurrentNoteId() {
                this.currentNoteId = null;
            },
        },
    };
</script>

<style lang="scss">
    .main-container {
        width: 100%;
        height: 100%;
    }
    .container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100%;
        box-sizing: border-box;
    }
</style>
