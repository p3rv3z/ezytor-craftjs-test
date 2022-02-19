import React from "react";
import { useNode } from "@craftjs/core";

export const TestSvg = ({  fill,height,viewBox,width,xmlns }) => {

  const { connectors: { connect, drag } } = useNode();

  return (
    <svg ref={ref => connect(drag(ref))} fill={fill} height={height} viewBox={viewBox} width={width} xmlns={xmlns} >
      
    </svg>
  )
}

// 
