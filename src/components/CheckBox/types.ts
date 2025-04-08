import { ChangeEvent } from "react";

export interface CheckBoxProps {
    name: string,
    id?: string,
    checked?: boolean,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    label?: string
    error?: string

}