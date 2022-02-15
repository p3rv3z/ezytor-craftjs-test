import React, { Children } from "react";
import { useNode, Element } from "@craftjs/core";
import { Settings } from "./Settings";
import { ListItem } from "../listItem";
import { Div } from "../div";

export const List = ({ children }) => {
  const count = Children.count(children);

  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  const selectedClass = (count == 0 && !isActive) ? "_empty" : (isActive ? "_active" : "")

  return (

    <div
      className={`_list${selectedClass}`}
      style={{ background: "green" }}
      ref={ref => connect(drag(ref))}
    >
      <Element is="ul" id="ul" canvas>
        <ListItem />
        <ListItem />
        <ListItem />
        {children}
      </Element>
    </div>
  )
}


List.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === ListItem)
  },
  related: {
    settings: Settings
  }
}