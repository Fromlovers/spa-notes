<template>
    <input :class="['a_input', className]" @change="onchange" :disabled="disabled" />
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
        },
        methods: {
            onchange(event) {
                this.$emit('onchange', event);
            },
            blur(event) {
                this.$emit('blur', event);
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
        text-shadow: 1px 1px 0 $color-white;
        border: 0;
        outline: 0;
        border-radius: 10px;
        padding: 5px;
        width: 100%;
        box-shadow: inset 2px 2px 5px $color-shadow, inset -2px -2px 5px $color-white;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
        padding: 5px 25px !important;
        &:focus {
            box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;
        }
    }
</style>
