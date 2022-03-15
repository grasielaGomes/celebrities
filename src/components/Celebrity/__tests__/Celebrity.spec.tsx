import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NationalityIcon } from "components/Images/Images";
import { CelebrityDetail } from "../Celebrity";

describe("Celebrity components", () => {
  const title = "Title";
  const text = "Text";

  test("CelebrityDetail should be rendered when it gets all props", () => {
    render(
      <CelebrityDetail icon={<NationalityIcon />} title={title} text={text} />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});