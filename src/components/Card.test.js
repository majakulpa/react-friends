import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("expect to render card", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
