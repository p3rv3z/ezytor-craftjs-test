import React from "react";
import { Element, useNode ,useEditor} from "@craftjs/core";

import { Col } from "../Col";


export const Row = ({children}) => {
    // const { connectors: { connect, drag } } = useNode();
    const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
        isActive: node.events.selected
    }));
    const { actions,currentJson } = useEditor((state) =>  ({
        currentJson: state.nodes
    }))
  

    // const { enabled, connectors, actions: { setOptions },} = useEditor((state) => ({
    //         enabled: state.options.enabled,
    //       }));
    // console.log("---------currentJson----------")
    console.log(currentJson)
    // console.log(currentJson)

    const addCol = () =>{
        console.log("calling addCol");
        let newNode = {
            "col-b": {
                id: "col-b",
                data: {
                  type: Col,
                  props: {},
                  name: "Col",
                  displayName: "colum",
                  isCanvas: true
                }
              }
        };
        // actions.setOptions((options) => {
        //     // console.log('options--------------------')
        //     // console.log(options)
        // });
        actions.add({nodes: newNode});
    }

    return (
        // <div ref={ref => connect(drag(ref))} className="_container_active">
        //     {children}
        // </div>
        <div>
            <p class="_plus" onClick={addCol} >+</p>
            <div ref={ref => connect(drag(ref))}
            className={`_heading${isActive ? "_active" : ""}`}
             className="row my-2 _custom_row_center">
            <Element is={Col} id="col1"  canvas/>
            <Element is={Col} id="col2" canvas/>
            </div>
        </div>
    )
}
