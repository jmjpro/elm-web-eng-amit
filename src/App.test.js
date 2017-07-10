import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import randomstring from 'randomstring';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('displays input fields for name and region', () => {
  const rendered = shallow(<App />);
  expect(rendered.find('input').length).toEqual(2);
});

it('adds name and region to table', () => {
  const rendered = shallow(<App />);
  const expectedName = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
  });
  const expectedRegion = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
  })
  rendered.find('input[name="name"]').simulate('input', { target: { value: expectedName } });
  rendered.find('input[name="region"]').simulate('input', { target: { value: expectedRegion } });
  rendered.find('input[name="button"]').simulate('click');
  expect(rendered.find('tr:last-child td:first-child').text).toEqual(expectedName);
  expect(rendered.find('tr:last-child td:last-child').text).toEqual(expectedRegion);
});