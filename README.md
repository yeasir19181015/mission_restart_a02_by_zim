# CS — Ticket System

A smart and efficient customer support dashboard built with React.js. This platform helps support teams track, manage, and resolve customer tickets in real time — all in one place.

---

## Features

- View all customer tickets in a clean card layout
- Click a ticket to add it to the Task Status section
- Mark tasks as Complete to move them to the Resolved list
- Live counters for In-Progress and Resolved tickets in the Banner
- Data persists on page reload using localStorage
- Toast notifications using React-Toastify
- Fully responsive for mobile and desktop

---

## Technologies Used

- React.js
- Tailwind CSS
- DaisyUI
- React-Toastify
- React Icons
- Font Awesome
- Vite

---


## React Concepts — Q&A

### 1. What is JSX, and why is it used?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript files. JSX makes it easier to visualize and build UI components. Under the hood, JSX is converted to regular JavaScript by tools like Babel.

**Example:**
```jsx
const element = <h1>Hello, World!</h1>;
```

Without JSX, we would have to write:
```js
const element = React.createElement('h1', null, 'Hello, World!');
```

JSX makes the code cleaner, more readable, and easier to maintain.

---

### 2. What is the difference between State and Props?

| | State | Props |
|---|---|---|
| Definition | Data managed inside a component | Data passed from parent to child |
| Mutable | Yes, can be changed using setState or useState | No, read-only |
| Ownership | Belongs to the component itself | Belongs to the parent component |
| Usage | Used for dynamic, changing data | Used to pass data between components |

**Example of State:**
```jsx
const [count, setCount] = useState(0);
```

**Example of Props:**
```jsx
<Banner inProgressCount={5} resolvedCount={3} />
```

---

### 3. What is the useState hook, and how does it work?

`useState` is a built-in React hook that allows functional components to have and manage their own state.

It returns two values — the current state value and a function to update it.

**Syntax:**
```jsx
const [state, setState] = useState(initialValue);
```

**Example from this project:**
```jsx
const [tickets, setTickets] = useState(ticketsData);
```

When `setTickets` is called with a new value, React re-renders the component with the updated state automatically.

---

### 4. How can you share state between components in React?

In React, state is shared between components using a technique called **"Lifting State Up"**. This means moving the shared state to the closest common parent component, and passing it down to child components via props.

**Example from this project:**

All state (`tickets`, `taskStatus`, `resolvedTasks`) is managed in `App.jsx` and passed down to `Banner`, `TicketSection`, `TaskStatus`, and `TicketCard` as props.
```jsx
<Banner inProgressCount={taskStatus.length} resolvedCount={resolvedTasks.length} />
<TicketSection tickets={tickets} taskStatus={taskStatus} onAddToTask={handleAddToTask} />
```

This way, when a ticket is clicked in `TicketCard`, the state updates in `App.jsx` and the change reflects in `Banner` automatically.

---

### 5. How is event handling done in React?

In React, events are handled using camelCase event attributes directly on JSX elements. Instead of using `addEventListener`, we pass a function directly as the event handler.

**Example from this project:**
```jsx
<div onClick={handleClick}>
  Click me
</div>
```
```jsx
<button onClick={() => handleComplete(ticket)}>
  Complete
</button>
```

React wraps native browser events in a **SyntheticEvent** object, which ensures consistent behavior across all browsers.

---
<<<<<<< HEAD

=======
>>>>>>> 51efc44a0b28755d09157a1b9c8d7fbebab7b88f
