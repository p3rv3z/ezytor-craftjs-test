import React from "react";
import { useNode } from "@craftjs/core";
import { HeadingSettings } from "./HeadingSettings";

export const Image = ({ src, className, alt }) => {
  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  return (
    <img  ref={ref => connect(drag(ref))} src={src} className={className} alt={alt} />
  )
}



