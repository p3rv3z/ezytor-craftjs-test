import React from "react";
import { useNode } from "@craftjs/core";
import { ParagraphSettings } from "./ParagraphSettings";

export const Paragraph = ({ text, fontSize, fontWeight, lineHeight, color, textAlign, fontFamily }) => {
    const { connectors: {connect, drag}, isActive, actions: {setProp} } = useNode((node) => ({
        isActive: node.events.selected
      }));

    return (
        <p ref={ref => connect(drag(ref))} className={`_paragraph${isActive ? "_active" : ""}`} style={{ fontSize: `${fontSize}px`, fontWeight, lineHeight, color, textAlign, fontFamily }}>
            {text}
        </p>
    )
}


Paragraph.craft = {
  props: {
    text: "Heading",
    fontSize: "20",
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Arial',
  },
    related: {
      settings: ParagraphSettings
    }  
  }