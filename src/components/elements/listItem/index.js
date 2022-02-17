import React, { Children } from "react";
import { useNode } from "@craftjs/core";
import { ListItemSettings } from "./ListItemSettings";
const classNames = require('classnames');

export const ListItem = ({ children, styles }) => {
    const count = Children.count(children);

    const { connectors: { connect, drag }, isActive, isHovered } = useNode((node) => ({
        isActive: node.events.selected,
        isHovered: node.events.hovered,
    }));

    const classes = classNames('_list_item', { '_empty _empty_list_item': !count, '_selected': (isActive || isHovered) });

    return (
        <li ref={ref => connect(drag(ref))}
            className={classes}
            style={styles}
        >
            {children}
        </li>
    )
}


ListItem.craft = {
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
        settings: ListItemSettings
    },

    rules: {
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type !== ListItem)
    }
}