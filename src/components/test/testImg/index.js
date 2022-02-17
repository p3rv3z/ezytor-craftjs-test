import React from "react";
import { useNode } from "@craftjs/core";

export const TestImg = ({ children, styles, classes, src }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <div ref={ref => connect(drag(ref))}
      style={styles}
      className={classes}
      src={src}
    >
      {children}
    </div>
  )
}

// 
