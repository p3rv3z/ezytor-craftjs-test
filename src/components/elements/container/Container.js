import React from "react";
import { Element, useNode } from "@craftjs/core";


export const Container = ({children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <Element is="div" id="container" className="_container_active" ref={ref => connect(drag(ref))} canvas>
            {children}
        </Element>
    )
}
