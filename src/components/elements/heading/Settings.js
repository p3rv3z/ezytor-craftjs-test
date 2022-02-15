import React from "react";
import { useNode } from "@craftjs/core";

export const Settings = () => {
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
    )
}