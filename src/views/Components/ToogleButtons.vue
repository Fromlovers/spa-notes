<template>
    <div class="toogle-buttons">
        <div class="toogle-buttons__left">
            <a-button label="Active" class="toogle-buttons__button" />
        </div>
        <div class="toogle-buttons__right">
            <a-button label="Inactive" class="toogle-buttons__button" />
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
        }
        &__button {
            border-radius: 0px !important;
            border-bottom: 1px solid #b98389 !important;
            background-color: #54494b !important;
            height: 3rem !important;
            font-weight: 600;
            font-size: 17px;
        }
        &__left {
            .toogle-buttons__button {
                border-right: 1px solid #b98389 !important;
            }
        }
    }
</style>
