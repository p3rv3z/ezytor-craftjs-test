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
  const classes = classNames('_button', { '_selected': (isActive || isHovered) });

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
      {...properties}
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
    text: "Button Text",

    styles: {
      fontFamily: 'Arial',
      fontSize: "14px",
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
      objectFit: "auto",

      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "9px",
      paddingBottom: "9px",
      paddingLeft: "15px",
      paddingRight: "15px",

      display: 'inline-block'
    },

    properties: {
      href: "#"
    }
  },
  related: {
    settings: ButtonSettings
  }
}