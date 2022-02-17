import React from 'react';
// import Middle from '../../components/middle/Middle';
// import RightSidebar from '../../components/rightsidebar/RightSidebar';
import Toolbox from '../../components/Toolbox';
import SettingsPanel from '../../components/settingsPanel';
import { Editor, Frame, Element } from "@craftjs/core";
import { Heading } from '../../components/elements/heading'
import { Container } from '../../components/elements/container'
import { Section } from '../../components/elements/Section';
import { Main } from '../../components/elements/main/Main';
import { Paragraph } from '../../components/elements/paragraph';
import { Div } from '../../components/elements/div';
import { List } from '../../components/elements/list';
import { ListItem } from '../../components/elements/listItem';
import { ColumSection } from '../../components/elements/ColumSection';
import { Row } from '../../components/elements/Row';
import { Col } from '../../components/elements/Col';
import { News } from '../../components/elements/News';
import { Button } from '../../components/elements/button';
import { Colums } from '../../components/elements/ColumSection';
import { Image } from '../../components/elements/Image';

function Home() {
    return (
        <div className="_editor_home_wrapper">
            <div className="_editor_home_wrap">
                <div className="container-fluid _custom_container">
                    <div className="_layout_inner_wrap">
                        <Editor resolver={{ Heading,Image, Container, Main, Paragraph, Div, List, ListItem,Section, ColumSection,Row,Col,News }}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 _custom_column">
                                   
                                    <Toolbox />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 _custom_column">
                                    <section className="_middle_wrapper">
                                        <div className="_layout_middle_inner">
                                        <Frame>
                                                                    {/* <Middle /> */}
                                                                    <Element is="div" id="main" style={{width: "100%", height: "100%"}} canvas>
                                                                        {/* <Heading text="Heading" /> */}
                                                                        <News/>
                                                                    </Element>
                                                                
                                                                </Frame>
                                            </div>
                                        </section>
                                    
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 _custom_column">
                                    <SettingsPanel />
                                </div>
                            </div>
                        </ Editor>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;