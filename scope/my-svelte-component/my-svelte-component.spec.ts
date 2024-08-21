import { render, screen } from "@testing-library/svelte";
import BasicHelloWorldFromFile from "./compositions/composition-from-file.svelte";

describe("BasicHelloWorld", () => {
    test("should render basic hello world example", () => {
      render(BasicHelloWorldFromFile);
      expect(screen.queryByText("Hello world!")).toBeInTheDocument();
    });
})
