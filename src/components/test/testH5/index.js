import React from "react";
import { useNode } from "@craftjs/core";

export const TestH5 = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <h5 ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </h5>
  )
}

// 
