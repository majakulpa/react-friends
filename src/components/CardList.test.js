import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expect to render CardList", () => {
  const mockRobots = [
    { id: 1, name: "John Snow", username: "John", email: "john@example.com" }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
