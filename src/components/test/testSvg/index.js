import React from "react";
import { useNode } from "@craftjs/core";

export const TestSvg = ({ svgProps, pathProps }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <svg ref={ref => connect(drag(ref))} {...svgProps}>
      <path {...pathProps} >
      </path>
    </svg>
  )
}

// 
