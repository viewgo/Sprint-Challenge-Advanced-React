import React from 'react';
import App from "./App";

import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";

test('renders without crashing', () => {  
  render(<App />);
});

test('it displays a link with Learn React', () => {
  const container = render(<App />);
  container.getByText('Learn React');
});