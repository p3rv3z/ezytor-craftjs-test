import React from "react";
import { useNode } from "@craftjs/core";

export const Main = ({children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div ref={ref => connect(drag(ref))} className="main">
            {children}
        </div>
    )
}
