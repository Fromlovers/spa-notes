<template>
    <div class="sidebar">
        <header class="sidebar-header">
            <toogle-buttons />
        </header>

        <div class="sidebar-search">
            <a-input class="sidebar-search-input" placeholder="Search task..." />
        </div>

        <div class="sidebar-items">
            <note v-for="(note, index) in notes" :key="index" :note="note" @click="getNote(note)" />
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
        data() {
            return {
                currentTask: {},
            };
        },
        methods: {
            ...mapActions(['getNotes', 'deleteNote']),
            getNote(note) {
                this.currentTask = note;
                this.$emit('setCurrentNote', note);
            },
        },
        computed: {
            notes() {
                //this.$store.state.notes
                const testNotes = [
                    {
                        name: 'test note 1',
                        text: 'The text-overflow CSS property sets how hidden overflow content is signaled to users.',
                        date: '22.07.2022',
                    },
                    {
                        name: 'test note 2',
                        text: 'The text-overflow CSS property sets how hidden overflow content is signaled to users.',
                        date: '22.07.2023',
                    },
                ];
                return testNotes;
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
        max-width: 350px;
        margin-right: 20px;
        background-color: #ffffff;
        border: 1px solid #4a76a8;
        border-radius: 18px;
        height: 100%;
        box-sizing: border-box;
        &-header {
            display: flex;
            padding-bottom: 20px;
        }
        &-search {
            padding-bottom: 20px;
            &-input {
                height: 2.5rem !important;
                border-top: 1px solid #e6eaed !important;
                border-bottom: 1px solid #e6eaed !important;
            }
        }
        &-items {
            flex: 1;
        }
        &-footer {
            padding: 10px;
            &-button {
                width: 100%;
                padding: 8px 0 !important;
                background-color: #5a91d0 !important;
                border-radius: 12px !important;
            }
        }
    }

    @media (max-width: 799px) {
        .sidebar {
            margin-right: 0;
        }
    }
</style>
