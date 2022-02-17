import React from "react";
import { Element, useNode ,useEditor} from "@craftjs/core";

import { Col } from "../Col";


export const News = ({children}) => {
    const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
        isActive: node.events.selected
    }));
    const { actions , query,currentJson } = useEditor((state) =>  ({
        currentJson: state.nodes
    }))
    console.log("---------currentJson----------")
    console.log(currentJson)

    const addCol = () =>{
        console.log("calling addCol");
        // let newNode = {
        //     "col-b": {
        //         id: "col-b",
        //         data: {
        //           type: Col,
        //           props: {},
        //           name: "Col",
        //           displayName: "colum",
        //           isCanvas: true
        //         }
        //       }
        // };

        const freshNode = {
            data: {
                type: 'h1'
            }
        };
        
        // Create a new valid Node object from the fresh Node
        const nodeTree = query.parseReactElement(<h2>Hi</h2>).toNodeTree();
        // actions.addNodeTree(nodeTree);
        actions.addNodeTree(nodeTree, 'ROOT');
        // actions.setOptions((options) => {
        //     // console.log('options--------------------')
        //     // console.log(options)
        // });
        // actions.add({nodes: newNode});
    }

    return (
        // <div ref={ref => connect(drag(ref))} className="_container_active">
        //     {children}
        // </div>
        <div className="_panel_header" onClick={addCol} style={{background: 'red'}}>
            <div className="_panel_header_title">
                <h4 className="_panel_header_title_txt" >Add</h4>
            </div>  
            <div className="_panel_header_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" strokeLinejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </div>
        </div>
    )
}
