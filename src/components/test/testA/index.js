import React from "react";
import { useNode } from "@craftjs/core";

export const TestA = ({ children, style, className, href }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <a ref={ref => connect(drag(ref))}
      href={href}
      style={style}
      className={className}
    >
      {children}
    </a>
  )
}

// 
