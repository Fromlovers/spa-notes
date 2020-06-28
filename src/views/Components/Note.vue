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
                    <span class="description">{{ note.text }}</span>
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
        data() {
            return {};
        },
        methods: {
            onSelectNote() {
                this.$emit('click', this.note);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .wrap-note {
        margin-bottom: 1rem;
    }
    .note {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        .title-wrap {
            display: flex;
            justify-content: flex-start;
            padding: 8px;
            .title {
                font-weight: 600;
                color: #ffffff;
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
                    color: #ffffff;
                    opacity: 0.8;
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
                    color: #ffffff;
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
