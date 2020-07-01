<template>
    <div class="content-container">
        <div v-if="haveNote" class="wrap-show">
            <div class="wrap-show__task"></div>
            <div class="wrap-show__actions">
                <a-button label="Edit" class="wrap-show__edit" />
                <a-button label="Delete" class="wrap-show__delete" />
            </div>
        </div>
        <div v-else class="empty-window">
            <h2>Hello it's the Notes manager</h2>
            <h3>You can watch for your time</h3>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            note: {},
        },
        data() {
            return {};
        },
        computed: {
            haveNote() {
                return Object.keys(this.note).length;
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
            &__actions {
                display: flex;
                justify-content: flex-end;
                padding: 25px;

                &__edit {
                    padding: 15px !important;
                }
            }
        }
    }

    @media (max-width: 799px) {
        .content-container {
            display: none;
        }
    }
</style>
