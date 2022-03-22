import App from "./App.svelte";
import { render } from "@testing-library/svelte";

it("renders the App component", async () => {
  const name = "bank";
  const { getByText } = render(App, { name });

  expect(getByText(`${name} micro front`)).toBeInTheDocument();
});
