const getTodo = () => {
    let todoList = [];
    const data = localStorage.getItem("todoList");
    if (data) {
        todoList = JSON.parse(data);
    }
    return todoList;
};

export default getTodo;