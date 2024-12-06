 import { ReactElement } from "react";
interface ButtonInterface {
    title: string;
    size: "lg" | "sm" | "md";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    variant: "primary" | "secondary";
}

const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl font-light",
    "md": "px-4 py-2 text-md rounded-md font-light",
    "sm": "px-2 py-1 text-sm rounded-sm font-light",
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600",
}

export function Button(props: ButtonInterface) {

    return <button className={sizeStyles[props.size] + " " + variantStyles[props.variant]}>
        <div className="flex items-center">
            {props.startIcon}
            <div className="pl-2 pr-2">
                {props.title}
            </div>
            {props.endIcon}
        </div>
    </button>
}