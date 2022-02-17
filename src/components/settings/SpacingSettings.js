import React from "react";
import { useNode } from "@craftjs/core";

export const SpacingSettings = () => {
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
                <h4 className="_add_tab_section_header_title">Spacing</h4>
            </div>
            <div className="_spacing">
                <p class="_spacing_txt">Padding -</p>
                <div className="_add_tab_section_size">
                    <div className="_add_tab_section_size_info">
                        <div className="_add_tab_section_size_info_txt">
                            <h4 className="_add_tab_section_drop_title">Top:</h4>
                        </div>
                        <input type="text" name="paddingTop" value={styles.paddingTop} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                            onChange={handleChange}></input>
                    </div>
                    <div className="_add_tab_section_size_info">
                        <div className="_add_tab_section_size_info_txt">
                            <h4 className="_add_tab_section_drop_title">Bottom:</h4>
                        </div>
                        <input type="text" name="paddingBottom" value={styles.paddingBottom} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                            onChange={handleChange}></input>
                    </div>
                    <div className="_add_tab_section_size_info">
                        <div className="_add_tab_section_size_info_txt">
                            <h4 className="_add_tab_section_drop_title">Left:</h4>
                        </div>
                        <input type="text" name="paddingLeft" value={styles.paddingLeft} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="_add_tab_section_size_info">
                        <div className="_add_tab_section_size_info_txt">
                            <h4 className="_add_tab_section_drop_title">Right:</h4>
                        </div>
                        <input type="text" name="paddingRight" value={styles.paddingRight} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                            onChange={handleChange}></input>
                    </div>
                </div>
            </div>
            <div className="_spacing">
                <p class="_spacing_txt">Margin -</p>
                <div className="_add_tab_section_size">
                    <div className="_add_tab_section_size_info">
                        <div className="_add_tab_section_size_info_txt">
                            <h4 className="_add_tab_section_drop_title">Top:</h4>
                        </div>
                        <input type="text" name="marginTop" value={styles.marginTop} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                            onChange={handleChange}></input>
                    </div>
                    <div className="_add_tab_section_size_info">
                        <div className="_add_tab_section_size_info_txt">
                            <h4 className="_add_tab_section_drop_title">Bottom:</h4>
                        </div>
                        <input type="text" name="marginBottom" value={styles.marginBottom} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                            onChange={handleChange}></input>
                    </div>
                    <div className="_add_tab_section_size_info">
                        <div className="_add_tab_section_size_info_txt">
                            <h4 className="_add_tab_section_drop_title">Left:</h4>
                        </div>
                        <input type="text" name="marginLeft" value={styles.marginLeft} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="_add_tab_section_size_info">
                        <div className="_add_tab_section_size_info_txt">
                            <h4 className="_add_tab_section_drop_title">Right:</h4>
                        </div>
                        <input type="text" name="marginRight" value={styles.marginRight} autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Auto"
                            onChange={handleChange}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}