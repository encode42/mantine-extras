import { SxType } from "../type/SxType";

/**
 * Structure for an object that holds [Mantine sx](https://mantine.dev/styles/sx/) objects.
 */
export interface SxOperations {
    [key: string]: SxType;
}
