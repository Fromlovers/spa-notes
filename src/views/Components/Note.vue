<template>
    <div class="note">
        <div class="title-wrap">
            <label class="title">{{ testNote.name }}</label>
        </div>
        <div class="information">
            <div class="date-wrap">
                <span class="date">{{ testNote.date }}</span>
            </div>
            <div class="description-wrap">
                <span class="description">{{ testNote.text }}</span>
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
            return {
                testNote: {
                    name: 'test note',
                    text: 'The text-overflow CSS property sets how hidden overflow content is signaled to users.',
                    date: '22.07.2020',
                },
            };
        },
    };
</script>

<style lang="scss" scoped>
    .note {
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
