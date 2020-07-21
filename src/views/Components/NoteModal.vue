<template>
    <div v-if="isShow" class="note-modal">
        <a-input ref="input" v-model="name" placeholder="Write some name of note" class="note-modal-input" />
    </div>
</template>

<script>
    export default {
        props: {
            isShow: {
                required: true,
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                name: '',
            };
        },
        methods: {
            closeModal(ev) {
                if (this.$el.contains(ev.target)) {
                    return;
                }

                this.$emit('onClose', ev.target);
            },
        },
        watch: {
            name(val) {
                this.$emit('changeName', val);
            },
        },
        created() {
            window.addEventListener('click', this.closeModal);
        },
        mounted() {
            this.$refs.input.$el.focus();
        },
    };
</script>

<style lang="scss" scoped>
    .note-modal {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        &-input {
            border-radius: 5px;
            width: 80%;
            background-color: #edeef0 !important;
        }
    }
</style>
