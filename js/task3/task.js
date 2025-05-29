async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
}

async function solve() {
  try {
    const [users, todos] = await Promise.all([fetchUsers(), fetchTodos()]);
    const todosByUser = new Map();

    todos.forEach((todo) => {
      if (!todosByUser.has(todo.userId)) {
        todosByUser.set(todo.userId, []);
      }
      todosByUser.get(todo.userId).push(todo);
    });

    users.forEach((user) => {
      console.log(`User ${user.id}: ${user.name}`);
      console.log("Todos:");

      const userTodos = todosByUser.get(user.id) || [];
      if (userTodos.length === 0) {
        console.log("  No todos found");
      } else {
        userTodos.forEach((todo, index) => {
          console.log(`${index + 1}. Title: ${todo.title}`);
        });
      }
      console.log("-------------------");
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

solve();
