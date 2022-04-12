import { render, screen } from '@testing-library/react';
import React from "react";
import ReactDom from 'react-dom'
import MainApp from './App';

// it('render without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<MainApp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test('renders learn react link', () => {
  render(<MainApp />);
  const linkElement = screen.getByText(/profile/);
  expect(linkElement).toBeInTheDocument();
});
