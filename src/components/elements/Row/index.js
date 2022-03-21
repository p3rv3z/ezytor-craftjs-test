import React from "react";
import { Element, useNode ,useEditor} from "@craftjs/core";

import { Col } from "../Col";


export const Row = ({children}) => {
    // const { connectors: { connect, drag } } = useNode();

    const { actions, query,currentJson , selected  } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings
            };
        }

        return {
            currentJson: state.nodes,
            selected: selected,
        }
    });
    const { query: {node} } = useEditor();
    const {id, connectors: { connect, drag }, isActive,isHovered } = useNode((node) => ({
        isActive: node.events.selected,
        isHovered: node.events.hovered,
    }));
    // const { actions,query,currentJson , selected } = useEditor((state) =>  ({
    //     currentJson: state.nodes
    // }))
  

    // const { enabled, connectors, actions: { setOptions },} = useEditor((state) => ({
    //         enabled: state.options.enabled,
    //       }));
    // console.log("---------currentJson----------")
    // console.log(currentJson)
    // console.log(currentJson)

    const addCol = () =>{
        // console.log("calling addCol");
        const collist = node(id).descendants();
        const colLenth = collist.length
        var totalCol = Math.floor(12/(colLenth+1))
        if(colLenth >= 12) return

        for(let d of collist){
            actions.setProp(d, props => {
                props['className'] =  `col col-md-${totalCol} _custom_col text-center`;
            });
        }
        // console.log(`col-md-${totalCol}`)
        var extraCol = (totalCol*(colLenth+1)) == 12 ? 0 : 12-totalCol*(colLenth+1)
        // console.log('extraCol')
        // console.log(totalCol)
        // console.log(extraCol)
       
        const nodeTree = query.parseReactElement(<Element is={Col} id="col3" className={`col col-md-${totalCol+extraCol} _custom_col text-center`}  canvas/>).toNodeTree();
        actions.addNodeTree(nodeTree, id);
    }

    return (
        // <div ref={ref => connect(drag(ref))} className="_container_active">
        //     {children}
        // </div>
        <div className={isActive == true? ' _active':''} ref={ref => connect(drag(ref))}>
           
            {/* <p class="_plus" onClick={addCol} >+</p> */}
            {isActive == true?  <p class="_plus" onClick={addCol} >+</p> : ''}
            <div 
            className='row my-2 _custom_row_center'>
            {children}
            </div>
        </div>
    )
}

Row.craft = {
    // related: {
    //   settings: Settings
    // },
    rules: {
      // Only accept Text
      canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Col)
    }
  }
