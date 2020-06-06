<template>
    <div>
        <div v-if="isAddButton" ref="buttonCard" class="add_card_item" @click="create">
            <font-awesome-icon icon="plus" class="add_card_item__icon" />
            <h3 class="add_card_item__label">
                Add note
            </h3>
        </div>
        <div v-else class="cards">
            <div class="card_item" @click="open">
                <div class="card_item__control">
                    <span class="card_item__control__label"> {{ label }}</span>
                    <span class="card_item__control__delete" @click="remove">
                        <font-awesome-icon icon="trash-alt" class="icon-awesome" />
                    </span>
                </div>

                <div class="card_item__content">
                    <div v-for="(task, index) in tasks" :key="index" class="card_item__content__item">
                        <input v-if="index <= 6" v-model="task.isComplete" type="checkbox" disabled />
                        <span v-if="index <= 6" class="card_item__content__item__text">{{ task.content }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tasks: Array,
            image: Object,
            label: String,
            isAddButton: {
                type: Boolean,
                default: false,
            },
            buttonName: {
                type: String,
                default: 'Open',
            },
            description: {
                type: String,
                default: 'Nothing',
            },
            value: {
                type: String,
                default: 'Nothing',
            },
        },
        methods: {
            open() {
                this.$emit('openCard');
            },
            create() {
                this.$emit('createCard');
            },
            remove() {
                this.$emit('deleteCard');
            },
        },
    };
</script>

<style lang="scss" scoped>
    .cards {
        display: flex;
    }
    .add_card_item {
        @extend .card_item;
        justify-content: center;
        align-items: center;

        &__icon {
            color: #7d8a9a;
            height: 50%;
            width: 50%;
        }
        &__label {
            color: #7d8a9a;
        }
        &:active {
            box-shadow: inset 5px 5px 2px #a3b1c6, inset -5px -5px 2px #ffffff;
        }
    }
    .card_item {
        &:hover {
            opacity: 0.9;
            box-shadow: -9px -9px 18px #ffffff, 9px 9px 18px #a3b1c6;
        }
        cursor: pointer;
        width: 200px;
        height: 250px;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        border-radius: 11px;
        background: #e0e5ec;
        box-shadow: 5px 5px 15px #ffffff, -5px -5px 15px #a3b1c6;

        &__content {
            color: #7d8a9a;
            padding: 10px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            &__item {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                width: 100%;
                padding: 3px;
                &__text {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        &__control {
            padding: 5px 5px;
            display: flex;
            align-items: center;

            &__label {
                flex: auto;
                text-overflow: ellipsis;
                padding: 5px;
            }
            &__delete {
                display: flex;
                justify-content: center;
                height: 16px;
                width: 16px;
                padding: 5px;
                margin: 3px;
                background: #e0e5ec;
                box-shadow: -1px -1px 6px #ffffff, 1px 1px 6px #a3b1c6;
                border-radius: 5px;
                &__icon {
                    height: 16px;
                    width: 11px;
                }
            }
        }
    }
</style>
