<template>
    <div class="sidebar">
        <header class="sidebar-header">
            <toogle-buttons />
        </header>

        <div class="sidebar-search">
            <a-input class="sidebar-search-input" placeholder="Search task..." />
        </div>

        <div class="sidebar-items">
            <note :note="note" />
        </div>
        <div class="sidebar-footer">
            <a-button label="Add" class="sidebar-footer-button" />
        </div>
    </div>
</template>

<script>
    import ToogleButtons from './../Components/ToogleButtons';
    import Note from '../Components/Note';
    import { mapActions } from 'vuex';

    export default {
        components: { ToogleButtons, Note },
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

<style lang="scss" scoped>
    .sidebar {
        display: flex;
        flex-direction: column;
        min-width: 300px;
        max-width: 350px; //need correct
        margin-right: 20px;
        background: #54494b;
        border: 2px solid rgba(185, 131, 137, 0.6);
        border-radius: 15px;
        min-height: 550px;
        cursor: pointer;

        &-header {
            display: flex;
            padding-bottom: 20px;
        }
        &-search {
            padding-bottom: 14px;
            &-input {
                background-color: rgb(103, 93, 91) !important;
                color: #ffffff !important;
                height: 2rem !important;
            }
        }
        &-items {
            flex: 1;
        }
        &-footer {
            margin: 10px;
            &-button {
                width: 100%;
                padding: 8px 0 !important;
                background-color: #519872 !important;
                border: 0.7px solid rgba(185, 131, 137, 0.6) !important;
            }
        }
    }

    @media (max-width: 799px) {
        .sidebar {
            margin-right: 0;
        }
    }
</style>
