import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../components/login";

test.skip("Submitting Login form with username and password", () => {
  const handleSubmit = jest.fn();
  render(<Login onSubmit={handleSubmit} />);
  const userName = screen.getByLabelText(/Username/i);
  const password = screen.getByLabelText(/Password/i);
  const submit = screen.getByText(/Submit/i);

  userEvent.type(userName, "urvashi@gmail.com");
  userEvent.type(password, "123456");
  userEvent.click(submit);

  // fireEvent.change(userName, { target: { value: "urvashi" } });

  expect(handleSubmit).toHaveBeenCalledTimes(1);

  expect(handleSubmit).toHaveBeenCalledWith({
    username: "urvashi@gmail.com",
    password: "123456",
  });

  // screen.debug();
});
