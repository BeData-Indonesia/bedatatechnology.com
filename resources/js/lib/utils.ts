import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ScreenSize } from "../constant/screenSize";

export const checkScreen = (screensize: number) => {
    const currentScreenSize = window.innerWidth;
    if (screensize <= currentScreenSize) {
        return true;
    }
    return false;
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const isScreenLG = checkScreen(ScreenSize.lg);
export const isScreenMD = checkScreen(ScreenSize.md);
export const isScreenSM = checkScreen(ScreenSize.sm);
export const isScreenXL = checkScreen(ScreenSize.xl);

export const parseLink = (text: string) => {
    let parseSlug = text.split(" ");
    let hyperLink = parseSlug.reduce((previousValue, currentValue) => {
        return previousValue + "-" + currentValue;
    });

    return hyperLink;
};

const momentDate = (dd: string, mm: string, yy: string) => {
    let month;
    switch (parseInt(mm)) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "Fenruary";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "Juny";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;

        case 10:
            month = "October";
            break;

        case 11:
            month = "November";
            break;

        case 12:
            month = "December";
            break;
        default:
            break;
    }
    return `${dd} ${month} ${yy}`;
};

export const parseDate = (createdAt: string) => {
    const dateArray = createdAt.split("T")[0].split("-");
    const date = momentDate(dateArray[2], dateArray[1], dateArray[0]);
    return date;
};
