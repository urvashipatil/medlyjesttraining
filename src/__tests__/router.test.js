import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LocationDisplay from "../components/location-display";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

function renderWithRouter() {}

test("router", () => {
  const history = createMemoryHistory();
  history.push("/about");
  render(
    <MemoryRouter history={history}>
      <LocationDisplay />
    </MemoryRouter>
  );
});
