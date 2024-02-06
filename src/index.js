// index.js
import { store } from './store';
import { increment, addPerson } from './actions';

console.log(store.getState());

store.dispatch(increment());
store.dispatch(addPerson({ name: 'Alice', age: 30 }));

console.log(store.getState());
