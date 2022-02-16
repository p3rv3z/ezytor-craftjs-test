import React from "react";
import { useNode } from "@craftjs/core";
import { ButtonSettings } from "./ButtonSettings";

export const Button = ({ text, display, width, height, fontSize, fontWeight, lineHeight, color, textAlign, fontFamily }) => {

  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  // const selectedClass = (counyoutt == 0 && !isActive) ? "_empty" : (isActive ? "_active" : "")
  const selectedClass = ""

  return (
    <button
      ref={ref => connect(drag(ref))}
      className={`_button${selectedClass}`}
      style={{ display, width: width, height: height, fontSize: `${fontSize}px`, fontWeight, lineHeight, color, textAlign, fontFamily }}
      contentEditable="true"
    >
      {text}
    </button>
  )
}


Button.craft = {
  props: {
    width: "auto",
    height: "auto",
    text: "Heading",
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Arial',
  },
  related: {
    settings: ButtonSettings
  }
}