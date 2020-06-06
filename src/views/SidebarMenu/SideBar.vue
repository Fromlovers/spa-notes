<template>
    <div class="sidebar">
        <header class="sidebar-header">
            <toogle-buttons />
        </header>

        <div class="sidebar-search">
            <a-input />
        </div>

        <div class="sidebar-items">
            <task />
        </div>
        <!-- <a-button /> -->
    </div>
</template>

<script>
    import ToogleButtons from './../Components/ToogleButtons';
    import Task from '../Components/Task';

    export default {
        components: { ToogleButtons, Task },
    };
</script>

<style lang="scss" scoped>
    .sidebar {
        display: flex;
        flex-direction: column;
        min-width: 300px;
        margin-right: 20px;
        background: #54494b;
        border: 2px solid rgba(185, 131, 137, 0.6);
        border-radius: 15px;

        &-header {
            display: flex;
            flex: 2;
        }
        &-search {
            flex: 1;
        }
    }

    @media (max-width: 799px) {
        .sidebar {
            margin-right: 0;
        }
    }
</style>
