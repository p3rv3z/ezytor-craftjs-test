import React from 'react';
import LeftSidebar from '../../components/leftsidebar/LeftSidebar';
import Middle from '../../components/middle/Middle';
import RightSidebar from '../../components/rightsidebar/RightSidebar';

function Home() {
    return (
        <div className="_editor_home_wrapper">
            <div className="_editor_home_wrap">
                <div className="container-fluid _custom_container">
                <div className="_layout_inner_wrap">
                    <div class="row">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 _custom_column">
                            <LeftSidebar />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 _custom_column">
                            <Middle />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 _custom_column">
                            <RightSidebar />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Home;