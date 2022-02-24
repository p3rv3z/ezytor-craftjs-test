import React from "react";
import { useNode } from "@craftjs/core";

export const TestP = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <p ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </p>
  )
}

// 
