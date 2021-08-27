import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../theme";
import EasyButton from "../components/easy-button";
test.skip("renders with the light styles for the light theme", () => {
  render(
    <ThemeProvider initialTheme="light">
      <EasyButton>Easy</EasyButton>
    </ThemeProvider>
  );
  const button = screen.getByRole("button", { name: /easy/i });
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `);
});

test.skip("renders with the light styles for the light theme", () => {
  const Wrapper = ({ children }) => (
    <ThemeProvider initialTheme="light">{children}</ThemeProvider>
  );
  render(<EasyButton>Easy</EasyButton>, { wrapper: Wrapper });
  const button = screen.getByRole("button", { name: /easy/i });
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `);
});

// test("renders with the dark styles for the dark theme", () => {
//   const Wrapper = ({ children }) => (
//     <ThemeProvider initialTheme="dark">{children}</ThemeProvider>
//   );
//   render(<EasyButton>Easy</EasyButton>, { wrapper: Wrapper });
//   const button = screen.getByRole("button", { name: /easy/i });
//   expect(button).toHaveStyle(`
//     background-color: black;
//     color: white;
//   `);
// });

// //Another way

function renderWithProviders(ui, { theme = "light", ...options } = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider value={[theme, () => {}]}>{children}</ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
}

test.skip("renders with the light styles for the light theme", () => {
  renderWithProviders(<EasyButton>Easy</EasyButton>);
  const button = screen.getByRole("button", { name: /easy/i });
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `);
});

// test("renders with the dark styles for the dark theme", () => {
//   renderWithProviders(<EasyButton>Easy</EasyButton>, {
//     theme: "dark",
//   });
//   const button = screen.getByRole("button", { name: /easy/i });
//   expect(button).toHaveStyle(`
//     background-color: black;
//     color: white;
//   `);
// });
