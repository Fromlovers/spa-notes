<template>
    <div class="note-editor">
        <ckeditor v-model="editorData" :editor="editor" @ready="readyEditor" @input="onInput" />
    </div>
</template>

<script>
    import CKEditor from '@ckeditor/ckeditor5-vue';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        components: { ckeditor: CKEditor.component },
        props: {
            note: {},
        },
        data() {
            let editorData = '';
            if (this.note?.text) {
                editorData = this.note.text;
            }
            return {
                editorData,
                editor: ClassicEditor,
            };
        },
        methods: {
            readyEditor() {
                const editor = document.getElementsByClassName('ck ck-editor__main')[0];
                editor.style.setProperty('--height-editor', `${editor.offsetHeight}px`);
                editor.style.setProperty('--width-editor', `${editor.offsetWidth}px`);
            },
            onInput(val) {
                const { id, name } = this.note;
                this.$emit('getChangingNote', { id, name, text: val });
            },
        },
        created() {
            window.addEventListener('resize', this.readyEditor);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.readyEditor);
        },
    };
</script>

<style lang="scss" scoped>
    .note-editor {
        position: relative;
        height: inherit;
        display: flex;
        flex-direction: column;
        &::v-deep {
            .ck.ck-reset.ck-editor.ck-rounded-corners {
                display: flex;
                flex-direction: column;
                flex: 1;

                .ck.ck-editor__top {
                    display: flex;
                    flex-direction: column;
                }
                .ck.ck-editor__main {
                    display: flex;
                    flex-direction: column;
                    flex: 1;

                    .ck-blurred.ck.ck-content.ck-editor__editable {
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        height: inherit;
                        max-height: var(--height-editor, 0);
                        max-width: var(--width-editor, 0);
                    }
                    .ck.ck-content.ck-editor__editable {
                        overflow: auto;
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        max-height: var(--height-editor, 0);
                        max-width: var(--width-editor, 0);
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
                }
            }

            // .ck-editor__editable {
            //     height: 100%;
            //     overflow: hidden;
            // }
        }
    }
</style>
