import React from "react";
import { Element, useNode } from "@craftjs/core";
import { Row } from "../Row";


export const Colums = ({children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div className="_column_area"  ref={ref => connect(drag(ref))}>
            <Row/>
        </div>
        // <div className="_container_active">
        //     {children}
        // </div>
    )
}
