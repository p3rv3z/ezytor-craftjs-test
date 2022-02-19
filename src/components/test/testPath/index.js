import React from "react";
import { useNode } from "@craftjs/core";

export const TestPath = ({  d,strokeLinecap,stroke,strokeLinejoin,strokeWidth }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <path ref={ref => connect(drag(ref))} d={d} strokeLinecap={strokeLinecap}stroke={stroke}strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth} >
      
    </path>
  )
}

// 
