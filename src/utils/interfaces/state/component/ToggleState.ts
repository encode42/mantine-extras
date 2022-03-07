import { BooleanState } from "../type/BooleanState";

/**
 * State template for a switch toggle.
 */
export interface ToggleState extends BooleanState {
    "disabled": boolean
}
