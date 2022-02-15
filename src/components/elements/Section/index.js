import React from "react";
import { Element, useNode } from "@craftjs/core";


export const Section = ({children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div  id="section" className="_section_active" ref={ref => connect(drag(ref))} >
            {children}
        </div>
    )
}
