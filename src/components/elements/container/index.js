import React, { Children } from "react";
import { useNode } from "@craftjs/core";
import { ContainerSettings } from "./ContainerSettings";
const classNames = require('classnames');

export const Container = ({ children, styles }) => {
    const count = Children.count(children);

    const { connectors: { connect, drag }, isActive, isHovered } = useNode((node) => ({
        isActive: node.events.selected,
        isHovered: node.events.hovered,
    }));

    const classes = classNames('_container', { '_empty _empty_container': !count, '_selected': (isActive || isHovered) });

    return (
        <div ref={ref => connect(drag(ref))}
            className={classes}
            style={styles}
        >
            {children}
        </div>
    )
}


Container.craft = {
    props: {
        styles: {
            width: "760px",
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
        settings: ContainerSettings
    }
}