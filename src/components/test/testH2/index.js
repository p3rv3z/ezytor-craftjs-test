import React from "react";
import { useNode } from "@craftjs/core";

export const TestH2 = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <h2 ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </h2>
  )
}

// 
