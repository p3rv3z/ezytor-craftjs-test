import React from "react";
import { useNode } from "@craftjs/core";

export const TestUl = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <div ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </div>
  )
}

// 
