<template>
    <div class="wrap-note">
        <div class="note" @click="onSelectNote">
            <div class="title-wrap">
                <label class="title">{{ note.name }}</label>
            </div>
            <div class="information">
                <div class="date-wrap">
                    <span class="date">{{ note.date }}</span>
                </div>
                <div class="description-wrap">
                    <span class="description">{{ note.text | decription }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            note: Object,
        },
        methods: {
            onSelectNote() {
                this.$emit('click', this.note);
            },
        },
        filters: {
            decription(text) {
                if (!text) return '';
                let newText = text.replace(/<[^>]*>?/g, '');
                newText = newText.replace(/&nbsp;/g, ' ');
                return newText;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .note {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        border-top: 1px solid #e6eaed;
        padding: 10px 0;
        &:hover {
            background-color: #edeef0;
        }
        .title-wrap {
            display: flex;
            justify-content: flex-start;
            padding: 8px;
            .title {
                font-weight: 500;
                color: #000000;
                font-size: 17px;
            }
        }
        .information {
            display: flex;
            justify-content: flex-start;
            padding: 8px;
            .date-wrap {
                display: flex;
                flex-direction: column;
                margin-right: 10px;
                justify-content: flex-end;
                .date {
                    color: #000000;
                    opacity: 0.8;
                    white-space: nowrap;
                }
            }
            .description-wrap {
                display: flex;
                flex-direction: column;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                justify-content: flex-end;
                .description {
                    color: #000000;
                    opacity: 0.8;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    font-size: 14px;
                }
            }
        }
    }
</style>
