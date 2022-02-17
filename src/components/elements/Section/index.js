import React, { Children } from "react";
import { useNode } from "@craftjs/core";
import { SectionSettings } from "./SectionSettings";
const classNames = require('classnames');


export const Section = ({ children, styles }) => {
    const count = Children.count(children);

    const { connectors: { connect, drag }, isActive, isHovered } = useNode((node) => ({
        isActive: node.events.selected,
        isHovered: node.events.hovered,
    }));

    const classes = classNames('_section', { '_empty _empty_section': !count, '_selected': (isActive || isHovered) });

    return (
        <div ref={ref => connect(drag(ref))}
            style={styles}
            className={classes}
        >
            {children}
        </div>
    )
}

Section.craft = {
    props: {
        styles: {
            width: "100%",
            height: "auto",
            minWidth: "auto",
            maxWidth: "auto",
            minHeight: "auto",
            maxHeight: "auto",
            objectFit: "cover",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "auto",
            paddingBottom: "auto",
            paddingLeft: "auto",
            paddingRight: "auto",
        }
    },

    related: {
        settings: SectionSettings
    }
}