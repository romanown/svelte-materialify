import { SvelteComponent } from './shared';

export interface CheckboxProps<T extends string | number | string[] = string[]> {
  /** Classes to add to checkbox wrapper. */
  class?: string;
  /** Color class of the checkbox when checked or indeterminate. */
  color?: string;
  /** Whether the checkbox is selected. */
  checked?: boolean;
  /** Whether checkbox is indeterminate. */
  indeterminate?: boolean;
  /** Whether checkbox is disabled. */
  disabled?: boolean;
  /** Value of the checkbox. */
  value?: T;
  /** Bind checkbox to a group. */
  group?: T;
  /** Id of the checkbox. Defaults to a random uid. */
  id?: string;
  /** Styles to add to checkbox wrapper. */
  style?: string;
  /** Reference to checkbox input element in the DOM. */
  inputElement?: Element;
}

declare class Checkbox extends SvelteComponent<CheckboxProps> {}

export default Checkbox;