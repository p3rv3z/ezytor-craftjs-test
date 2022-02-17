import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { HeadingSettings } from "./HeadingSettings";
import ContentEditable from "react-contenteditable";
const classNames = require('classnames');

export const Heading = ({ text, fontSize, fontWeight, lineHeight, color, textAlign, fontFamily }) => {
  const { connectors: { connect, drag }, isActive, isHovered, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected,
    isHovered: node.events.hovered,
  }));

  const [editable, editableSet] = useState(true);
  const styles = { width: "auto", fontSize: `${fontSize}px`, fontWeight, lineHeight, color, textAlign, fontFamily }
  const classes = classNames('_heading', { '_selected': (isActive || isHovered)});

  const enableEditMode = () => {
    editableSet(false)
  }

  const disableEditMode = () => {
    editableSet(true)
  }

  return (
    <ContentEditable
        html={text} 
        innerRef={ref => connect(drag(ref))}
        className={classes}
        style={styles}  
        disabled={editable}
        // suppressContentEditableWarning={true}
        onDoubleClick={enableEditMode}
        onBlur={disableEditMode}
        onChange={e => 
          setProp(props => 
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")  
          )
        } 
        tagName="h1"
      />
  )
}


Heading.craft = {
  props: {
    text: "Heading",
    fontSize: "32",
    fontWeight: "500",
    lineHeight: "44px",
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Arial',
  },

  related: {
    settings: HeadingSettings
  }
}