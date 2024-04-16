const addTodo = (payload) => {
    let todoList = [];
    const data = localStorage.getItem("todoList");
    if (data) {
        todoList = JSON.parse(data);
        todoList = [...todoList, payload];
    } else {
        todoList.push(payload);
    }

    localStorage.setItem("todoList", JSON.stringify(todoList));

    return todoList;
};

export default addTodo;