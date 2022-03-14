import { render, screen } from "@testing-library/react";
import { Body } from "../../Typography/Typography";
import { ReturnIcon } from "../../Images/Images";
import { ImageButton, IconButton, TextButton } from "../Buttons";

describe("Buttons", () => {
  const text1 = "Click here";

  test("ImageButton should be rendered when it gets all props", () => {
    render(
      <ImageButton
        isDisabled
        handleClick={() => "hi"}
        imgUrl=""
        altText=""
      />
    );
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("IconButton should be rendered when it gets all props", () => {
    render(
      <IconButton
        child={<ReturnIcon />}
        isDisabled
        handleClick={() => "hi"}
      />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("TextButton should be rendered when it gets all props", () => {
    render(
      <TextButton
        child={<Body text={text1} />}
        isDisabled
        handleClick={() => () => "hi"}
      />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
