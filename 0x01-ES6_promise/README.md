# Promises

Promises are a powerful feature in JavaScript that allow you to handle asynchronous operations in a more organized and readable way. They provide a way to deal with the result or failure of an asynchronous operation once it completes.

## How Promises Work

A promise represents the eventual completion (or failure) of an asynchronous operation and provides a way to handle its result. It has three states:

- **Pending**: The initial state, representing that the operation is still in progress.
- **Fulfilled**: The state when the operation is successfully completed.
- **Rejected**: The state when the operation fails.

## Creating a Promise

To create a promise, you can use the `Promise` constructor. It takes a function as an argument, which is called the executor function. The executor function has two parameters: `resolve` and `reject`. You can call `resolve` to fulfill the promise or `reject` to reject it.
