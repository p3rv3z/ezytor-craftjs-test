import React from "react";
import { useNode } from "@craftjs/core";

export const TypographySettings = () => {
    const { actions: { setProp }, fontSize, fontWeight, lineHeight, color, textAlign, fontFamily } = useNode((node) => ({
        fontSize: node.data.props.fontSize,
        fontWeight: node.data.props.fontWeight,
        lineHeight: node.data.props.lineHeight,
        color: node.data.props.color,
        textAlign: node.data.props.textAlign,
        fontFamily: node.data.props.fontFamily,
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
            <h4 className="_add_tab_section_header_title">Typography</h4>
        </div>
        <div className="_add_tab_section_size">
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Font:</h4>
                </div>
                <input type="text" name="fontFamily" value={fontFamily} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Arial"
                onChange={handleChange}></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Weight:</h4>
                </div>
                <input type="number" name="fontWeight" value={fontWeight} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="400"
                    onChange={handleChange}></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Size:</h4>
                </div>
                <input type="number" name="fontSize" value={fontSize} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                    onChange={handleChange}
                ></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Height:</h4>
                </div>
                <input type="number" step=".1" name="lineHeight" value={lineHeight} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="1.2"
                    onChange={handleChange}></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Color:</h4>
                </div>
                <input type="text" name="color" value={color} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="#000"
                onChange={handleChange}></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Align:</h4>
                </div>
                <input type="text" name="textAlign" value={textAlign} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="left"
                onChange={handleChange}></input>
            </div>
        </div>
        </div>
    )
}