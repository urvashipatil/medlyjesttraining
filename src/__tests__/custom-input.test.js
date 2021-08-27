import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElement,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import CustomInputApp from "../pages/custom-input-app";

beforeEach(() => {
  render(<CustomInputApp />);
});

test.skip("Render custom input", async () => {
  const input = screen.getByRole("textbox");
  // userEvent.type("input", "medly");

  fireEvent.change(input, { target: { value: "medly" } });

  // const label = screen.getByText(/You typed/);
  // expect(label).toHaveTextContent(/medly/);
  await screen.findByText(/medly/);
  screen.debug();
});

test.skip("testing user.name with api", async () => {
  await screen.findByText(/harry/i);
  screen.debug();
});

test.skip("testing user.name with api", async () => {
  await waitFor(() => screen.getByText(/harry/i));
  screen.debug();
});

test.skip("mock api", async () => {
  axios.get = jest.fn();
  axios.get.mockResolvedValue({
    data: [{ name: "Urvashi", city: "Mumbai" }],
  });
  // axios.get.mockImplementation(() => {
  //   return {
  //     data: [{ name: "Urvashi", city: "Mumbai" }],
  //   };
  // });
  render(<CustomInputApp />);

  await waitFor(() => screen.getByText(/urvashi/i));
  screen.debug();
  // axios.get.mockRestore()
});
