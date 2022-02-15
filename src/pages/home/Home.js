import React from 'react';
import Toolbox from '../../components/leftsidebar/LeftSidebar';
// import Middle from '../../components/middle/Middle';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import { Editor, Frame, Element } from "@craftjs/core";
import { Heading } from '../../components/elements/heading/Heading'
import { Container } from '../../components/elements/container/Container'
import { Section } from '../../components/elements/Section';
import { Main } from '../../components/elements/main/Main';

function Home() {
    return (
        <div className="_editor_home_wrapper">

            <div className="_editor_home_wrap">
                <div className="container-fluid _custom_container">
                    <div className="_layout_inner_wrap">
                        <Editor resolver={{ Heading, Container, Main,Section }}>
                            <div class="row">
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 _custom_column">
                                    <Toolbox />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 _custom_column">
                                    <Frame>
                                        {/* <Middle /> */}
                                        <Element is={Main} id="main" canvas>
                                            <Heading text="Heading" />
                                        </Element>
                                    </Frame>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 _custom_column">
                                    <RightSidebar />
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