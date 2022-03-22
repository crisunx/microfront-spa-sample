import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="cards" />);
    expect(getByText(/cards micro front/i)).toBeInTheDocument();
  });
});
