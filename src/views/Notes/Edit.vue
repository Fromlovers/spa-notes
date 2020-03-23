<template>
    <section>
        <div class="header">
            <label>
                <h3>Create Note</h3>
            </label>
        </div>

        <div class="container">
            <div class="page_layout">
                <div class="page_layout__item_back">
                    <button class="ad_button" type="submit" @click="goBack">Back</button>
                </div>

                <div class="page_layout__item">
                    <div class="page_layout__item__name">
                        <span>Note name</span>
                    </div>

                    <div class="page_layout__item__action">
                        <input class="ad_input" placeholder="Note name"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {};
        },
        beforeCreate() {
            console.log('edit now');
        },
        methods: {
            goBack() {
                return this.$router.go(-1);
            }
        }
    };
</script>

<style lang="scss">
    .header {
        padding-bottom: 1rem;
        margin: 0 15px;
        height: 20px;
        color: #61677c;
    }
    .page_layout {
        &__item_back {
            @extend .page_layout__item;
            justify-content: flex-end !important;
        }

        &__item {
            display: flex;
            padding: 15px;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            &__name,
            &__action {
                display: flex;
                flex-direction: column;
                padding-bottom: 1rem;
            }
            &__name {
                flex: 0 1 100px;
                color: #61677c;
                font-weight: bold;
            }
            &__action {
                flex: 1;
            }
        }

        border-radius: 10px;
        background: #e0e5ec;
        box-shadow: 5px 5px 15px #ffffff, -5px -5px 15px #a3b1c6;
    }
    .item {
        padding: 5px;
        border-radius: 5px;
        background: #e0e5ec;
        box-shadow: -5px -5px 15px #ffffff, 5px 5px 15px #a3b1c6;
    }
</style>
