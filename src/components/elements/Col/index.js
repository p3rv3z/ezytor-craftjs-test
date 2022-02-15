import React from "react";
import { Element, useNode } from "@craftjs/core";


export const Colum = ({children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (

        <div ref={ref => connect(drag(ref))} className="col col-md-6 _custom_col text-center">
            {children}
        </div>
    )
}
