<template>
    <div class="toogle-buttons">
        <div class="toogle-buttons__left">
            <button>Active</button>
        </div>
        <div class="toogle-buttons__right">
            <button>Inactive</button>
        </div>
    </div>
</template>

<script>
    export default {};
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
            button {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
