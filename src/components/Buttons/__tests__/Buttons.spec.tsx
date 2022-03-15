import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Body } from "../../Typography/Typography";
import { ReturnIcon } from "../../Images/Images";
import { ImageButton, IconButton, TextButton } from "../Buttons";

describe("Buttons", () => {
  const text = "text";
  const altName = "name";

  test("ImageButton should be rendered when it gets all props", () => {
    render(
      <ImageButton
        isDisabled
        handleClick={() => "hi"}
        imgUrl="https://raw.githubusercontent.com/grasielaGomes/images/main/tom-cruise.jpg"
        altText={altName}
      />
    );
    expect(screen.getByTitle("loader")).toBeDefined();
  });

  test("IconButton should be rendered when it gets all props", () => {
    render(
      <IconButton child={<ReturnIcon />} isDisabled handleClick={() => "hi"} />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("TextButton should be rendered when it gets all props", () => {
    render(
      <TextButton
        child={<Body text={text} />}
        isDisabled
        handleClick={() => () => "hi"}
      />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
