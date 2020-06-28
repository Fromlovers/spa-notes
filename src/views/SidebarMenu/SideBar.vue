<template>
    <div class="sidebar">
        <header class="sidebar-header">
            <toogle-buttons />
        </header>

        <div class="sidebar-search">
            <a-input class="sidebar-search-input" placeholder="Search task..." />
        </div>

        <div class="sidebar-items">
            <note v-for="(note, index) in notes" :key="index" :note="note" @click="setCurrentNote" />
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
            setCurrentNote(note) {
                console.log(note);

                this.currentTask = note;
            },
        },
        computed: {
            notes() {
                //this.$store.state.notes
                const testNotes = [
                    {
                        name: 'test note',
                        text: 'The text-overflow CSS property sets how hidden overflow content is signaled to users.',
                        date: '22.07.2020',
                    },
                    {
                        name: 'test note',
                        text: 'The text-overflow CSS property sets how hidden overflow content is signaled to users.',
                        date: '22.07.2020',
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
        max-width: 350px; //need correct
        margin-right: 20px;
        background: #54494b;
        border: 2px solid rgba(185, 131, 137, 0.6);
        border-radius: 17px;
        min-height: 550px;

        &-header {
            display: flex;
            padding-bottom: 20px;
        }
        &-search {
            padding-bottom: 20px;
            &-input {
                background-color: rgb(103, 93, 91) !important;
                color: #ffffff !important;
                height: 2.5rem !important;
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
