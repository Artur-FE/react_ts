import { Dispatch, SetStateAction } from "react";

export interface MessageType{
    message: string | undefined,
    setMessage:  (() => void) | Dispatch<SetStateAction<string | undefined>>
}