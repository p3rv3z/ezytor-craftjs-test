import React from 'react';
// import Middle from '../../components/middle/Middle';
// import RightSidebar from '../../components/rightsidebar/RightSidebar';
import Toolbox from '../../components/toolbox';
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


import { TestHeader } from '../../components/test/testHeader';
import { TestFooter } from '../../components/test/testFooter';
import { TestNav } from '../../components/test/testNav';
import { TestDiv } from '../../components/test/testDiv';
import { TestA } from '../../components/test/testA';
import { TestImg } from '../../components/test/testImg';
import { TestButton } from '../../components/test/testButton';
import { TestSection } from '../../components/test/testSection';
import { TestSvg } from '../../components/test/testSvg';
import { TestPath } from '../../components/test/testPath';
import { TestP } from '../../components/test/testP';
import { Testspan } from '../../components/test/testspan';
import { TestUl } from '../../components/test/testUl';
import { TestLi } from '../../components/test/testLi';
import { TestH1 } from '../../components/test/testH1';
import { TestH2 } from '../../components/test/testH2';
import { TestH3 } from '../../components/test/testH3';
import { TestH4 } from '../../components/test/testH4';
import { TestH5 } from '../../components/test/testH5';
import { TestH6 } from '../../components/test/testH6';


function Home() {
    return (
        <div className="_editor_home_wrapper">
            <div className="_editor_home_wrap">
                <div className="container-fluid _custom_container">
                    <div className="_layout_inner_wrap">
                        <Editor resolver={{
                            Heading,Image, Container, Main, Paragraph, Div, List, ListItem, Section, ColumSection, Row, Col, News, 
                            TestHeader,
                            TestFooter,
                            TestNav,
                            TestDiv,
                            TestA,
                            TestImg,
                            TestButton,
                            TestSection,
                            TestSvg,
                            TestP,
                            Testspan,
                            TestPath,
                            TestUl,
                            TestLi,
                            TestH1,
                            TestH2,
                            TestH3,
                            TestH4,
                            TestH5,
                            TestH6,
                        }}>
                            <div class="row">
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