import React, { Children } from "react";
import { useNode, Element } from "@craftjs/core";
import { Settings } from "./Settings";
import { ListItem } from "../listItem";

export const List = ({ children }) => {
  const count = Children.count(children);

  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  const selectedClass = (count == 0 && !isActive) ? "_empty" : (isActive ? "_active" : "")

  return (

    <ul
      ref={ref => connect(drag(ref))}
      className={`_list${selectedClass}`}
      style={{background: "green"}}
    >
      <ListItem />
      <ListItem />
      <ListItem />
      {children}
    </ul>
  )
}


List.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === ListItem)
  },
  props: {
    width: "200px",
    height: "200px"
  },
  related: {
    settings: Settings
  }
}