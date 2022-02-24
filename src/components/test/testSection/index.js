import React from "react";
import { useNode } from "@craftjs/core";

export const TestSection = ({ children, styles, className }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <section ref={ref => connect(drag(ref))}
      style={styles}
      className={className}
    >
      {children}
    </section>
  )
}

// 
