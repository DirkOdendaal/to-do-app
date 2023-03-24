# Todo List Application

This is a simple Todo List application built using React. It allows you to add, edit and delete todos, as well as persist them using local storage.

## Installation

Clone the repository and run the following command in your terminal to install the necessary dependencies:

```
npm install
```

## Usage

To start the application, run the following command in your terminal:

```
npm start
```

## Features

- Add new todos by typing in the input field and clicking the "Add" button.
- Edit existing todos by clicking on the todo text and making changes.
- Delete todos by clicking the delete button next to the todo text.
- The application persist todos in local storage, so your todos are still there if you refresh or close the browser.

## Technologies

- React
- HTML/CSS

## Code Structure

This application has two components: `Todo` and `TodoItem`.

`Todo` is the main component that renders the entire Todo List. It uses the `useState` and `useEffect` hooks to manage the state of the todos and to persist them in local storage.

`TodoItem` is a child component of `Todo` that renders each individual todo. It receives props from `Todo` such as the todo object, a function to delete the todo, and a function to edit the todo.
