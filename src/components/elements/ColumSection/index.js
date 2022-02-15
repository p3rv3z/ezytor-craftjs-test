import React from "react";
import { Element, useNode } from "@craftjs/core";
import { Row } from "../Row";


export const ColumSection = ({children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div className="_column_area"  ref={ref => connect(drag(ref))}>
            <Element is={Row}  id="row" canvas/>
        </div>
        // <div className="_container_active">
        //     {children}
        // </div>
    )
}
