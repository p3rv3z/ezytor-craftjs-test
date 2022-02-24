import React from "react";
import { useNode } from "@craftjs/core";

export const TestH1 = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <h1 ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </h1>
  )
}

// 
