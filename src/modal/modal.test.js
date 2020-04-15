import React from "react";
import { mount } from "enzyme";
import { bindElementToQueries } from "dom-testing-library";
import { renderIntoDocument } from "react-testing-library";

import Modal from "./index";

const bodyUtils = bindElementToQueries(document.body);

function renderMyPortal() {
  const renderUtils = renderIntoDocument(<Modal />);
  const portalNode = bodyUtils.getByTestId("modal");
  return {
    portalNode,
    ...renderUtils,
    ...bindElementToQueries(portalNode)
  };
}

it("should render this is component", () => {
  const modal = mount(<Modal>test</Modal>);

  expect(modal.find(<Modal />));

  expect(modal.find(<Modal />)).toHaveLength(1);
  expect(modal.find());
});

it("greet renders a greeting in a portal", () => {
  const { getByText } = renderMyPortal(<Modal />);

  expect(getByText("Hello World")).toBeInTheDOM();
});

it("removes the node from the document when it unmounts", () => {
  const { unmount, portalNode } = renderMyPortal(<Modal />);

  expect(document.body.contains(portalNode)).toBe(true);
  unmount();

  expect(document.body.contains(portalNode)).toBe(false);
});
