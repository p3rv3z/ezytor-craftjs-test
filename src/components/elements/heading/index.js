import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { HeadingSettings } from "./HeadingSettings";
import ContentEditable from "react-contenteditable";
const classNames = require('classnames');

export const Heading = ({ text, styles }) => {
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
      tagName="h1"
    />
  )
}


Heading.craft = {
  props: {
    text: "Heading",
    styles: {
      fontSize: "32px",
      fontWeight: "auto",
      lineHeight: "auto",
      color: '#000',
      textAlign: 'left',
      fontFamily: 'Arial',
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "auto",
      paddingBottom: "auto",
      paddingLeft: "auto",
      paddingRight: "auto",
    }
  },

  related: {
    settings: HeadingSettings
  }
}