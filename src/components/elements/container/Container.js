import React from "react";
import { Element, useNode } from "@craftjs/core";


export const Container = ({children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div ref={ref => connect(drag(ref))} className="_container_active">
            {children}
        </div>
    )
}
