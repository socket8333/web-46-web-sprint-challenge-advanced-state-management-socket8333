# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Simeple set up, can connect to any state, can connect to multiple contexts from various parts of an App


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - create the dispact for the reducer
Reducers - take in a action type and payload and change the state
Store - singple place for App state is stored. The single source of truth because its the only palce where state is stored

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that allows you to call the action creators that return a function. They take the dispatch as an argument which is used to make the actual change to state/store after an asynch thing is (or can be ) done.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I like Redux because of the architecture. It's much easier to track state and discretize actions and reducers. Seperation of concerns.