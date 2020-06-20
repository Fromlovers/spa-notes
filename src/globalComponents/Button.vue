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
    .a_button {
        border: 0;
        outline: 0;
        border-radius: 5px;
        padding: 5px;
        background: #e0e5ec;
        min-width: 10px;
        color: #54494b;
        font-weight: bold;
        cursor: pointer;
        color: #ffffff;
    }
</style>
