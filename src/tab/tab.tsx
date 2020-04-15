import React, { useState, useMemo, Children } from "react";

import { Label, Container } from "./style";

interface tabState {
  target: number;
}

interface tabProps {
  children: React.ReactNode;
}

const Tabs: React.FC = (props: tabProps) => {
  let [target, setTarget] = useState<tabState["target"]>(0);

  const { children } = props;

  const childrens = useMemo(() => Children.count(children), [children]);

  function showTab(index) {
    if (target < childrens) {
      setTarget(index);
    }
  }

  const renderTab = () => {
    if (children[target]) {
      return children[target].props.children;
    }
    return children[0].props.children;
  };

  return (
    <Container>
      <ul>
        {!Array.isArray(children) ? (
          <Label key={0} onClick={() => showTab}>
            {children.props.label}
          </Label>
        ) : (
          children.map((child, i) => (
            <Label key={i} onClick={() => showTab(i)}>
              {child.props.label}
            </Label>
          ))
        )}
      </ul>
      {renderTab()}
    </Container>
  );
};

export default Tabs;
