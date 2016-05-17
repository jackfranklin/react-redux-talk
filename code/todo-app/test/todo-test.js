import  './setup';

import { shallow, mount } from 'enzyme';

import React from 'react';
import { Double } from 'doubler';
import { Todo } from '../app/todo';

import test from 'tape';

function shallowRenderTodo(todo) {
  return shallow(<Todo todo={todo} />);
}

test('Todo component', (t) => {
  t.test('rendering a not-done tweet', (t) => {
    const todo = { id: 1, name: 'Buy Milk', done: false };
    const result = shallowRenderTodo(todo);

    t.test('It renders the text of the todo', (t) => {
      t.plan(1);
      t.equal(result.find('p').text(), 'Buy Milk');
    });

    t.test('The todo does not have the done class', (t) => {
      t.plan(1);
      t.equal(result.hasClass('done-todo'), false);
    });
  });

  t.test('rendering a done tweet', (t) => {
    const todo = { id: 1, name: 'Buy Milk', done: true };
    const result = shallowRenderTodo(todo);

    t.test('The todo does have the done class', (t) => {
      t.plan(1);
      t.ok(result.hasClass('done-todo'));
    });
  });

  t.test('toggling a TODO calls the given prop', (t) => {
    t.plan(2);

    const doneCallback = Double.function();
    const todo = { id: 1, name: 'Buy Milk', done: false };

    const result = mount(
      <Todo todo={todo} dispatch={doneCallback} />
    );

    result.find('p').simulate('click');

    t.equal(doneCallback.callCount, 1);
    t.deepEqual(doneCallback.args[0][0], {
      type: 'TOGGLE_TODO',
      id: 1
    });
  });

  t.test('deleting a TODO calls the given prop', (t) => {
    t.plan(1);
    const deleteCallback = ({id}) => t.equal(id, 1);
    const todo = { id: 1, name: 'Buy Milk', done: false };

    const result = mount(
      <Todo todo={todo} dispatch={deleteCallback} />
    );

    result.find('a').simulate('click');
  });
});
