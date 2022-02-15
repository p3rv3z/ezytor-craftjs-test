import React from "react";
import { Element, useNode } from "@craftjs/core";

import { Colum } from "../Col";


export const Row = ({children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        // <div ref={ref => connect(drag(ref))} className="_container_active">
        //     {children}
        // </div>
        <div>
            <p class="_plus" >+</p>
            <div ref={ref => connect(drag(ref))} className="row my-2 _custom_row_center">
                <Colum></Colum>
                <Colum></Colum>
            </div>
        </div>
    )
}
