import React, { Children } from "react";
import { useNode } from "@craftjs/core";
import { ListSettings } from "./ListSettings";
import { ListItem } from "../listItem"
const classNames = require('classnames');

export const List = ({ children, styles }) => {
    const count = Children.count(children);

    const { connectors: { connect, drag }, isActive, isHovered } = useNode((node) => ({
        isActive: node.events.selected,
        isHovered: node.events.hovered,
    }));

    const classes = classNames('_container', { '_empty _empty_list': !count, '_selected': (isActive || isHovered) });

    return (
        <ul ref={ref => connect(drag(ref))}
            className={classes}
            style={styles}
        >
            {children}
        </ul>
    )
}


List.craft = {
    props: {
        styles: {
            width: "100%",
            height: "auto",
            minWidth: "auto",
            maxWidth: "auto",
            minHeight: "auto",
            maxHeight: "auto",
            objectFit: "cover",
        }
    },

    related: {
        settings: ListSettings
    },

    rules: {
      canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === ListItem)
    }
}