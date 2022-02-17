import React from "react";
import { useNode } from "@craftjs/core";

export const TestA = ({ children, styles, classes, href }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <div ref={ref => connect(drag(ref))}
      href={href}
      style={styles}
      className={classes}
    >
      {children}
    </div>
  )
}

// 
