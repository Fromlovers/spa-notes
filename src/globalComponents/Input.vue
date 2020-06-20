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
    $color-bg: #e0e5ec;
    $color-shadow: #a3b1c6;
    $color-white: #ffffff;

    .a_input {
        background-color: $color-bg;
        border: 0;
        outline: 0;
        padding: 5px;
        width: 100%;
        box-sizing: border-box;
        padding: 5px 25px;
        letter-spacing: 1.5px;
    }
</style>
