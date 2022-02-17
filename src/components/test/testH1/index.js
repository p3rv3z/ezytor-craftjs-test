import React from "react";
import { useNode } from "@craftjs/core";

export const TestH1 = ({ children, styles, classes }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <div ref={ref => connect(drag(ref))}
      style={styles}
      className={classes}
    >
      {children}
    </div>
  )
}

// 
