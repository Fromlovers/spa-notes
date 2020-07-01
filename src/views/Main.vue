<template>
    <div class="main-container">
        <div class="container">
            <side-bar @setCurrentNote="setCurrentNote" />
            <content-bar :note="currentNote" />
        </div>
    </div>
</template>

<script>
    import SideBar from './SidebarMenu/SideBar';
    import ContentBar from './ContentMenu/ContentBar';

    export default {
        components: { SideBar, ContentBar },
        data() {
            return {
                currentNote: {},
            };
        },
        methods: {
            setCurrentNote(note) {
                this.currentNote = note;
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
