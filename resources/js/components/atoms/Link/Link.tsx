import { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import * as React from "react";
import {
    BaseInertiaLinkProps,
    Link as LinkInertia,
} from "@inertiajs/inertia-react";

export type TSizeButton = "sm" | "md" | "lg";

export type TVariantButton = "default" | "ghost" | "reverse_default";

// Define the props interface

interface LinkProps extends BaseInertiaLinkProps {
    size?: TSizeButton;
    children?: ReactNode;
    variant?: TVariantButton;
    className?: string;
    button?: boolean;
    href: string;
}

const buttonVariants = cva(" flex items-center w-fit justify-center  ", {
    variants: {
        size: {
            sm: " text-xs h-6  rounded-xl px-[12px] gap-1",
            md: " text-xl h-10 rounded-3xl px-8 gap-2",
            lg: "",
        },
        variant: {
            default:
                " bg-primary text-white hover:bg-opacity-90 active:border-green-950 active:border",
            reverse_default:
                " bg-white text-primary hover:bg-opacity-90 active:border-green-950 active:border",
            ghost: " text-primary border border-opacity-0 hover:border hover:border-secondary  active:border-green-950 active:border",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "sm",
    },
});

const Link: React.FC<LinkProps> = ({
    className,
    children,
    size,
    variant,
    button,
    href,

    ...props
}) => {
    if (button) {
        return (
            <LinkInertia
                href={href}
                className={cn(buttonVariants({ size, variant }), className)}
                {...props}
            >
                {children}
            </LinkInertia>
        );
    }
    return (
        <LinkInertia href={href} className={cn(className)} {...props}>
            {children}
        </LinkInertia>
    );
};

export default Link;
