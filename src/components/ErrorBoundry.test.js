import { shallow } from "enzyme";
import React from "react";
import ErrorBoundry from "./ErrorBoundry";

it("expect to render ErrorBoundry", () => {
  expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
});

it("expect to render h1 if error", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      hasError: true
    };
    wrapper = shallow(<ErrorBoundry {...mockProps} />);
  });
  expect(
    wrapper
      .instance()
      .containsMatchingElement(<h1>Ooooops. Something went wrong</h1>)
  ).toBeTruthy();
});
