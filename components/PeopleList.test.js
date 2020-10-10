import React from 'react';
import { mount } from 'enzyme';
import PeopleList from './PeopleList';
import People from './People';

const people = [
  {"name": "Luke Skywalker0", "eye_color": "blue"},
  {"name": "Luke Skywalker1", "eye_color": "blue"},
  {"name": "Luke Skywalker2", "eye_color": "blue"},
  {"name": "Luke Skywalker3", "eye_color": "blue"},
  {"name": "Luke Skywalker4", "eye_color": "blue"},
  {"name": "Luke Skywalker5", "eye_color": "blue"},
  {"name": "Luke Skywalker6", "eye_color": "blue"},
  {"name": "Luke Skywalker7", "eye_color": "blue"},
  {"name": "Luke Skywalker8", "eye_color": "blue"},
  {"name": "Luke Skywalker9", "eye_color": "blue"}
]

it('Deve renderizar 10 itens People', () => {
  const wrapper = mount(<PeopleList people={people} />);
  expect(wrapper.find(People).length).toEqual(people.length);
});