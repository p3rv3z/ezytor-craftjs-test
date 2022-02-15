import React, { Children } from "react";
import { useNode } from "@craftjs/core";
import { Settings } from "./Settings";

export const Div = ({ width, height, children }) => {
  const count = Children.count(children);

  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  const selectedClass = (count == 0 && !isActive) ? "_empty" : (isActive ? "_active" : "")

  return (
    <div
      ref={ref => connect(drag(ref))}
      className={`_div${selectedClass}`}
      style={{ width }, { height }}
    >
      {children}
    </div>
  )
}


Div.craft = {
  props: {
    width: "200px",
    height: "200px"
  },
  related: {
    settings: Settings
  }
}