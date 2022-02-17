import React from "react";
import { useNode } from "@craftjs/core";

export const LayoutSettings = () => {
    const { actions: { setProp }, display } = useNode((node) => ({
        display: node.data.props.display,
    }));

    const handleChange = (event) => {
        const { name, value } = event.target
        setProp(props => {
            props[name] = value
        });
    }

    return (
        <div className="_panel_select_header">
            <div className="_add_tab_section_header">
                <div className="_add_tab_section_header_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                </div>
                <h4 className="_add_tab_section_header_title">Layout</h4>
            </div>
            <div className="_add_tab_section_size">
                {/* <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Font:</h4>
                    </div>
                    <input type="text" name="fontFamily" value={fontFamily} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Arial"
                        onChange={handleChange}></input>
                </div> */}

                <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Display:</h4>
                    </div>
                    <div className="_add_tab_section_drop_select">
                        <select name="display" onChange={handleChange} className="form-select" aria-label="Default select example">
                            <option value="block" selected={display == 'block'}>Block</option>
                            <option value="grid" selected={display == 'block'}>Grid</option>
                            <option value="inline-flex" selected={display == 'inline-flex'}>Inline-flex</option>
                            <option value="flex" selected={display == 'flex'}>Flex</option>
                            <option value="inline-block" selected={display == 'inline-block'}>Inline-block</option>
                            <option value="inline-grid" selected={display == 'inline-grid'}>Inline-grid</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}