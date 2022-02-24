import React from "react";
import { useNode } from "@craftjs/core";

export const TestH6 = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <h6 ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </h6>
  )
}

// 
