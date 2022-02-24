import React from "react";
import { useNode } from "@craftjs/core";

export const TestNav = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <nav ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </nav>
  )
}

// 
