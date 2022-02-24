import React from "react";
import { useNode } from "@craftjs/core";

export const TestHeader = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <header ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </header>
  )
}

// 
