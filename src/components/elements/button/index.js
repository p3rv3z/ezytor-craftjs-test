import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { ButtonSettings } from "./ButtonSettings";
const classNames = require('classnames');

export const Button = ({ text, styles, properties }) => {

  const { connectors: { connect, drag }, isActive, isHovered, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected,
    isHovered: node.events.hovered,
  }));

  const [editable, editableSet] = useState(true);
  const classes = classNames('_heading', { '_selected': (isActive || isHovered) });

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
      onDoubleClick={enableEditMode}
      onBlur={disableEditMode}
      onChange={e =>
        setProp(props =>
          props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
        )
      }
      tagName="a"
    />
  )
}


Button.craft = {
  props: {
    text: "Button",

    styles: {
      fontFamily: 'Arial',
      fontSize: "20px",
      fontWeight: "auto",
      lineHeight: "auto",
      color: '#000',
      textAlign: 'left',

      width: "auto",
      height: "auto",
      minWidth: "auto",
      maxWidth: "auto",
      minHeight: "auto",
      maxHeight: "auto",
      objectFit: "cover",

      display: 'block'
    },

    properties: {
      
    }
  },
  related: {
    settings: ButtonSettings
  }
}