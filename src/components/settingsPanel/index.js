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

// return

// (
//     <div className="_layout_right_sidebar_wrap">
//         <div className="_editor_rightsidebar">
//             <div className="_panel_select_header">
//                 <div className="_panel_select_header_txt">
//                     <h4 className="_panel_select_header_title">Select</h4>
//                 </div>
//                 <div className="_panel_input_area">
//                     <div className="_panel_input_area_inner">
//                         <svg data-icon="Add" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2H7v5H2v2h5v5h2V9h5V7H9V2z" fill="currentColor"></path></svg>
//                         <input autocomplete="off" autocorrect="off" autocaptialize="off" spellcheck="false" data-automation-id="css-token-input" placeholder="Select a Class or Tag"></input>
//                     </div>
//                 </div>
//             </div>
//             {tools}

{/* <div className="_add_tab_elements"> */ }
{/* <div className="_add_tab_section_layout"> */ }
{/* <div className="_add_tab_section_header">
                            <div className="_add_tab_section_header_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                            </div>
                                <h4 className="_add_tab_section_header_title">Layout</h4>
                        </div>
                        <div className="_add_tab_section_list">
                            <div className="_add_tab_section_drop">
                                <h4 className="_add_tab_section_drop_title">Display:</h4>
                            </div>
                            <div className="_add_tab_section_drop_select">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Block</option>
                                    <option value="1">Grid</option>
                                    <option value="2">inline-flex</option>
                                    <option value="3">flex</option>
                                    <option value="3">inline-block</option>
                                    <option value="3">inline-grid</option>
                                </select>
                            </div>
                        </div>
                        <div className="_add_tab_section_header">
                            <div className="_add_tab_section_header_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                            </div>
                                <h4 className="_add_tab_section_header_title">Size</h4>
                        </div>
                        <div className="_add_tab_section_size">
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Width:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Auto"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Height:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Auto"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Min W:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Auto"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Max W:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Auto"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Min H:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Auto"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Max H:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Auto"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Fit:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Cover"></input>
                            </div>
                        </div> */}
{/* Margin*/ }
{/* <div className="_add_tab_section_header">
                            <div className="_add_tab_section_header_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                            </div>
                                <h4 className="_add_tab_section_header_title">Margin & Padding</h4>
                        </div>
                        <div className="_spacing">
                            <p class="_spacing_txt">Margin -</p>
                            <div className="_add_tab_section_size">
                                <div className="_add_tab_section_size_info">
                                    <div className="_add_tab_section_size_info_txt">
                                        <h4 className="_add_tab_section_drop_title">Top:</h4>
                                    </div>
                                    <input type="number" autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="0px"></input>
                                </div>
                                <div className="_add_tab_section_size_info">
                                    <div className="_add_tab_section_size_info_txt">
                                        <h4 className="_add_tab_section_drop_title">Bottom:</h4>
                                    </div>
                                    <input type="number" autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="0px"></input>
                                </div>
                                <div className="_add_tab_section_size_info">
                                    <div className="_add_tab_section_size_info_txt">
                                        <h4 className="_add_tab_section_drop_title">Left:</h4>
                                    </div>
                                    <input type="number" autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="0px"></input>
                                </div>
                                <div className="_add_tab_section_size_info">
                                    <div className="_add_tab_section_size_info_txt">
                                        <h4 className="_add_tab_section_drop_title">Right:</h4>
                                    </div>
                                    <input type="number" autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="0px"></input>
                                </div>
                            </div>
                        </div> */}
{/* Margin*/ }
{/*Padding*/ }
{/* <div className="_spacing">
                            <p class="_spacing_txt">Padding -</p>
                            <div className="_add_tab_section_size">
                                <div className="_add_tab_section_size_info">
                                    <div className="_add_tab_section_size_info_txt">
                                        <h4 className="_add_tab_section_drop_title">Top:</h4>
                                    </div>
                                    <input type="number" autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="0px"></input>
                                </div>
                                <div className="_add_tab_section_size_info">
                                    <div className="_add_tab_section_size_info_txt">
                                        <h4 className="_add_tab_section_drop_title">Bottom:</h4>
                                    </div>
                                    <input type="number" autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="0px"></input>
                                </div>
                                <div className="_add_tab_section_size_info">
                                    <div className="_add_tab_section_size_info_txt">
                                        <h4 className="_add_tab_section_drop_title">Left:</h4>
                                    </div>
                                    <input type="number" autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="0px"></input>
                                </div>
                                <div className="_add_tab_section_size_info">
                                    <div className="_add_tab_section_size_info_txt">
                                        <h4 className="_add_tab_section_drop_title">Right:</h4>
                                    </div>
                                    <input type="number" autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="0px"></input>
                                </div>
                            </div>
                        </div> */}
{/*Padding*/ }
{/* <div className="_add_tab_section_header">
                            <div className="_add_tab_section_header_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                            </div>
                                <h4 className="_add_tab_section_header_title">Position</h4>
                        </div>
                        <div className="_add_tab_section_list">
                            <div className="_add_tab_section_drop">
                                <h4 className="_add_tab_section_drop_title">Position:</h4>
                                </div><div className="_add_tab_section_drop_select">
                                    <select className="form-select" aria-label="Default select example">
                                        <option>Relative</option>
                                        <option value={2}>Static</option>
                                        <option value={3}>Absolute</option>
                                        <option value={3}>Fixed</option>
                                        <option value={3}>Sticky</option>
                                    </select>
                                </div>
                        </div> */}
{/* <div className="_add_tab_section_header">
                            <div className="_add_tab_section_header_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                            </div>
                            <h4 className="_add_tab_section_header_title">Typography</h4>
                        </div>
                        <div className="_add_tab_section_size">
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Font:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Arial"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Weight:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="400"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Size:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Auto"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Height:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="20px"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Color:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="#fff"></input>
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Align:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="Center"></input>
                            </div>
                        </div> */}
{/* <div className="_add_tab_section_header">
                            <div className="_add_tab_section_header_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                            </div>
                            <h4 className="_add_tab_section_header_title">Background</h4>
                        </div>
                        <div className="_add_background_image">
                            <div className="_add_background">
                            <div className="_add_bg">
                                <h4 className="_add_tab_section_drop_title">Image</h4>
                            </div>
                            <div className="_add_image_area">
                                <div id="_fcov_img_holder" />
                                <div class="valign upload_ad_image">
                                    <div className="btn btn-mat btn-default upload_ad_image_content">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                                        </svg>Choose Image
                                    </div>
                            </div>
                            <input type="file" name="event-cover" className="d-none" id="cover" accept="image/*" />
                            </div>
                            </div>
                            <div className="_add_bg_color">
                                <div className="_add_tab_section_size_info">
                                    <div className="_add_tab_section_size_info_txt">
                                        <h4 className="_add_tab_section_drop_title">Color:</h4>
                                    </div>
                                    <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="transparent" />
                                </div>
                            </div>
                        </div>
                        <div className="_add_tab_section_header">
                            <div className="_add_tab_section_header_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                            </div>
                                <h4 className="_add_tab_section_header_title">Borders</h4>
                        </div>
                        <div className="_add_border_properties">
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Border-radius:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="0px" />
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Border-color:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="#fff" />
                            </div>
                            <div className="_add_tab_section_size_info">
                                <div className="_add_tab_section_size_info_txt">
                                    <h4 className="_add_tab_section_drop_title">Border:</h4>
                                </div>
                                <input autoComplete="off" autoCorrect="off" autocaptialize="off" spellCheck="false" data-automation-id="css-token-input" placeholder="1px solid" />
                            </div>
                        </div> */}
{/* </div> */ }
{/* </div> */ }
//         </div>
//     </div>
// )
// }