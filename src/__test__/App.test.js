import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/ContentApp/Search/Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
  ReactDOM.unmountComponentAtNode(div);
});
