import { ImgHTMLAttributes, useState } from "react";
import { cn } from "../../../lib/utils";
import * as React from "react";

interface IImageLoader extends ImgHTMLAttributes<HTMLImageElement> {
    imageUrl: string;
    imageSmallUrl: string;
}

export default function ImageLoader({
    imageSmallUrl,
    imageUrl,
    ...props
}: IImageLoader) {
    const [loaded, setLoaded] = useState<boolean>(false);
    return (
        <div>
            <div>
                <img
                    src={imageSmallUrl}
                    className={cn(
                        "  opacity-70 blur-sm rounded-lg  object-cover",
                        loaded && "hidden"
                    )}
                    {...props}
                />
            </div>
            <img
                loading="lazy"
                src={imageUrl}
                onLoad={() => {
                    setLoaded(true);
                }}
                className={cn(loaded ? "" : " opacity-0 w-0 h0")}
                {...props}
            />
        </div>
    );
}
