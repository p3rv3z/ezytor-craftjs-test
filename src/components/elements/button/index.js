import React from "react";
import { useNode } from "@craftjs/core";
import { Settings } from "./Settings";

export const Button = ({ width, height, text }) => {

  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  // const selectedClass = (count == 0 && !isActive) ? "_empty" : (isActive ? "_active" : "")
  const selectedClass = ""

  return (
    <button
      ref={ref => connect(drag(ref))}
      className={`_button${selectedClass}`}
      style={{ width }, { height }}
    >
      {text}
    </button>
  )
}


Button.craft = {
  props: {
    width: "50px",
    height: "30px"
  },
  related: {
    settings: Settings
  }
}