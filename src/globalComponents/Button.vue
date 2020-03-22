<template>
    <component :is="computedTag" :class="className" v-bind="$attrs" v-on="$listeners" :type="nativeType">
        <span v-if="label">{{ label }}</span>
    </component>
</template>

<script>
    export default {
        name: 'AButton',
        props: {
            tag: {
                type: String,
                default: 'button',
            },
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
        computed: {
            computedTag() {
                if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
                    return 'button';
                }

                return this.tag;
            },
        },
    };
</script>

<style lang="scss"></style>
