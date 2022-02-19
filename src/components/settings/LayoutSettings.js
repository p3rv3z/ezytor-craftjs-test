import React from "react";
import { useNode } from "@craftjs/core";

export const LayoutSettings = () => {
    const { actions: { setProp }, styles } = useNode((node) => ({
        styles: node.data.props.styles,
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
                <h4 className="_add_tab_section_header_title">Layout</h4>
            </div>
            <div className="_add_tab_section_size">
                <div className="_add_tab_section_size_info">
                    <div className="_add_tab_section_size_info_txt">
                        <h4 className="_add_tab_section_drop_title">Display:</h4>
                    </div>
                    <div className="_add_tab_section_drop_select">
                        <select name="display" onChange={handleChange} class="form-select" aria-label="Default select example">
                            <option value="block" selected={styles.display == 'block'}>Block</option>
                            <option value="grid" selected={styles.display == 'grid'}>Grid</option>
                            <option value="inline-flex" selected={styles.display == 'inline-flex'}>Inline-flex</option>
                            <option value="flex" selected={styles.display == 'flex'}>Flex</option>
                            <option value="inline-block" selected={styles.display == 'inline-block'}>Inline-block</option>
                            <option value="inline-grid" selected={styles.display == 'inline-grid'}>Inline-grid</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}