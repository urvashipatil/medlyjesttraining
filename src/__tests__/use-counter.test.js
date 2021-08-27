import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import userCounter from "../components/hooks/use-counter";

test.skip("test", () => {
  let result;
  function TestComponent() {
    result = userCounter({ initialCount: 0, step: 5 });
    return null;
  }
  render(<TestComponent />);
  result.increment();
  expect(result.count).toBe(5);

  // await waitFor(() => expect(result.count).toBe(5));
});
