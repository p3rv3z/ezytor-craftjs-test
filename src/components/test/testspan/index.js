import React from "react";
import { useNode } from "@craftjs/core";

export const Testspan = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <span ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </span>
  )
}

// 
