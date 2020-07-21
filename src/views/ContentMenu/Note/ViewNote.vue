<template>
    <div class="note" v-html="note.text"></div>
</template>

<script>
    export default {
        props: {
            note: {
                requred: true,
                type: Object,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .note {
        padding: 25px;
        position: absolute;
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        overflow: auto;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
        }
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }
        scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1);
        scrollbar-width: thin;
    }
</style>
