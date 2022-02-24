import React from "react";
import { useNode } from "@craftjs/core";

export const TestFooter = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <footer ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </footer>
  )
}

// 
