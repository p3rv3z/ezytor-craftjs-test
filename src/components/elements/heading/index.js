import React from "react";
import { useNode } from "@craftjs/core";
import { Settings } from "./Settings";

export const Heading = ({ text, fontSize, fontWeight, lineHeight, color, textAlign, fontFamily }) => {
  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  return (
    <h1
      ref={ref => connect(drag(ref))}
      className={`_heading${isActive ? "_active" : ""}`}
      contentEditable={true}
      suppressContentEditableWarning={true}
      style={{ width: "auto", fontSize: `${fontSize}px`, fontWeight, lineHeight, color, textAlign, fontFamily }}
    >
      {text}
    </h1>
  )
}


Heading.craft = {
  props: {
    text: "Heading",
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Arial',
  },

  related: {
    settings: Settings
  }
}