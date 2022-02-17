import React from "react";
import { Element, useNode } from "@craftjs/core";
import { Row } from "../Row";
import { Col } from "../Col";


export const ColumSection = ({children}) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div className="_column_area"  ref={ref => connect(drag(ref))}>
            <Element 
                is={Row}   
                id="row" 
                children={[
                    <Element is={Col} id="col1" className="col col-md-6 _custom_col text-center"  canvas/>,
                    <Element is={Col} id="col2" className="col col-md-6 _custom_col text-center" canvas/>,
                ]} 
                canvas
            />
        </div>
        // <div className="_container_active">
        //     {children}
        // </div>
    )
}

ColumSection.craft = {
    // related: {
    //   settings: Settings
    // },
    rules: {
      // Only accept Text
      canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Row)
    }
  }
