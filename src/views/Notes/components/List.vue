<template>
    <div class="content-list">
        <Card
            v-for="(note, index) in notes"
            :key="index"
            :isAddButton="index < 1"
            :label="note.name"
            :description="note.description"
            :tasks="tasks"
            @openCard="openCard(index)"
            @deleteCard="deleteCard(index)"
            @createCard="createCard"
        />
    </div>
</template>

<script>
    import Card from '../../../components/Card';

    export default {
        components: { Card },
        props: {
            notes: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                tasks: [
                    { content: 'task1', isComplete: true },
                    { content: 'task22222222222222222222222222', isComplete: true },
                    { content: 'task3', isComplete: false },
                    { content: 'task4', isComplete: true },
                    { content: 'task4', isComplete: true },
                    { content: 'task4', isComplete: true },
                    { content: 'task4', isComplete: true },
                    { content: 'task4', isComplete: true },
                    { content: 'task4', isComplete: true },
                    { content: 'task4', isComplete: true },
                    { content: 'task5', isComplete: false },
                ],
            };
        },
        methods: {
            openCard(index) {
                this.$emit('openNote', index);
            },
            deleteCard(index) {
                this.$emit('deleteNote', index);
            },
            createCard() {
                this.$router.push({ name: 'create_task' });
            },
        },
    };
</script>

<style lang="scss">
    .content-list {
        display: flex;
        position: relative;
        flex: {
            direction: row;
            wrap: wrap;
        }
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 15px;
    }
</style>
