import React from "react";
import { useNode } from "@craftjs/core";


export const Heading = ({ text, fontSize }) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <h1 ref={ref => connect(drag(ref))} style={{ fontSize }, {width: "300px"}}>
            {text}
        </h1>
    )
}
