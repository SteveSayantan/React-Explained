- What are some important features of ReactJS?

  Some of React's important features are:

  - Virtual DOM: It is an in-memory, light-weight representation of actual browser DOM.

  - View-oriented: It works in the view layer of an application. It provides an declarative way to build UI components.

  - Unidirectional flow: Data flows from parent to child components. It is easier to manage, understand and debug.

  - Component-based: UI is broken down into modular and reusable components.

- Reconcilliation: React's way of diffing the virtual DOM tree with the updated virtual DOM to determine the most efficient way to update the real DOM.

- What is React Fiber?
  Fiber is a rewrite of one of React’s core algorithms: the reconciler. Before Fiber, React would reconcile and render elements all in one shot which used to block the main thread. 
  
  With Fiber, however, the process of reconciliation and rendering is split up into two separate phases, thereby improving performance. For more, checkout [this](https://sunnychopper.medium.com/what-is-react-fiber-and-how-it-helps-you-build-a-high-performing-react-applications-57bceb706ff3) .

- Why are hooks introduced?
  Hooks allow the state logic to be used outside the component. Previously, we had to use class-based component for using state, but with the usage of hooks, we can do that in functional components too.

- What is Synthetic Event in React?
  
