<template>
    <div class="toogle-buttons" @click="changeStatus">
        <div ref="left" class="toogle-buttons__left active">
            <a-button label="Active" class="toogle-buttons__button" />
        </div>
        <div ref="right" class="toogle-buttons__right">
            <a-button label="Inactive" class="toogle-buttons__button" />
        </div>
    </div>
</template>

<script>
    import { findParentElement } from '../../helpers/common';

    export default {
        data() {
            return {
                isActive: true,
            };
        },
        methods: {
            changeStatus(el) {
                let preElement = this.$refs.right;
                let element = findParentElement(el.target, 'toogle-buttons__left');
                if (!element) {
                    preElement = this.$refs.left;
                    element = findParentElement(el.target, 'toogle-buttons__right');
                }

                if (element.classList.contains('active')) {
                    return;
                }

                element.classList.toggle('active');
                preElement.classList.toggle('active');
            },
        },
    };
</script>

<style lang="scss" scoped>
    .toogle-buttons {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        overflow: hidden;
        &__left,
        &__right {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        &__left.active,
        &__right.active {
            button {
                box-shadow: inset 0 0 0 25px #5a91d0;
            }
        }
        &__button {
            border-radius: 0px !important;
            border-bottom: 1px solid #5181b8 !important;
            background-color: #4a76a8 !important;
            height: 3rem !important;
            font-weight: 600;
            font-size: 17px;
            &:hover {
                opacity: 0.9;
            }
        }
        &__left {
            .toogle-buttons__button {
                border-right: 1px solid #5181b8 !important;
            }
        }
    }
</style>
