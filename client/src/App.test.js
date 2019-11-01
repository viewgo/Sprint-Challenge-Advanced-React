import React from 'react';
import Top from "./components/Top";
import PlayerList from "./components/PlayerList";

import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";


test('displays the title', () => {
  const container = render(<Top />);
  container.getByText("Women's World Cup Search Trends");
});

test('displays Player List title', () => {
  const container = render(<Top />);
  container.getByText("Toggle Dark Mode");
});

test("body gains dark mode", () => {
  const { getByTestId, getByText } = render(<Top/>);
  fireEvent.click(getByText("Toggle Dark Mode"));
  expect(document.body.classList.contains('dark-mode')).toBe(true)

});

test("body loses dark mode", () => {
  const { getByTestId, getByText } = render(<Top/>);
  fireEvent.click(getByText("Toggle Dark Mode"));
  expect(document.body.classList.contains('dark-mode')).toBe(false)

});