import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../../lib/utils";

interface ITextProps {
    children?: React.ReactNode;
    title?: string;
    titleStyle?: string;
    paragraphStyle?: string;
    className?: string;
    textAlign?: "center" | "left" | "right" | "justify" | "start" | "end";
}

const textVariants = cva(" flex flex-col gap-4", {
    variants: {
        textAlign: {
            center: " text-center",
            left: " text-left",
            right: " text-right",
            justify: " text-justify",
            start: " text-start",
            end: " text-end",
        },
    },
    defaultVariants: {
        textAlign: "center",
    },
});

export default function Topic({
    children,
    title,
    titleStyle,
    paragraphStyle,
    className,
    textAlign,
}: ITextProps) {
    return (
        <div className={cn(textVariants({ textAlign }), className)}>
            <h1
                className={cn(
                    titleStyle,
                    " text-xl  text-primary font-bold  lg:text-4xl "
                )}
            >
                {title}
            </h1>
            <div
                className={cn(
                    paragraphStyle,
                    " text-secondary text-xs font-normal lg:text-xl"
                )}
            >
                {children}
            </div>
        </div>
    );
}
