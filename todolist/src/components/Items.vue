<template>
    <div :class="['todo-item', todo.completed ? 'completed' : '']">
        <input type="checkbox" class="toogle" v-model="todo.completed">
        <label>{{todo.content}}</label>
        <button type="button" class="destroy" @click="deleteTodo"></button>
    </div>
</template>
<script>
export default {
    props: {
        todo:{
            type:Object,
            requre: true
        }
    },
    data () {
        return {

        }
    },
    methods: {
        deleteTodo () {
            this.$emit('del', this.todo.id)
        }
    }
}
</script>
<style scoped>
.todo-item{
    position: relative;
    background-color: #ffffff;
    font-size: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}
.todo-item:hover .destroy:after{
    content: 'X'
}
label{
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    word-break: break-all;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}
.completed label{
    color: #d9d9d9;
    text-decoration: line-through
}
.toogle {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: none;
    appearance: none;
    outline: none;
    padding-left: 5px;
    cursor: pointer;
}
.toogle:after{
    content: url('../assets/images/round.svg');
}
.toogle:checked:after{
    content: url('../assets/images/done.svg')
}
.destroy{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: auto 0;
    font-size: 24px;
    color: #cc9a9a;
    margin-bottom: 11px;
    background-color: transparent;
    border: 0;
    outline: none;
    transition: color 0.2s ease-out;
    cursor: pointer;
    appearance: none
}
</style>

