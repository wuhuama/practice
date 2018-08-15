<template>
    <div class="todoapp">
        <input type="text"
                class="add-input"
                autofocus
                placeholder="你准备干什么呢?"
                @keyup.enter="addTodo"
        >
        <items :todo="todo" 
                v-for="todo in filteredTodos" 
                :key="todo.id" 
                @del="deleteTodo"
        >
        </items>
        <tab :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAllCompleted="clearAllCompleted"></tab>
    </div>

</template>

<script>
import Items from "./Items"
import Tab from "./Tab"

let id = 0

export default {
    data () {
        return {
            todos:[],
            filter:'all'
        }
    },
    computed: {
        filteredTodos () {
            if (this.filter === 'all') {
                return this.todos
            }
            const completed = this.filter === 'completed'
            console.log(completed)
            return this.todos.filter(todo => todo.completed === completed)
        }
    },
    // 组件
    components: {
        Items,
        Tab,
    },
    methods: {
        addTodo (e) {
            if(e.target.value.trim()){
                this.todos.unshift({
                    id: id++,
                    content: e.target.value.trim(),
                    completed: false
                })
                e.target.value = ''
            }else {
                alert('请输入内容哦, 小主~')
            }
        },
        deleteTodo ($event) {
            console.log('dfsdf')
            console.log(this.todos.findIndex(todo => todo.id === $event))
            this.todos.splice(this.todos.findIndex(todo => todo.id === $event), 1)
        },
        toggleFilter (state) {
            this.filter = state
        },
        clearAllCompleted () {
            this.todos = this.todos.filter( todo => todo.completed === false)
        }
    }
}
</script>

<style scoped>
.todoapp{
    width: 700px;
    box-shadow: 0 0 5px #666;
    margin: 0 auto;
}
.add-input{
    position: relative;
    margin: 0;
    width: 100%;
    padding: 10px 10px 10px 16px;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    box-sizing: border-box;
    font-smoothing: antialiased;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>

