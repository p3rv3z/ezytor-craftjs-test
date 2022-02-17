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

    const classes = classNames('_list', { '_empty _empty_list': !count, '_selected': (isActive || isHovered) });

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
            width: "auto",
            height: "auto",
            minWidth: "auto",
            maxWidth: "100%",
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
        settings: ListSettings
    },

    rules: {
      canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === ListItem)
    }
}