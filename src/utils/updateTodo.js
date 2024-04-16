const updateTodo = (payload) => {
    let data = localStorage.getItem("todoList");
    data = JSON.parse(data);

    const indexOf = data.findIndex((todo) => todo.id === payload.id);
    data[indexOf].complete = true;

    localStorage.setItem("todoList", JSON.stringify(data));
    return data;
}

export default updateTodo;