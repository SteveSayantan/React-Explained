# Redux Toolkit

It is a better form of good old redux. All the useful packages are a part of this, unlike traditional redux.

To add redux toolkit to our project, we need to install two packages, namely `@reduxjs/toolkit` and `react-redux`

```
npm install @reduxjs/tookit 
npm install react-redux

```

### @reduxjs/toolkit

It consists of few libraries
- redux (core library, state management)
- immer (allows to mutate state)
- redux-thunk (handles async actions)
- reselect (simplifies reducer functions)

#### Extras

- redux devtools
- combine reducers

### react-redux

connects our app to redux

### Context vs State Managers

Context can manage state but it is not a state manager. A state manager is a library specifically built to manage state. It is highly opinionated on how to create,mutate (both synchronously and asynchronously) ,request state. 

In case of state change, a State Manager makes sure only the the components that actually reference that particular piece of the state get updated, i.e. we get more fine grained updates and less re-renders in case of State Manager.  

All of that can be done in State Managers out-of-the-box unlike in Context. In Context, if there is a change, all the components using that context will re-render. To avoid that, we need might use 'use-context-selector' (another library) and useCallback hook.

For more info, check out [this](https://youtu.be/MpdFj8MEuJA?si=YKaDFbjWD1CrOb2R)
