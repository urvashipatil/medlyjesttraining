import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../pages/counter";

beforeEach(()=>{
  render(<Counter />);
})
test.skip("check counter is rendered", () => {
  
  // screen.debug();
  //throws error when element not found
  //throws error when no match
  // screen.getByText(/Current count/i);

  const incr = screen.getByRole("button", { name: /Increment/i });

  const decr = screen.getByRole("button", { name: /Decrement/i });

  userEvent.click(incr);
  userEvent.click(incr);
  userEvent.click(incr);
  // screen.debug();
  const result = screen.getByText(/Current count/i);
  expect(result).toHaveTextContent(/3/);
  // const [incrbtn, decrbtn] = screen.getAllByRole("button");

  //doent throw error if no elements found
  const queryby = screen.queryByText(/loading/i);
  expect(queryby).not.toBeInTheDocument();

  screen.getByTestId("message");
});

test.skip("check error when counter goes below 0", () => {
  const decr = screen.getByRole("button", { name: /Decrement/i });
  userEvent.click(decr);
  let error = screen.getByText(/Count can not be less than 0/i);
  expect(error).toBeInTheDocument();

  const incr = screen.getByRole("button", { name: /Increment/i });

  userEvent.click(incr);
  error = screen.queryByText(/Count can not be less than 0/i);
  expect(error).not.toBeInTheDocument();
});
