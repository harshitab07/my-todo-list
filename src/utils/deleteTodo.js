const deleteTodo = (payload) => {
    let data = localStorage.getItem("todoList");
    data = JSON.parse(data);

    const indexOf = data.indexOf((todo) => { return todo.id === payload.id});
    data.splice(indexOf, 1);

    localStorage.setItem("todoList", JSON.stringify(data));
    return data;
}

export default deleteTodo;