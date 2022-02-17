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

    const classes = classNames('_container', { '_empty': !count, '_selected': (isActive || isHovered) });

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
            height: "75px",
            minWidth: "auto",
            maxWidth: "auto",
            minHeight: "auto",
            maxHeight: "auto",
            objectFit: "cover",
        }
    },

    related: {
        settings: ContainerSettings
    }
}