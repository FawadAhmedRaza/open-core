import { twMerge } from "tailwind-merge";

export const cn = (...inputs: (string | undefined)[]): string => {
    return twMerge(...inputs);
};
