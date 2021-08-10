import { render } from "@testing-library/react";

import ProfilePage from ".";

jest.mock("./hooks", () => ({
  __esModule: true,
  default: () => ({
    session: { a: 1 },
    loading: false,
  }),
}));

describe("ProfilePage", () => {
  it("renders without crashing", () => {
    render(<ProfilePage />);
  });
});
