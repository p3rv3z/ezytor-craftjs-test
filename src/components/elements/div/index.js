import React, { Children, useEffect } from "react";
import { useNode } from "@craftjs/core";
import { DivSettings } from "./DivSettings";
const classNames = require('classnames');

export const Div = ({children, styles}) => {

  const count = Children.count(children);

  const { connectors: { connect, drag }, isActive, isHovered } = useNode((node) => ({
    isActive: node.events.selected,
    isHovered: node.events.hovered,
  }));

  const classes = classNames('_div', { '_empty _empty_div': !count, '_selected': (isActive || isHovered) });

  return (
    <div ref={ref => connect(drag(ref))}
      style = {styles}
      className={classes}
    >
      {children}
    </div>
  )
}

Div.craft = {
  props: {
    styles: {
      width: "100%",
      height: "auto",
      minWidth: "auto",
      maxWidth: "auto",
      minHeight: "auto",
      maxHeight: "auto",
      objectFit: "cover",
    }
  },

  related: {
    settings: DivSettings
  }
}