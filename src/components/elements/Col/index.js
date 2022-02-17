import React from "react";
import { Element, useNode } from "@craftjs/core";


export const Col = ({className,children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (

        <div ref={ref => connect(drag(ref))} className={className}>
            {children}
        </div>
    )
}
