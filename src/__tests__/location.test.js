import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import Location from "../pages/location";
import { useCurrentPosition } from "react-use-geolocation";

// mocking Browser APIs and modules
//  mock the module
// jest.mock("react-use-geolocation");

// test("displays the users current location", async () => {
//   const fakePosition = {
//     coords: {
//       latitude: 10,
//       longitude: 20,
//     },
//   };

//   useCurrentPosition.mockImplementation(() => [fakePosition, null]);

//   render(<Location />);
//   expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument();

//   expect(screen.getByText(/latitude/i)).toHaveTextContent(
//     `Latitude: ${fakePosition.coords.latitude}`
//   );
//   expect(screen.getByText(/longitude/i)).toHaveTextContent(
//     `Longitude: ${fakePosition.coords.longitude}`
//   );
//   screen.debug();
// });

//mocking browser api
test.skip("displays the users current location", async () => {
  window.navigator.geolocation = {
    getCurrentPosition: jest.fn(),
  };

  render(<Location />);

  screen.debug();
  expect(screen.queryByLabelText(/loading/i)).toBeInTheDocument();
});
