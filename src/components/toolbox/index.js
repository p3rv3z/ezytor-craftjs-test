import React from 'react';
import { Element, useEditor } from "@craftjs/core";
import { Heading } from '../elements/heading';
import { Paragraph } from '../elements/paragraph';
import { Container } from '../elements/container/Container';
import { Div } from '../elements/div';
import { List } from '../elements/list';
import { ListItem } from '../elements/listItem';
import { Button } from '../elements/button';
// import { Section } from '../elements/Section';
import { Section } from '../elements/Section';
import { Colums } from '../elements/ColumSection';


function Toolbox() {
    const { connectors, query } = useEditor();

    return (
        <div className="_layout_left_sidebar_wrap">
            <div className="_editor_leftsidebar">
                <div className="_panel_header">
                    <div className="_panel_header_title">
                        <h4 className="_panel_header_title_txt">Add</h4>
                    </div>
                    <div className="_panel_header_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-opacity="0.7" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </div>
                </div>
                <div className="_panel_btn_group">
                    <div className="_panel_btn_tab">
                        <button type="_submit" className="__panel_btn_link __panel_btn_link_active">
                            Elements
                        </button>
                        <div className="_add_tab_elements_container">
                            <div className="_add_tab_section_layout">
                                <div className="_add_tab_section_header">
                                    <div className="_add_tab_section_header_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                                    </div>
                                    <h4 className="_add_tab_section_header_title">Layout</h4>
                                </div>
                                <div className="_add_tab_section_layout_wrap">
                                    <div className="_add_tab_section_layout_inner" ref={ref => connectors.create(ref, <Element is={Section} id="section" canvas />)}>
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="62" height="50" viewBox="0 0 62 50" class="bem-Svg">
                                                <path opacity=".25" fill="#fff" d="M59 1H3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM14.5 3c.8 0 1.5.7 1.5 1.5S15.3 6 14.5 6 13 5.3 13 4.5 13.7 3 14.5 3zm-5 0c.8 0 1.5.7 1.5 1.5S10.3 6 9.5 6 8 5.3 8 4.5 8.7 3 9.5 3zm-5 0C5.3 3 6 3.7 6 4.5S5.3 6 4.5 6 3 5.3 3 4.5 3.7 3 4.5 3zM59 47H3V8h56v39z"></path><path opacity=".7" fill="#fff" d="M5 10h52v16H5z">
                                                </path><g fill="#fff"><path d="M5 10h2v4H5zm50 0h2v4h-2zM7 10h2v2H7zm16 0h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zM23 24h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm6-14h4v2h-4zm0 14h4v2h-4z"></path>
                                                    <path d="M53 10h4v2h-4zm2 12h2v4h-2zM5 22h2v4H5zm0-6h2v4H5zm50 0h2v4h-2zm-2 8h2v2h-2z"></path><path d="M5 24h4v2H5z"></path></g>
                                                <g opacity=".7" fill="#fff"><path d="M5 29h2v4H5zm50 0h2v4h-2zM7 29h2v2H7zm16 0h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zM23 43h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm6-14h4v2h-4zm0 14h4v2h-4z"></path><path d="M53 29h4v2h-4zm2 12h2v4h-2zM5 41h2v4H5zm0-6h2v4H5zm50 0h2v4h-2zm-2 8h2v2h-2z"></path><path d="M5 43h4v2H5z"></path></g><path opacity=".4" d="M57 10v16H5V10h52m1-1H4v18h54V9z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt" >
                                            <p className="_add_tab_icon_txt_para">Section</p>
                                        </div>
                                    </div>
                                    <div className="_add_tab_section_layout_inner" ref={ref => connectors.create(ref, <Element is={Container} id="container" canvas />)}>
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="62" height="50" viewBox="0 0 62 50" class="bem-Svg"><path opacity=".2" fill="#fff" d="M14 10h34v34H14z"></path><g fill="currentColor"><path d="M14 10h2v4h-2zm32 0h2v4h-2zm-30 0h2v2h-2zm10 0h4v2h-4zm-6 0h4v2h-4zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2h-4zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M44 10h4v2h-4zm2 30h2v4h-2zm-32 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm32 6h2v4h-2zm-32 6h2v4h-2zm32 0h2v4h-2zm-32 6h2v4h-2zm32 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M14 42h4v2h-4z"></path></g><path opacity=".25" fill="#fff" d="M59 1H3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM14.5 3c.8 0 1.5.7 1.5 1.5S15.3 6 14.5 6 13 5.3 13 4.5 13.7 3 14.5 3zm-5 0c.8 0 1.5.7 1.5 1.5S10.3 6 9.5 6 8 5.3 8 4.5 8.7 3 9.5 3zm-5 0C5.3 3 6 3.7 6 4.5S5.3 6 4.5 6 3 5.3 3 4.5 3.7 3 4.5 3zM59 47H3V8h56v39z"></path><path opacity=".4" d="M48 10v34H14V10h34m1-1H13v36h36V9z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Container</p>
                                        </div>
                                    </div>
                                    <div className="_add_tab_section_layout_inner" ref={ref => connectors.create(ref, <Element is={Colums} id="section" canvas />)}>
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="62" height="50" viewBox="0 0 62 50" class="bem-Svg"><path opacity=".2" fill="#fff" d="M14 10h16v34H14zm19 0h16v34H33z"></path><g fill="currentColor"><path d="M14 10h2v4h-2zm14 0h2v4h-2zm-12 0h2v2h-2zm4 0h4v2h-4zm0 32h4v2h-4z"></path><path d="M26 10h4v2h-4zm2 30h2v4h-2zm-14 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm14 6h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M14 42h4v2h-4zm19-32h2v4h-2zm14 0h2v4h-2zm-12 0h2v2h-2zm4 0h4v2h-4zm0 32h4v2h-4z"></path><path d="M45 10h4v2h-4zm2 30h2v4h-2zm-14 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm14 6h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M33 42h4v2h-4z"></path></g><path opacity=".25" fill="#fff" d="M59 1H3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM14.5 3c.8 0 1.5.7 1.5 1.5S15.3 6 14.5 6 13 5.3 13 4.5 13.7 3 14.5 3zm-5 0c.8 0 1.5.7 1.5 1.5S10.3 6 9.5 6 8 5.3 8 4.5 8.7 3 9.5 3zm-5 0C5.3 3 6 3.7 6 4.5S5.3 6 4.5 6 3 5.3 3 4.5 3.7 3 4.5 3zM59 47H3V8h56v39z"></path><path opacity=".4" d="M30 10v34H14V10h16m1-1H13v36h18V9zm18 1v34H33V10h16m1-1H32v36h18V9z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Columns</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="_add_tab_section_layout">
                                <div className="_add_tab_section_header">
                                    <div className="_add_tab_section_header_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                                    </div>
                                    <h4 className="_add_tab_section_header_title">Basic</h4>
                                </div>
                                <div className="_add_tab_section_layout_wrap">
                                    <div ref={ref => connectors.create(ref, <Element is={Div} id="div" canvas />)} className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="36" height="36" viewBox="0 0 36 36" class="bem-Svg"><path opacity=".2" fill="#fff" d="M1 1h34v34H1z"></path><g fill="#fff"><path d="M1 1h2v4H1zm32 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M31 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm32 6h2v4h-2zM1 19h2v4H1zm32 0h2v4h-2zM1 25h2v4H1zm32 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M1 33h4v2H1z"></path></g><path opacity=".4" d="M35 1v34H1V1h34m1-1H0v36h36V0z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Div Block</p>
                                        </div>
                                    </div>
                                    <div ref={ref => connectors.create(ref, <Element
                                        is={List}
                                        id="list" 
                                        children={
                                            [
                                            <Element is={ListItem} id="listItem" key='li1' canvas />,
                                            <Element is={ListItem} id="listItem" key='li2' canvas />,
                                            <Element is={ListItem} id="listItem" key='li3' canvas />,
                                            ]} canvas />)} className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="48" height="36" viewBox="0 0 48 36" class="bem-Svg"><path opacity=".2" fill="#fff" d="M1 1h46v34H1z"></path><g fill="currentColor"><path d="M1 1h2v4H1zm44 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M43 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm44 6h2v4h-2zM1 19h2v4H1zm44 0h2v4h-2zM1 25h2v4H1zm44 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M1 33h4v2H1z"></path></g><path opacity=".5" fill="#fff" d="M18 14v-4h20v4H18m-2-6v8h24V8M18 26v-4h20v4H18m-2-6v8h24v-8"></path><circle fill="currentColor" cx="10" cy="12" r="2" opacity=".5"></circle><circle fill="#fff" cx="10" cy="24" r="2" opacity=".5"></circle><path opacity=".4" d="M47 1v34H1V1h46m1-1H0v36h48V0z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">List</p>
                                        </div>
                                    </div>
                                    <div ref={ref => connectors.create(ref, <Element is={ListItem} id="listItem" canvas />)} className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="48" height="36" viewBox="0 0 48 36" class="bem-Svg"><g opacity=".3" fill="#fff"><path d="M1 1h2v4H1zm44 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M43 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm44 6h2v4h-2zM1 19h2v4H1zm44 0h2v4h-2zM1 25h2v4H1zm44 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M1 33h4v2H1z"></path></g><circle cx="9" cy="12" r="3" opacity=".4"></circle><circle fill="#fff" cx="9" cy="12" r="2"></circle><circle cx="9" cy="24" r="3" opacity=".4"></circle><circle fill="#fff" cx="9" cy="24" r="2"></circle><path fill="#fff" d="M38 10v4H18v-4h20m2-2H16v8h24V8z"></path><path opacity=".2" fill="#fff" d="M18 10h20v4H18z"></path><path opacity=".4" d="M40 8v8H16V8h24m1-1H15v10h26V7z"></path><path fill="#fff" d="M38 22v4H18v-4h20m2-2H16v8h24v-8z"></path><path opacity=".2" fill="#fff" d="M18 22h20v4H18z"></path><path opacity=".4" d="M40 20v8H16v-8h24m1-1H15v10h26V19z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">List Item</p>
                                        </div>
                                    </div>
                                    <div className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="36" height="36" viewBox="0 0 36 36" class="bem-Svg"><path opacity=".2" fill="#fff" d="M1 1h34v34H1z"></path><g fill="#fff"><path d="M1 1h2v4H1zm32 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z"></path><path d="M31 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm32 6h2v4h-2zM1 19h2v4H1zm32 0h2v4h-2zM1 25h2v4H1zm32 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z"></path><path d="M1 33h4v2H1z"></path></g><path opacity=".4" d="M35 1v34H1V1h34m1-1H0v36h36V0z"></path><path opacity=".5" fill="#fff" d="M13.6 27c-1.2 0-2.4-.5-3.2-1.3-.9-.9-1.3-2-1.3-3.2 0-1.2.5-2.4 1.3-3.2l3.2-3.2c.3-.3.7-.6 1-.8.7-.4 1.4-.6 2.2-.6 1.5 0 2.8.7 3.7 1.9l-1.3 1.3c-.5-.8-1.4-1.4-2.4-1.4-.2 0-.4 0-.6.1-.5.1-1 .4-1.3.7l-3.2 3.2c-.5.5-.8 1.2-.8 2 0 .7.3 1.4.8 2 .5.5 1.2.8 2 .8.7 0 1.4-.3 2-.8l.9-.9c.7.3 1.4.4 2.2.4L17 25.8c-1.1.7-2.2 1.2-3.4 1.2zm5.1-5.1c-.4 0-.7 0-1.1-.1-.8-.2-1.6-.6-2.2-1.2l-.5-.5 1.3-1.3c.1.2.3.4.4.5.5.5 1.2.8 2 .8.7 0 1.4-.3 2-.8l3.2-3.2c.5-.5.8-1.2.8-2 0-.7-.3-1.4-.8-2-.5-.5-1.2-.8-2-.8-.7 0-1.4.3-2 .8l-.7.9c-.7-.3-1.4-.4-2.2-.4l1.8-1.8c.9-.9 2-1.3 3.2-1.3 1.2 0 2.4.5 3.2 1.3.9.9 1.3 2 1.3 3.2s-.5 2.4-1.3 3.2l-3.2 3.2c-.3.3-.7.6-1 .8-.7.5-1.4.7-2.2.7z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Link Block</p>
                                        </div>
                                    </div>
                                    <div ref={ref => connectors.create(ref, <Button text="Button" />)} className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="59" height="31" viewBox="0 0 59 31" class="bem-Svg"><path opacity=".4" d="M56 0H3C1.3 0 0 1.3 0 3v25c0 1.7 1.3 3 3 3h53c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z"></path><path fill="#fff" d="M10 16.7H8.8v1.6H10c.6 0 .8-.4.8-.8s-.2-.8-.8-.8zm29.8-2.9c-1.2 0-2.1 1-2.1 2.3 0 1.3.9 2.4 2.1 2.4 1.2 0 2.1-1 2.1-2.4.1-1.4-.9-2.3-2.1-2.3zm-29.3.7c0-.4-.2-.7-.7-.7h-1v1.4h1c.5 0 .7-.4.7-.7zM56 1H3c-1.1 0-2 .9-2 2v25c0 1.1.9 2 2 2h53c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM9.8 20H6.9v-7.9h2.9c1.6 0 2.7.7 2.7 2.1 0 .7-.3 1.3-.9 1.7.9.3 1.2 1.1 1.2 1.8 0 1.7-1.4 2.3-3 2.3zm10.8-2.9c0 1.8-1.3 3-3.3 3-2 0-3.3-1.3-3.3-3v-5h2v5c0 .8.5 1.3 1.4 1.3s1.4-.4 1.4-1.3v-5h1.9v5zm7.6-3.3h-2.4V20h-1.9v-6.2h-2.4v-1.7h6.7v1.7zm7.1 0h-2.4V20H31v-6.2h-2.4v-1.7h6.7v1.7zm4.5 6.3c-2.4 0-4.1-1.8-4.1-4.1s1.7-4 4.1-4c2.4 0 4.1 1.8 4.1 4 .1 2.3-1.7 4.1-4.1 4.1zm12.1-.1H50l-2.2-3.7c-.3-.5-.7-1.3-.7-1.3s.1.8.1 1.3V20h-1.9v-7.9h1.9l2.2 3.7c.3.5.7 1.3.7 1.3s-.1-.8-.1-1.3v-3.7h1.9V20z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Button</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="_add_tab_section_layout">
                                <div className="_add_tab_section_header">
                                    <div className="_add_tab_section_header_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                                    </div>
                                    <h4 className="_add_tab_section_header_title">Typography</h4>
                                </div>
                                <div className="_add_tab_section_layout_wrap">
                                    <div className="_add_tab_section_layout_inner" ref={ref => connectors.create(ref, <Heading />)}>
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="60" height="32" viewBox="0 0 60 32" class="bem-Svg"><path opacity=".4" d="M6.9 5.5H4V1.2H.4V13H4V9h2.9v4h3.7V1.2H6.9v4.3zm26.6-1.8c-.4-.2-.9-.2-1.4-.2-1.3 0-2.4.4-3.3 1.3-.5.5-.9 1.1-1.1 1.8-.1-1-.5-1.7-1.2-2.2-.7-.6-1.7-.9-2.8-.9-1.4 0-2.6.4-3.7 1.3l-.7.6.6.8.7 1-.2.1c-.2.1-.3.2-.4.3-.1-1.2-.5-2.2-1.4-3-.9-.8-2-1.2-3.2-1.2-1.3 0-2.4.4-3.3 1.3-1 .9-1.4 2.1-1.4 3.5 0 1.5.5 2.6 1.4 3.5.9.9 2 1.3 3.4 1.3 1.6 0 2.9-.5 3.9-1.6l.3-.3V11c.2.4.4.8.8 1 .7.6 1.6.9 2.6.9.5 0 1-.1 1.5-.2v.3H28v-2.9c-.1-.2-.1-.4-.1-.5.2.9.6 1.6 1.2 2.2.9.9 2 1.4 3.2 1.4.6 0 1.1-.1 1.5-.3v.1H37V.6h-3.6v3.1zm-14.4 6.4L19 10h.1v-.3c0 .2 0 .4.1.6 0 0-.1-.1-.1-.2zm4.2-.3c-.3 0-.5-.1-.6-.1.1 0 .3-.1.7-.1h.6c-.3.1-.5.2-.7.2zm9.8-.4c-.2.3-.5.4-.8.4-.4 0-.6-.1-.9-.4-.3-.3-.4-.6-.4-1 0-.5.1-.8.4-1.1.3-.3.5-.4.9-.4.3 0 .6.1.8.4.3.3.4.6.4 1.1 0 .4-.1.7-.4 1zM40.5 1c-.4-.4-.9-.6-1.4-.6-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4 0 .4.1.8.4 1.2h-.2V13h3.6V3.6h-.2c.3-.3.4-.7.4-1.2 0-.6-.2-1.1-.6-1.4zm15 2.6v.1c-.4-.2-.9-.2-1.4-.2-1.3 0-2.3.5-3.2 1.4-.5.5-.8 1.1-1 1.8-.1-.8-.5-1.5-1-2.1-.7-.7-1.6-1.1-2.7-1.1-.5 0-1 .1-1.5.3v-.2h-3.6V13h3.6V8c0-.6.2-.8.3-.8.2-.2.5-.3.7-.3.4 0 .7 0 .7 1.1v5H50V9.8c-.1-.2-.1-.3-.1-.5.2.8.5 1.5 1.1 2.1.1.2.3.3.5.4l-.3.5-.7 1.2-.5.8.7.6c1.1.8 2.3 1.3 3.7 1.3 1.4 0 2.5-.4 3.4-1.3.9-.9 1.4-2.1 1.4-3.7V3.6h-3.7zm-.3 5.3c-.2.2-.5.3-.8.3-.4 0-.6-.2-.8-.3-.2-.3-.3-.6-.3-.9 0-.4.1-.7.3-1 .2-.2.4-.3.7-.3.4 0 .6.1.8.3.2.3.3.6.3 1 .1.4 0 .7-.2.9z"></path><g fill="#fff"><path d="M1.4 12V2.2H3v4.2h4.9V2.2h1.7V12H7.9V8H3v4H1.4z"></path><path d="M1.4 12V2.2H3v4.2h4.9V2.2h1.7V12H7.9V8H3v4H1.4zm17.5-3h-5.8c0 .5.3 1 .7 1.3.5.3 1 .5 1.6.5.9 0 1.6-.3 2.1-.9l.9 1c-.8.8-1.8 1.2-3.1 1.2-1 0-1.9-.3-2.7-1s-1.1-1.6-1.1-2.8c0-1.2.4-2.1 1.1-2.8.7-.7 1.6-1 2.6-1s1.9.3 2.6.9 1.1 1.5 1.1 2.5V9zm-5.8-1.3h4.3c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.4-.5s-1.2.2-1.6.5c-.5.4-.7.8-.7 1.4z"></path><path d="M18.9 9h-5.8c0 .5.3 1 .7 1.3.5.3 1 .5 1.6.5.9 0 1.6-.3 2.1-.9l.9 1c-.8.8-1.8 1.2-3.1 1.2-1 0-1.9-.3-2.7-1s-1.1-1.6-1.1-2.8c0-1.2.4-2.1 1.1-2.8.7-.7 1.6-1 2.6-1s1.9.3 2.6.9 1.1 1.5 1.1 2.5V9zm-5.8-1.3h4.3c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.4-.5s-1.2.2-1.6.5c-.5.4-.7.8-.7 1.4zM26.7 12h-1.4v-1c-.6.7-1.4 1.1-2.5 1.1-.8 0-1.4-.2-1.9-.7s-.8-1-.8-1.8.3-1.3.8-1.6c.5-.4 1.3-.5 2.2-.5h2v-.3c0-1-.6-1.5-1.7-1.5-.7 0-1.4.3-2.2.8l-.7-1c.9-.7 1.9-1.1 3.1-1.1.9 0 1.6.2 2.1.7s.8 1.1.8 2.1V12zm-1.6-2.8v-.6h-1.8c-1.1 0-1.7.4-1.7 1.1 0 .4.1.6.4.8.3.2.7.3 1.2.3s.9-.1 1.3-.4c.4-.3.6-.7.6-1.2z"></path><path d="M26.7 12h-1.4v-1c-.6.7-1.4 1.1-2.5 1.1-.8 0-1.4-.2-1.9-.7s-.8-1-.8-1.8.3-1.3.8-1.6c.5-.4 1.3-.5 2.2-.5h2v-.3c0-1-.6-1.5-1.7-1.5-.7 0-1.4.3-2.2.8l-.7-1c.9-.7 1.9-1.1 3.1-1.1.9 0 1.6.2 2.1.7s.8 1.1.8 2.1V12zm-1.6-2.8v-.6h-1.8c-1.1 0-1.7.4-1.7 1.1 0 .4.1.6.4.8.3.2.7.3 1.2.3s.9-.1 1.3-.4c.4-.3.6-.7.6-1.2zm4.4 1.8c-.7-.7-1-1.6-1-2.8s.4-2.1 1.1-2.8c.7-.7 1.6-1 2.6-1s1.8.4 2.4 1.3V1.6H36V12h-1.6v-1.1c-.6.8-1.4 1.2-2.5 1.2-.9 0-1.7-.3-2.4-1.1zm.5-2.7c0 .7.2 1.3.7 1.7.5.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.4-.5.6-1 .6-1.7s-.2-1.3-.6-1.8c-.4-.5-1-.7-1.6-.7s-1.2.2-1.7.7c-.4.5-.6 1.1-.6 1.8z"></path><path d="M29.5 11c-.7-.7-1-1.6-1-2.8s.4-2.1 1.1-2.8c.7-.7 1.6-1 2.6-1s1.8.4 2.4 1.3V1.6H36V12h-1.6v-1.1c-.6.8-1.4 1.2-2.5 1.2-.9 0-1.7-.3-2.4-1.1zm.5-2.7c0 .7.2 1.3.7 1.7.5.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.7.4-.5.6-1 .6-1.7s-.2-1.3-.6-1.8c-.4-.5-1-.7-1.6-.7s-1.2.2-1.7.7c-.4.5-.6 1.1-.6 1.8zm8.4-5.2c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.5 8.9h-1.6V4.6h1.6V12z"></path><path d="M38.4 3.1c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.5 8.9h-1.6V4.6h1.6V12zm3.8-4v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8.6.4.9 1.2.9 2.1V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.4.5-.6 1-.6 1.7z"></path><path d="M43.7 8v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8.6.4.9 1.2.9 2.1V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.4.5-.6 1-.6 1.7zm14.4-3.4V11c0 1.3-.4 2.3-1.1 3s-1.6 1-2.8 1-2.1-.3-3-1l.7-1.2c.7.6 1.5.8 2.2.8.7 0 1.3-.2 1.8-.6s.7-1 .7-1.8v-1c-.2.4-.6.8-1 1.1-.4.3-.9.4-1.5.4-1 0-1.8-.3-2.4-1-.6-.7-1-1.5-1-2.6 0-1 .3-1.9 1-2.6.6-.7 1.4-1 2.4-1s1.8.4 2.4 1.2V4.6h1.6zM52.2 8c0 .6.2 1.1.6 1.6s.9.7 1.5.7 1.2-.2 1.6-.6c.4-.4.6-1 .6-1.6 0-.6-.2-1.2-.6-1.6s-.9-.8-1.6-.8-1.1.2-1.5.7c-.4.4-.6 1-.6 1.6z"></path><path d="M58.1 4.6V11c0 1.3-.4 2.3-1.1 3s-1.6 1-2.8 1-2.1-.3-3-1l.7-1.2c.7.6 1.5.8 2.2.8.7 0 1.3-.2 1.8-.6s.7-1 .7-1.8v-1c-.2.4-.6.8-1 1.1-.4.3-.9.4-1.5.4-1 0-1.8-.3-2.4-1-.6-.7-1-1.5-1-2.6 0-1 .3-1.9 1-2.6.6-.7 1.4-1 2.4-1s1.8.4 2.4 1.2V4.6h1.6zM52.2 8c0 .6.2 1.1.6 1.6s.9.7 1.5.7 1.2-.2 1.6-.6c.4-.4.6-1 .6-1.6 0-.6-.2-1.2-.6-1.6s-.9-.8-1.6-.8-1.1.2-1.5.7c-.4.4-.6 1-.6 1.6z"></path></g><path fill="#fff" d="M1 17v2h57v-2H1zm55 4H1v2h55v-2zM1 27h56v-2H1v2zm0 4h27v-2H1v2z" opacity=".25"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para"  >Heading</p>
                                        </div>
                                    </div>
                                    <div className="_add_tab_section_layout_inner" ref={ref => connectors.create(ref, <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />)}>
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="59" height="16" viewBox="0 0 59 16" class="bem-Svg"><path opacity=".4" d="M0 0v16h29v-4h29V8h-1V4h2V0H0zm1 7h55H1zm57-4H1h57z"></path><path fill="#fff" d="M1 1v2h57V1H1zm55 4H1v2h55V5zM1 11h56V9H1v2zm0 4h27v-2H1v2z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Paragraph</p>
                                        </div>
                                    </div>
                                    <div className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="31" height="19" viewBox="0 0 31 19" class="bem-Svg"><path opacity=".4" d="M11.3 1c-.4-.4-.9-.6-1.4-.6-.5 0-1 .2-1.4.6-.4.3-.6.8-.6 1.4 0 .4.1.8.4 1.2h-.2v5.9H4V1.2H.4V13h11.3V3.6h-.2c.3-.3.4-.7.4-1.2-.1-.6-.3-1.1-.6-1.4zm-3.8 9.4H3V2.2H1.4V12 2.2H3v8.2h4.5zm2.9-7.3c-.2.1-.4.2-.6.2.3.1.5 0 .6-.2zM9.2 1.7c.1-.1.2-.1.2-.2-.1 0-.2.1-.2.2zm0 1.4c.2.2.3.2.5.3-.2-.1-.4-.2-.5-.3-.1-.1-.2-.2-.2-.3 0 .1.1.2.2.3zm1.4 1.5H9.1V12 4.6h1.5zm.1-1.7c.1-.2.2-.3.2-.5s-.1-.4-.2-.6c.1.2.2.3.2.5-.1.3-.1.4-.2.6zm6.2.5c-.5 0-1 .1-1.5.3v-.1h-3.6V13h3.6V8c0-.6.2-.8.3-.8.2-.2.5-.3.7-.3.4 0 .7 0 .7 1.1v5h3.6V7.4c0-1.2-.4-2.2-1.1-2.9-.6-.7-1.6-1.1-2.7-1.1zm-2.4 1.2h-1.6V12 4.6h1.6zm0 1.3c.1-.2.2-.4.4-.5-.2.1-.3.3-.4.5zm2 0c-.4 0-.7.1-1 .3.2-.3.6-.3 1-.3s.8.1 1.1.3c-.3-.2-.7-.3-1.1-.3zm2.5-.7c.2.2.3.3.4.5-.1-.2-.3-.3-.4-.5zm8 2.4l2.3-2.4 1.6-1.7h-4.8l-.3.3-1.3 1.4V.6h-3.6V13h3.6v-2.7l1.5 2.2.3.4h4.3l-1.1-1.6L27 7.6zm-3.5-6v6.1-6.1zm0 8.3V12 9.9zm1.1-1.2l.9 1.4-.9-1.4zm.2-2.3l1.7-1.8h2-2l-1.7 1.8z"></path><g fill="#fff"><path d="M1.4 12V2.2H3v8.2h4.5V12H1.4z"></path><path d="M1.4 12V2.2H3v8.2h4.5V12H1.4zm7.8-8.9c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.4 8.9H9.1V4.6h1.6V12z"></path><path d="M9.2 3.1c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.4 8.9H9.1V4.6h1.6V12zm3.9-4v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8s.8 1.3.8 2.2V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.3.5-.5 1-.5 1.7z"></path><path d="M14.5 8v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8s.8 1.3.8 2.2V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.3.5-.5 1-.5 1.7zm9 4h-1.6V1.6h1.6v6.1l3-3.2h2l-2.8 3 3 4.5h-1.9l-2.2-3.3-1.1 1.1V12z"></path><path d="M23.5 12h-1.6V1.6h1.6v6.1l3-3.2h2l-2.8 3 3 4.5h-1.9l-2.2-3.3-1.1 1.1V12z"></path></g><g opacity=".4"><path d="M1 18v-2h29v2H1m30-3H0v4h31v-4"></path><path d="M1 16h29v2H1z"></path></g><path fill="currentColor" d="M1 16h29v2H1z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Text Link</p>
                                        </div>
                                    </div>
                                    <div className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="33" height="13" viewBox="0 0 33 13" class="bem-Svg"><path opacity=".4" d="M10 .2H.4v3.5h3V12h3.7V3.7h3V.2zm22.4 9.7l-.6-1.1-.7-1.2-.9 1-.2.2v-3h2V2.6h-2V.2h-3.6v2.3H23l-.3.5-.8 1.2-.8-1.2-.3-.5h-4.4l.8 1.2-.2-.2c-.9-.8-2-1.2-3.2-1.2-1.3 0-2.4.4-3.3 1.3-1 .9-1.4 2.1-1.4 3.5 0 1.5.5 2.6 1.4 3.5.9.9 2.1 1.3 3.4 1.3 1.1 0 2.1-.3 2.9-.8l-.5.9h4.3l.3-.4.9-1.3 1 1.3.3.4h4.4l-1.1-1.6L24 7.2l1.3-1.8v.5h.9v2.7c0 1.1.3 1.9 1 2.6.7.6 1.5 1 2.4 1 .9 0 1.8-.3 2.5-1l.6-.5-.3-.8zM18 9.5l-.3-.3-.2-.2h.9l-.4.5zm.5-.7V6.9c0-.7-.1-1.3-.3-1.8l1.5 2.2-1.2 1.5zm6.8-5.2l-2.5 3.6 2.5-3.6z"></path><path d="M6.1 2.7V11H4.4V2.7h-3V1.2H9v1.5H6.1zM17.5 8h-5.8c0 .5.3 1 .7 1.3.5.3 1 .5 1.6.5.9 0 1.6-.3 2.1-.9l.9 1c-.8.8-1.8 1.2-3.1 1.2-1 0-1.9-.3-2.7-1s-1.1-1.6-1.1-2.8c0-1.2.4-2.1 1.1-2.8.7-.7 1.6-1 2.6-1s1.9.3 2.6.9 1.1 1.5 1.1 2.5V8zm-5.8-1.3H16c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.5-.5s-1.1.2-1.5.5c-.5.4-.7.8-.7 1.4zm8.6-3.1L21.9 6l1.7-2.5h1.9l-2.6 3.6 2.7 3.8h-1.9l-1.8-2.5-1.8 2.6h-1.8l2.6-3.8-2.5-3.7h1.9zm8.5 1.2v3.8c0 .4.1.6.3.8.2.2.4.3.8.3s.7-.2 1-.5l.6 1.1c-.6.5-1.2.7-1.8.7-.7 0-1.2-.2-1.7-.7-.5-.5-.7-1.1-.7-1.9V4.8h-.9V3.6h.9V1.2h1.6v2.3h2v1.3h-2.1z" fill="#fff"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Text Block</p>
                                        </div>
                                    </div>
                                    <div className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="56" height="29" viewBox="0 0 56 29" class="bem-Svg"><path opacity=".4" d="M56 17v-4h-2V9H22v8H0v12h36v-4h19v-4h-1v-4h2zm-1-3v2-2zm-32 0v2-2zm-4.1 2l.8.2.3-.7.8-1.7.5-1-1-.4c-1.1-.4-2-1.3-2.4-2.3H21V0H11v6.5c0 4.9 3 8.5 7.9 9.5zm-2.2-7H20h-3.3zm-8.8 7l.8.2.3-.8.8-1.7.5-1-1-.4c-1.1-.4-2-1.3-2.4-2.3H10V0H0v6.5C0 11.4 3 15 7.9 16zm1-2.7l-.5 1 .5-1C7.7 12.8 6.7 12 6.2 11c.5 1 1.5 1.8 2.7 2.3zM5.7 9H9V1v8H5.7z"></path><path fill="#fff" d="M23 14v2h32v-2H23zm30 4H1v2h52v-2zm0-8H23v2h30v-2zM1 24h53v-2H1v2zm0 4h34v-2H1v2zM1 6.5c0 4.6 2.9 7.7 7.1 8.5l.8-1.7c-2-.8-3.2-2.5-3.2-4.3H9V1H1v5.5zM20 1h-8v5.5c0 4.6 2.9 7.7 7.1 8.5l.8-1.7c-1.9-.7-3.2-2.5-3.2-4.3H20V1z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Block Quote</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="_add_tab_section_layout">
                                <div className="_add_tab_section_header">
                                    <div className="_add_tab_section_header_icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                                    </div>
                                    <h4 className="_add_tab_section_header_title">Media</h4>
                                </div>
                                <div className="_add_tab_section_layout_wrap">
                                    <div className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="50" height="37" viewBox="0 0 50 37" class="bem-Svg"><path opacity=".4" d="M47 0H3C1.3 0 0 1.3 0 3v31c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm0 36H3c-.8 0-1.4-.5-1.8-1.1.4.6 1 1.1 1.8 1.1h44zM16 12.5c0 1.4-1.1 2.5-2.5 2.5S11 13.9 11 12.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5zm-3.9 3.2s-.1 0-.1-.1l.1.1zm11.2 8.4l.7-.8 6.9-7.9 9 13.7H12.4l7.5-8.5 2.7 2.7.7.8zM41.8 30l-8.4-12.7L41.8 30zm-18.5-7.4l3.5-4-3.5 4zm-3.4-3.5l-4.4 5 4.4-5 1 1-1-1zM13.5 9c-1.9 0-3.5 1.6-3.5 3.5 0 1.2.6 2.3 1.5 2.9-.9-.6-1.5-1.7-1.5-2.9 0-1.9 1.6-3.5 3.5-3.5.5 0 .9.1 1.4.3-.5-.2-.9-.3-1.4-.3zM49 3v-.4c-.2-.9-1-1.6-2-1.6H3h44c1 0 1.8.7 2 1.6V3z"></path><path fill="#fff" d="M47 1H3c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM13.5 9c1.9 0 3.5 1.6 3.5 3.5S15.4 16 13.5 16 10 14.4 10 12.5 11.6 9 13.5 9zm-3.3 21l9.6-10.9 3.4 3.5 7.7-8.9L41.8 30H10.2z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Image</p>
                                        </div>
                                    </div>
                                    <div className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="50" height="37" viewBox="0 0 50 37" class="bem-Svg"><path opacity=".4" d="M47 0H3C1.3 0 0 1.3 0 3v31c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-9 13.7v9.6l-6-3.4v-2.8l6-3.4zM39 25l-3.6-2 3.6 2zM13 14c0-.6.4-1 1-1h13c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1H14c-.6 0-1-.4-1-1v-9zm1 11h13c.9 0 1.7-.6 1.9-1.5-.2.8-1 1.5-1.9 1.5H14c-.6 0-1.1-.2-1.4-.6.3.4.9.6 1.4.6zm14.7-12.1c-.1-.1-.2-.2-.2-.3 0 .1.1.2.2.3.2.3.3.7.3 1.1 0-.4-.1-.8-.3-1.1zM1 3c0-.2 0-.3.1-.5-.1.2-.1.3-.1.5zm.1 31.5c-.1-.1-.1-.3-.1-.5 0 .2 0 .4.1.5z"></path><path fill="#fff" d="M47 1H3c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM29 23c0 1.1-.9 2-2 2H14c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h13c1.1 0 2 .9 2 2v9zm10 2l-8-4.5v-4l8-4.5v13z"></path></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Video</p>
                                        </div>
                                    </div>
                                    <div className="_add_tab_section_layout_inner">
                                        <div className="_add_tab_icon">
                                            <svg data-icon="index" aria-hidden="true" focusable="false" width="44" height="32" viewBox="0 0 44 32" class="bem-Svg"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M38.41 1.896C35.133 1 22 1 22 1S8.866 1 5.59 1.896c-1.806.492-3.23 1.945-3.712 3.789C1 9.027 1 16 1 16s0 6.973.878 10.315c.483 1.844 1.906 3.297 3.713 3.79C8.866 31 22 31 22 31s13.134 0 16.41-.895c1.806-.493 3.23-1.946 3.712-3.79C43 22.973 43 16 43 16s0-6.973-.878-10.315c-.483-1.844-1.906-3.297-3.713-3.79zm4.68 3.535c.292 1.114.506 2.628.657 4.456.11 1.34.182 2.77.221 4.2A88.186 88.186 0 0144 16a88.183 88.183 0 01-.032 1.912 77.52 77.52 0 01-.221 4.201c-.151 1.828-.365 3.342-.657 4.456-.573 2.188-2.264 3.913-4.417 4.5-1.357.371-4.157.611-8.063.763-1.885.074-3.902.12-5.919.147A264.24 264.24 0 0122 32c-.136 0-.389 0-.742-.003a264.24 264.24 0 01-1.95-.018 231.424 231.424 0 01-5.918-.147c-3.906-.152-6.706-.392-8.062-.763-2.154-.587-3.845-2.312-4.418-4.5-.292-1.114-.506-2.628-.657-4.456a77.52 77.52 0 01-.221-4.2A88.182 88.182 0 010 16a88.186 88.186 0 01.032-1.912c.039-1.43.11-2.862.221-4.201C.404 8.059.618 6.545.91 5.43c.573-2.188 2.264-3.913 4.417-4.5C6.684.56 9.484.32 13.39.168c1.885-.074 3.902-.12 5.919-.147A264.167 264.167 0 0122 0a264.167 264.167 0 012.691.021 227.9 227.9 0 015.919.147c3.906.152 6.705.392 8.063.763 2.153.588 3.844 2.312 4.416 4.5zM19 20.748l8.033-4.743L19 11.262v9.486zM18 22.5V9.51l11 6.495L18 22.5z" opacity=".4"></path><path fill="#fff" d="M38.41 1.896c1.806.492 3.23 1.945 3.712 3.789C43 9.027 43 16 43 16s0 6.973-.878 10.315c-.483 1.844-1.906 3.297-3.713 3.79C35.134 31 22 31 22 31s-13.134 0-16.41-.895c-1.806-.493-3.23-1.946-3.712-3.79C1 22.973 1 16 1 16s0-6.973.878-10.315C2.36 3.84 3.784 2.388 5.59 1.895 8.866 1 22 1 22 1s13.134 0 16.41.896zM18 22.5l11-6.495L18 9.51V22.5z"></path></g></svg>
                                        </div>
                                        <div className="_add_tab_icon_txt">
                                            <p className="_add_tab_icon_txt_para">Youtube</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Toolbox;