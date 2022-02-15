import React from "react";
import { useNode } from "@craftjs/core";

export const Settings = () => {
    const { actions: { setProp }, fontSize } = useNode((node) => ({
        fontSize: node.data.props.fontSize
    }));

    return (
        <div className="_add_tab_section_size">
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Font:</h4>
                </div>
                <input autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Arial"></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Weight:</h4>
                </div>
                <input autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="400"></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Size:</h4>
                </div>
                <input autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto" 
                onChange={(_, value) => {
                    setProp(props => props.fontSize = value);
                }}
                ></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Height:</h4>
                </div>
                <input autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="20px"></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Color:</h4>
                </div>
                <input autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="#fff"></input>
            </div>
            <div className="_add_tab_section_size_info">
                <div className="_add_tab_section_size_info_txt">
                    <h4 className="_add_tab_section_drop_title">Align:</h4>
                </div>
                <input autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Center"></input>
            </div>
        </div>
    )
}