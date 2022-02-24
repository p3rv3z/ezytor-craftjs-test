import React from "react";
import { useNode } from "@craftjs/core";

export const TestH4 = ({ children, style, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <h4 ref={ref => connect(drag(ref))}
      style={style}
      className={className}
    >
      {children}
    </h4>
  )
}

// 
