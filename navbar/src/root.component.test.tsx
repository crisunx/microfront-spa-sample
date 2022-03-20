import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Bank/i)).toBeInTheDocument();
    expect(getByText(/Cards/i)).toBeInTheDocument();
    expect(getByText(/Payments/i)).toBeInTheDocument();
  });
});
