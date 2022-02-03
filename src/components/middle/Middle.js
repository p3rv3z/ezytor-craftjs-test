import React from 'react';

function Middle() {
    return(
        <section className="_middle_wrapper">
            <div className="_layout_middle_inner _selected _selected_active">
                    <div className="_section_active"></div>
                    <div className="_container_active"></div>
                    <div className="_grid">
                        <div className="_grid_active"></div>
                    </div>
                    <div className="_cursor">
                        <div className="_column_active"></div>
                    </div>
                    <div className="_div_block_active"></div>
                    <div className="_list">
                        <ul className="_list_item">
                            <li className="_list_link_active"></li>
                        </ul>
                    </div>
                    <div className="_link_block">
                        <a href="#0" className="_link_block_active"></a>
                    </div>
                    <a href="#0" className="_button_active">Button Text</a>
                    <h1 className="_heading_active">Heading</h1>
                    <p class="_paragraph_active">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean</p>
                    <a href="#0" className="_text_link_active">Text Link</a>
                    <blockquote className="_blockquote_active">Block Quote</blockquote>
                    <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" className="_image_active" alt />
                    <div className="_video_active"></div>
                    <div className="_youtube_active"></div>
                    <div className="_lottie_active"></div>
                </div>
        </section>
    )
}

export default Middle;