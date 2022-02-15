import React from "react";
import { useNode } from "@craftjs/core";
import { Settings } from "./Settings";
import { ListItem } from "../listItem";



export const List = ({children}) => {
  // const count = Children.count(children);

  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  // const selectedClass = (isActive) ? "_empty" : (isActive ? "_active" : "")

  return (
    <ul style={{ background: "green" }} ref={ref => connect(drag(ref))}>
        {children}
      </ul>
  )
}


List.craft = {
  related: {
    settings: Settings
  },
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === ListItem)
  }
}