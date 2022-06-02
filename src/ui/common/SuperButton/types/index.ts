import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    light?: boolean
}