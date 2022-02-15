import React from "react";
import { useNode } from "@craftjs/core";
import { Settings } from "./Settings";

export const Heading = ({ text, fontSize }) => {
  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  return (
    <h1
      ref={ref => connect(drag(ref))}
      className={`_heading${isActive ? "_active" : ""}`}
      style={{ fontSize }, { width: "300px" }}
    >
      {text}
    </h1>
  )
}


Heading.craft = {
  props: {
    text: "Hi",
    fontSize: 20
  },
  related: {
    settings: Settings
  }
}