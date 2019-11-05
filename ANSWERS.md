- [x] Why would you use class component over function components (removing hooks from the question)?
        To gain access to lifecycle, internal state, classes have more powerful features and can be more resource efficient especially with lifecycle methods
- [x] Name three lifecycle methods and their purposes.
        1. render(): renders component to the UI. Required method for class components
        2. componentDidMount(): Happens at the "birth"/initial mounting of the component. Useful but most things should be assigned in the constructor rather than componentDidMount
        3. componentWillUnmount(): just before the component is unmounted. Especially useful for removing listeners and cleaning up anything that may cause memory leaks.
- [x] What is the purpose of a custom hook?
        To reuse stateful logic, especially useful when chaining hooks
- [x] Why is it important to test our apps?
        Important to fix bugs and issues automatically without changing code. Able to automate features, user inputs, etc is useful to speed up testing.