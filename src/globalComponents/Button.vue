<template>
    <button :class="['a_button', className]" :type="nativeType" @click="$emit('click')">
        <span v-if="label">{{ label }}</span>
    </button>
</template>

<script>
    export default {
        name: 'AButton',
        props: {
            label: String,
            nativeType: {
                type: String,
                default: 'button',
            },
            className: {
                type: String,
                default: 'button',
            },
        },
    };
</script>

<style lang="scss" scoped>
    $color-bg: #e0e5ec;
    $color-shadow: #a3b1c6;
    $color-white: #ffffff;

    .a_button {
        background-color: $color-bg;
        text-shadow: 1px 1px 0 $color-white;
        border: 0;
        outline: 0;
        border-radius: 10px;
        padding: 5px;
        background: #e0e5ec;
        width: 60px;
        color: #61677c;
        font-weight: bold;
        box-shadow: -2px -2px 10px $color-white, 2px 2px 10px $color-shadow;
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            box-shadow: -1px -1px 4px $color-white, 1px 1px 4px $color-shadow;
        }

        &:active {
            box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;
        }
    }
</style>
