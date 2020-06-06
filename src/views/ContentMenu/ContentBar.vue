<template>
    <div class="content-container">
        text example
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .content-container {
        display: flex;
        flex-direction: column;
        flex: 3;
        background: #54494b;
        border: 2px solid rgba(185, 131, 137, 0.6);
        border-radius: 15px;
        padding: 5px;
    }

    @media (max-width: 799px) {
        .content-container {
            display: none;
        }
    }
</style>
