import React from "react";
import { useNode } from "@craftjs/core";

export const SizeSettings = () => {
    const { actions: { setProp }, styles } = useNode((node) => ({
        styles: node.data.props.styles
    }));

    const handleChange = (event) => {
        const { name, value } = event.target
        setProp(props => {
            props['styles'][name] = value
        });
    }

    return (
        <div className="_panel_select_header">
            <div className="_add_tab_section_header">
                <div className="_add_tab_section_header_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                </div>
                <h4 className="_add_tab_section_header_title">Size</h4>
            </div>
            <div className="_add_tab_section_size">
                <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Width:</h4>
                    </div>
                    <input type="text" name="width" value={styles.width} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                        onChange={handleChange}></input>
                </div>
                <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Height:</h4>
                    </div>
                    <input type="text" name="height" value={styles.height} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                        onChange={handleChange}></input>
                </div>
                <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Min W:</h4>
                    </div>
                    <input type="text" name="minWidth" value={styles.minWidth} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Max W:</h4>
                    </div>
                    <input type="text" name="maxWidth" value={styles.maxWidth} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                        onChange={handleChange}></input>
                </div>
                <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Min H:</h4>
                    </div>
                    <input type="text" name="minHeight" value={styles.minHeight} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                        onChange={handleChange}></input>
                </div>
                <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Max H:</h4>
                    </div>
                    <input type="text" name="maxHeight" value={styles.maxHeight} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                        onChange={handleChange}></input>
                </div>
                <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Fit:</h4>
                    </div>
                    <input type="text" name="objectFit" value={styles.objectFit} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Cover"
                        onChange={handleChange}></input>
                </div>
            </div>
        </div>
    )
}