<template>
    <div class="content-container">
        <div v-if="haveNote" class="wrap-show">
            <div class="wrap-show__note">
                <edit-note v-if="isEdit" :note="note" @getChangingNote="getChangingNote" />
                <view-note v-else :note="note" />
            </div>
            <div class="wrap-show__actions">
                <a-button v-if="!isEdit" label="Edit" class="wrap-show__actions__edit" @click="onEdit" />
                <a-button v-else label="Save" class="wrap-show__actions__save" @click="onSave" />
                <a-button label="Delete" class="wrap-show__actions__delete" @click="onRemove" />
            </div>
        </div>
        <div v-else class="empty-window">
            <h2>Hello it's the Notes manager</h2>
            <h3>You can watch for your time</h3>
        </div>
    </div>
</template>

<script>
    import EditNote from './Note/EditNote';
    import ViewNote from './Note/ViewNote';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        components: { EditNote, ViewNote },
        props: {
            noteId: Number,
        },
        data() {
            return {
                isEdit: false,
                changedNote: '',
            };
        },
        methods: {
            ...mapActions(['updateNote', 'deleteNote']),
            onEdit() {
                this.isEdit = true;
            },
            async onSave() {
                await this.updateNote(this.changedNote);
                this.isEdit = false;
            },
            getChangingNote(note) {
                this.changedNote = note;
            },
            async onRemove() {
                await this.deleteNote(this.noteId);
                this.$emit('clearCurrentNoteId');
            },
        },
        computed: {
            ...mapGetters(['getNoteById']),
            haveNote() {
                return this.noteId === 0 || this.noteId > 0;
            },
            currentNoteId() {
                return this.noteId;
            },
            note() {
                return this.getNoteById(this.noteId);
            },
        },
        beforeUpdate() {
            if (!this.note || !this.note.text) {
                this.isEdit = true;
            }
        },
        watch: {
            currentNoteId() {
                this.isEdit = false;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .content-container {
        display: flex;
        flex-direction: column;
        flex: 3;
        border: 1px solid #4a76a8;
        border-radius: 18px;
        justify-content: center;
        height: 100%;
        background-color: #ffffff;
        box-sizing: border-box;
        overflow: hidden;
        .empty-window {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #000000;
        }

        .wrap-show {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            &__actions {
                display: flex;
                &__save,
                &__edit,
                &__delete {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex: 1;
                    border-radius: 0 !important;
                    padding: 8px 0 !important;
                }
                &__edit {
                    background-color: #4986cc !important;
                }
                &__save {
                    background-color: #4bb34b !important;
                }
                &__delete {
                    background-color: #e64646 !important;
                }
            }
            &__note {
                height: 100%;
                position: inherit;
            }
        }
    }

    @media (max-width: 799px) {
        .content-container {
            display: none;
        }
    }
</style>
