import React from "react";
import { useNode } from "@craftjs/core";
import { TypographySettings } from "../../settings/TypographySettings";
import { LayoutSettings } from "../../settings/LayoutSettings";
import { SizeSettings } from "../../settings/SizeSettings";
import { SpacingSettings } from "../../settings/SpacingSettings";

export const ButtonSettings = () => {
    const { actions: { setProp }, fontSize } = useNode((node) => ({
        fontSize: node.data.props.fontSize
    }));

    return (
        <>
            <SizeSettings />
            <LayoutSettings />
            <SpacingSettings />
            <TypographySettings />
        </>
    )
}