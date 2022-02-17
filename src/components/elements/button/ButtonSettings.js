import React from "react";
import { useNode } from "@craftjs/core";
import { TypographySettings } from "../../settings/TypographySettings";
import { LayoutSettings } from "../../settings/LayoutSettings";
import { SizeSettings } from "../../settings/SizeSettings";

export const ButtonSettings = () => {
    const { actions: { setProp }, fontSize } = useNode((node) => ({
        fontSize: node.data.props.fontSize
    }));

    return (
        <>
            <SizeSettings />
            <LayoutSettings />
            <TypographySettings />
        </>
    )
}