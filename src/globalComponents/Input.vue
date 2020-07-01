<template>
    <input
        :value="value"
        :class="['a_input', className]"
        :disabled="disabled"
        :placeholder="placeholder"
        v-on="inputListeners"
    />
</template>

<script>
    export default {
        name: 'AInput',
        props: {
            nativeType: {
                type: String,
                default: 'button',
            },
            className: {
                type: String,
                default: 'button',
            },
            placeholder: {
                type: String,
                default: '',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            value: [Number, String],
        },
        computed: {
            inputListeners: function() {
                return {
                    ...this.$listeners,
                    input: event => {
                        this.$emit('input', event.target.value);
                    },
                };
            },
        },
    };
</script>

<style lang="scss" scoped>
    .a_input {
        background-color: #ffffff;
        border: 0;
        outline: 0;
        padding: 5px;
        width: 100%;
        box-sizing: border-box;
        padding: 5px 25px;
        letter-spacing: 1.5px;
        &:focus {
            &::placeholder {
                font-weight: 300;
                opacity: 0.6;
            }
        }
        &::placeholder {
            font-weight: 500;
            opacity: 0.8;
            color: #000000;
        }
    }
</style>
