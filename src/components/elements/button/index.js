import React from "react";
import { useNode } from "@craftjs/core";
import { ButtonSettings } from "./ButtonSettings";

export const Button = ({ text, display, fontSize, fontWeight, lineHeight, color, textAlign, fontFamily, width, height, minWidth, maxWidth, minHeight, maxHeight, objectFit }) => {

  const { connectors: { connect, drag }, isActive } = useNode((node) => ({
    isActive: node.events.selected
  }));

  // const selectedClass = (counyoutt == 0 && !isActive) ? "_empty" : (isActive ? "_active" : "")
  const selectedClass = ""

  const styles = {
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    objectFit,
    fontSize: `${fontSize}px`,
    fontWeight,
    lineHeight,
    color,
    textAlign,
    fontFamily,
    display
  }

  return (
    <button
      ref={ref => connect(drag(ref))}
      className={`_button${selectedClass}`}
      style={styles}
    >
      {text}
    </button>
  )
}


Button.craft = {
  props: {
    width: "auto",
    height: "auto",
    minWidth: "auto",
    maxWidth: "auto",
    minHeight: "auto",
    maxHeight: "auto",
    objectFit: "cover",
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