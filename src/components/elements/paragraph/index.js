import React from "react";
import { useNode } from "@craftjs/core";
import { Settings } from "./Settings";

export const Paragraph = ({ text, fontSize }) => {
    const { connectors: {connect, drag}, isActive, actions: {setProp} } = useNode((node) => ({
        isActive: node.events.selected
      }));

    return (
        <p ref={ref => connect(drag(ref))} className={`_paragraph${isActive ? "_active" : ""}`} style={{ fontSize }}>
            {text}
        </p>
    )
}


Paragraph.craft = {
    props: {
        text: "Hi",
        fontSize: "12px"
    },
    related: {
      settings: Settings
    }  
  }