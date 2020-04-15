import React from "react";
import { mount } from "enzyme";

import Slide, { SlideItem } from "./index";

it("should render this is component", () => {
  const path =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrine6TNnrG4uv_4DJDSYCuCVtB3NTmadGLVse6_xrvW09ynEG&usqp=CAU";

  const slide = mount(
    <Slide>
      <SlideItem path="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrine6TNnrG4uv_4DJDSYCuCVtB3NTmadGLVse6_xrvW09ynEG&usqp=CAU" />
    </Slide>
  );

  expect(slide.find(<Slide />)).toHaveLength(1);
  expect(slide.find("img").at(0).src).toEqual(path);
});
