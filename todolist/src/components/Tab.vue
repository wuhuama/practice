<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
            <span
                    v-for="state in states"
                    :key="state"
                    :class="[state, filter === state ? 'actived' : '']"
                    @click="toggleFilter(state)"
            >
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted()">
            Clear Completed
        </span>
    </div>
</template>
<script>
export default {
    props: {
        filter: {
            type: String,
            required: true,
        },
        todos: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            states: ['all', 'active', 'completed']
        }
    },
    computed: {
        unFinishedTodoLength () {
            return this.todos.filter(todo => !todo.completed).length
        }
    },
    methods: {
        toggleFilter (state) {
            this.$emit('toggle', state);
        },
        clearAllCompleted () {
            this.$emit('clearAllCompleted');
        }
    }
}
</script>
<style>
.helper{
    font-size: 14px;
    font-weight: 100;
    padding: 5px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    font-smoothing: antialiased;
    /* background-color: #b3d4db; */
}
.left, .clear, .tabs {
    width: 150px;
    padding: 0 10px;
    box-sizing: border-box;
}
.left{
    text-align: left;
}
.clear{
    text-align: right;
    cursor: pointer;
}
.tabs{
    width: 200px;
    display: flex;
    justify-content: space-around;
}
.tabs span{
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175, 47, 47, 0)
}
.tabs span:active {
    border-radius: 5px;
    border-color: rgba(175, 47, 47, 0.4)
}
</style>
