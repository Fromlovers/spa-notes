<template>
    <div class="content-container">
        <div class="empty-window">
            <h2>Hello it's the Notes manager</h2>
            <h3>You can watch for your time</h3>
        </div>
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
        border: 2px solid rgba(185, 131, 137, 0.6);
        border-radius: 17px;
        min-height: 550px;
        justify-content: center;
        background: 20% 30% / 100% no-repeat url('../../assets/logo_transparent.png') #54494b;
        .empty-window {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #ffffff;
        }
    }

    @media (max-width: 799px) {
        .content-container {
            display: none;
        }
    }
</style>
