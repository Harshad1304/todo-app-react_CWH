# Todo List App
![Todo App Screenshot](src/assets/screenshots/Screenshot%20from%202025-01-20%2006-27-07.png)
A simple and interactive Todo List application built with React, where users can add, edit, delete, and mark tasks as completed.

## Features

- **Add Todos**: Add new tasks to the todo list.
- **Edit Todos**: Edit existing tasks.
- **Delete Todos**: Remove tasks from the todo list.
- **Mark Todos as Completed**: Check off completed tasks, which will cross out the text.
- **Cancel Edit**: Cancel ongoing edits on a todo.
- **Responsive Design**: Works across different screen sizes with a clean, user-friendly interface.

## Tech Stack

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the app.
- **useState, useRef**: For managing state and references in React.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harshad1304/todo-app-react_CWH.git
   cd todo-app
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the app:
    ```bash
    npm run dev
    ```

# How It Works

### State Management
- **todo**: Holds the input value for the new task.
- **todos** : An array of task objects, each containing todo (task description), isCompleted (status of the task), and todoId (unique identifier).
- **editTodo and editTodoId** : Manage the state for editing tasks.
- **Event Handlers** : 
- **Add Todo** : Adds a new task to the list.
- **Edit Todo** : Allows you to update a specific task.
- **Delete Todo** : Deletes a task from the list.
- **Complete Todo** : Marks a task as completed.
- **Cancel Edit** : Cancels the current edit.

### Event Handlers:
- **Add Todo**: Adds a new task to the list.
- **Edit Todo**: Allows you to update a specific task.
- **Delete Todo**: Deletes a task from the list.
- **Complete Todo**: Marks a task as completed.
- **Cancel Edit**: Cancels the current edit.

# Usage
- **Adding a Todo**: Type a task in the input field and click the Add button to add it to the list.
- **Editing a Todo**: Click the Edit button next to a task to modify it. You can save the changes by clicking Update.
- **Completing a Todo**: Click the checkbox next to a task to mark it as completed. Completed tasks are visually struck through.
- **Deleting a Todo**: Click the Delete button to remove a task from the list.

## License

##### This project is open-source and available under the MIT License.