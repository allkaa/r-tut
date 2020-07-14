import React, { useState } from 'react';

// React function component.
function Example() {
  // Destructing assignment syntax sample:
  const [a, b] = f(); // using destructuring assignment syntax to parse an array returned from a function.
  console.log('a=',a,'b=',b);
  // Declare a new state variable, which we'll call "count" using destructuring assignment syntax
  // Two constants will be created count as number and setCount(args) as function.
  const [count, setCount] = useState(0); // initial count state set as zero.
  console.log('count:');
  console.log(count);
  console.log('typeof(count):');
  console.log(typeof(count));
  console.log('setCount:');
  console.log(setCount);
  console.log('useState:');
  console.log(useState);
  const [age, setAge] = useState(67);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState(['text', ' ', 'Learn Hooks']);
  //const [todos, setTodos] = useState([{ key_learn: 'Learn Hooks' }]); // does not work - React child can not be object with key(s).

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You age is {age}</p>
      <p>You fruit is {fruit}</p>
      <p>You todos is {todos}</p>
      <button onClick={
        () => {
        setCount(count + 1);
        setAge(age - 1);
        setFruit(fruit + '1');
        setTodos([todos[0] + 0, ' - ',  todos[2]+2 ]);
        }
      }>
        Click me
      </button>
    </div>
  );
}

export default Example;

function f() {
  return [1, 'one'];
}