import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import randomstring from 'randomstring';
import * as firebase from 'firebase';
import actions from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('displays input fields for name and region', () => {
  const rendered = shallow(<App />);
  expect(rendered.find('input').length).toEqual(2);
});

it('adds name and region to table', () => {
  const expectedName = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
  });
  const expectedRegion = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
  })
  const store = {
    locations: {
      'loc1': {
        name: 'China',
        region: 'Asia'
      }
    }
  }
  console.log(actions);
  console.log(store);
  const rendered = mount(<App
    {...actions}
    {...store}
  />);
  rendered.find('input[name="name"]').simulate('change', { target: { value: expectedName } });
  rendered.find('input[name="region"]').simulate('change', { target: { value: expectedRegion } });
  rendered.find('#add_location').simulate('click');
  const lastRowCells = rendered.find('tr').last().find('td');
  expect(lastRowCells.first().text()).toEqual(expectedName);
  expect(lastRowCells.last().text()).toEqual(expectedRegion);
});
