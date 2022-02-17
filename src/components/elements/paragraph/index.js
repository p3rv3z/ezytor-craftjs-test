import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import { ParagraphSettings } from "./ParagraphSettings";
import ContentEditable from "react-contenteditable";
const classNames = require('classnames');

export const Paragraph = ({ text, styles }) => {
  const { connectors: { connect, drag }, isActive, isHovered, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected,
    isHovered: node.events.hovered,
  }));

  const [editable, editableSet] = useState(true);
  const classes = classNames('_paragraph', { '_selected': (isActive || isHovered) });

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
      tagName="p"
    />
  )
}


Paragraph.craft = {
  props: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    styles: {
      fontSize: "auto",
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
    settings: ParagraphSettings
  }
}