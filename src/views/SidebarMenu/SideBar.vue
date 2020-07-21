<template>
    <div class="sidebar">
        <header class="sidebar-header">
            Notes manager
        </header>

        <div class="sidebar-search">
            <a-input v-model="searchText" class="sidebar-search-input" placeholder="Search task..." @input="onInput" />
        </div>

        <div ref="note-items" class="sidebar-items">
            <note
                v-for="(note, index) in filteredNotes"
                :key="index"
                :ref="`note_${index}`"
                :note="note"
                @click="getNote(note, index)"
            />
        </div>
        <div class="sidebar-footer">
            <a-button
                :label="textButton"
                :class="{ 'sidebar-footer-button': true, 'apply-color': isApplyColor }"
                @click="showAddingNote"
            />
        </div>
        <div v-if="isShowModal" class="sidebar-modal-note">
            <NoteModal :isShow="isShowModal" @onClose="closeModal" @changeName="getNoteNameModal" />
        </div>
    </div>
</template>

<script>
    import Note from '../Components/Note';
    import NoteModal from '../Components/NoteModal';
    import { mapActions, mapState } from 'vuex';
    import DayJs from 'dayjs';

    export default {
        components: { Note, NoteModal },
        data() {
            return {
                isShowModal: false,
                textButton: 'Create Note',
                isApplyColor: false,
                nameOfNewNote: '',
                filteredNotes: [],
                searchText: '',
            };
        },
        methods: {
            ...mapActions(['deleteNote', 'addNote']),
            getNote(note, index) {
                this.$refs['note-items'].children.forEach(el =>
                    el.classList.contains('active-note') ? el.classList.remove('active-note') : '',
                );
                this.$refs[`note_${index}`][0].$el.classList.toggle('active-note');
                this.$emit('setCurrentNoteId', note.id);
            },
            getNoteNameModal(name) {
                this.nameOfNewNote = name;
            },
            showAddingNote() {
                this.isShowModal = !this.isShowModal;
                this.isApplyColor = this.isShowModal;

                if (this.isShowModal) {
                    this.textButton = 'Apply';

                    return;
                }

                this.textButton = 'Create Note';

                if (this.nameOfNewNote) {
                    this.addNote({ name: this.nameOfNewNote, date: this.date });
                }

                this.nameOfNewNote = '';
            },
            closeModal(target) {
                if (target.localName === 'button' || target.localName === 'span') {
                    return;
                }

                this.isShowModal = false;
                this.textButton = 'Create Note';
                this.isApplyColor = this.isShowModal;
                this.nameOfNewNote = '';
            },
            onInput(val) {
                if (!this.searchText) {
                    this.filteredNotes = this.notes;
                }
                this.filteredNotes = this.notes.filter(el => el.name.includes(val));
            },
        },
        computed: {
            date() {
                return DayJs(new Date()).format('YYYY-MM-DD');
            },
            ...mapState({
                notes: state => state.notes.notes,
            }),
        },
        watch: {
            notes: {
                handler(newVal) {
                    this.filteredNotes = newVal;
                },
                immediate: true,
            },
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
        position: relative;
        overflow: hidden;
        &-header {
            display: flex;
            padding: 1rem;
            justify-content: center;
            letter-spacing: 1.5px;
            background-color: #4986cc;
            color: #ffffff;
        }
        &-search {
            padding: 0 1px;
            &-input {
                height: 2.5rem !important;
                border-top: 1px solid #e6eaed !important;
                border-bottom: 1px solid #e6eaed !important;
            }
        }
        &-items {
            padding-top: 1rem;
            flex: 1;
            overflow: auto;
            div:last-child {
                border-bottom: 1px solid #e6eaed;
            }
            &::-webkit-scrollbar {
                width: 5px;
            }
            &::-webkit-scrollbar-thumb {
                background-color: darkgrey;
                outline: 1px solid slategrey;
            }
            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
            scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1);
            scrollbar-width: thin;
        }
        &-footer {
            &-button {
                width: 100%;
                padding: 8px 0 !important;
                background-color: #4986cc !important;
                border-radius: 0 !important;
            }
        }
        &-modal-note {
            width: 85%;
            margin: auto;
            position: absolute;
            left: 0;
            bottom: 3em;
            right: 0;
            background-color: #edeef0;
            padding: 10px 14px;
            border: 1px solid #4a76a8;
            border-radius: 12px;
        }
    }

    @media (max-width: 799px) {
        .sidebar {
            margin-right: 0;
        }
    }

    .apply-color {
        background-color: #4bb34b !important;
    }
    .active-note {
        background-color: #edeef0;
    }
</style>
