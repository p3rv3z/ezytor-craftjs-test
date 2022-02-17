import React, { useEffect } from 'react';
import { useEditor } from "@craftjs/core";

export default function SettingsPanel() {

    const { selected, actions } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable()
            };
        }

        return { selected }
    });

    const removeSelectedNode = (event) => {
        if (event.key === "Delete") actions.delete(selected.id);
    }

    useEffect(() => {
        document.addEventListener("keydown", removeSelectedNode);
        return () => document.removeEventListener("keydown", removeSelectedNode);
    }, [selected]);


    return (

        <div className="_layout_right_sidebar_wrap">
            <div className="_editor_rightsidebar">
                <div className="_panel_select_header">
                    <div className="_panel_select_header_txt">
                        <h4 className="_panel_select_header_title">{ selected ? selected.name : 'None Selected' }</h4>
                        <h4 className="_panel_select_header_title">Select</h4>
                    </div>
                    <div className="_panel_input_area">
                        <div className="_panel_input_area_inner">
                            <svg data-icon="Add" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg"><path fillRule="evenodd" clipRule="evenodd" d="M9 2H7v5H2v2h5v5h2V9h5V7H9V2z" fill="currentColor"></path></svg>
                            <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Select a Class or Tag"></input>
                        </div>
                    </div>
                </div>
                    {selected && selected.settings && React.createElement(selected.settings)}
            </div >
        </div >
    );
}