<template>
    <button :class="['a_button', className]" @click="$emit('click')">
        <span v-if="label">{{ label }}</span>
    </button>
</template>

<script>
    export default {
        name: 'AButton',
        props: {
            label: String,
            className: {
                type: String,
                default: 'button',
            },
        },
    };
</script>

<style lang="scss" scoped>
    .a_button {
        border: 0;
        outline: 0;
        border-radius: 5px;
        padding: 5px;
        min-width: 10px;
        font-weight: bold;
        cursor: pointer;
        color: #ffffff;
        &:hover {
            opacity: 0.9;
        }
    }
</style>
