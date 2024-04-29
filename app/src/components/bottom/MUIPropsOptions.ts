import MUITypes from '../../redux/MUITypes';
import { MUIType } from '../../interfaces/Interfaces';

// Define types for props options
export type MUIPropOption = {
  name: string;
  type: string[];
  defaultValue: any;
};

// Define props options for each Material-UI component
export const MUIPropsOptions: Record<string, MUIPropOption[]> = {};

// Define all props that are shared among multiple Material-UI components
const sharedProps: MUIPropOption[] = [
  { name: 'children', type: ['ReactNode'], defaultValue: null },
  { name: 'classes', type: ['{ [key: string]: string }'], defaultValue: null },
  { name: 'sx', type: ['Array'], defaultValue: null },
];

// Define specific props for each Material-UI component
MUITypes.forEach((component: MUIType) => {
  let specificProps: MUIPropOption[] = [];

  // Push shared props to specificProps array
  specificProps.push(...sharedProps);

  // Push component-specific props to specificProps array
  switch (component.name) {
    case 'Button':
      specificProps.push(
        { name: 'color', type: ["'inherit'", "'primary'", "'secondary'", "'success'", "'error'", "'info'", "'warning'", 'string'], defaultValue: 'primary' },
        { name: 'component', type: ['React.ElementType'], defaultValue: null },
        { name: 'disabled', type: ['boolean'], defaultValue: false },
        { name: 'disableElevation', type: ['boolean'], defaultValue: false },
        { name: 'disableFocusRipple', type: ['boolean'], defaultValue: false },
        { name: 'disableRipple', type: ['boolean'], defaultValue: false },
        { name: 'fullWidth', type: ['boolean'], defaultValue: false },
        { name: 'href', type: ["'small'", "'medium'", "'large'", 'string'], defaultValue: 'medium' },
        { name: 'size', type: ["'small'", "'medium'", "'large'", 'string'], defaultValue: 'medium' },
        { name: 'variant', type: ["'contained'", "'outlined'", "'text'", 'string'], defaultValue: 'text' }
      );
      break;
    case 'TextField':
      specificProps.push(
        { name: 'autoComplete', type: ['string'], defaultValue: '' },
        { name: 'autoFocus', type: ['boolean'], defaultValue: false },
        { name: 'color', type: ["'primary'", "'secondary'", "'error'", "'info'", "'success'", "'warning'", 'string'], defaultValue: 'primary' },
        { name: 'defaultValue', type: ['any'], defaultValue: '' },
        { name: 'disabled', type: ['boolean'], defaultValue: false },
        { name: 'error', type: ['boolean'], defaultValue: false },
        { name: 'FormHelperTextProps', type: ['object'], defaultValue: null },
        { name: 'fullWidth', type: ['boolean'], defaultValue: false },
        { name: 'helperText', type: ['node'], defaultValue: null },
        { name: 'id', type: ['string'], defaultValue: '' },
        { name: 'InputLabelProps', type: ['object'], defaultValue: null },
        { name: 'inputProps', type: ['object'], defaultValue: null },
        { name: 'InputProps', type: ['object'], defaultValue: null },
        { name: 'inputRef', type: ['ref'], defaultValue: null },
        { name: 'label', type: ['node'], defaultValue: null },
        { name: 'margin', type: ["'dense'", "'none'", "'normal'"], defaultValue: 'none' },
        { name: 'maxRows', type: ['number', 'string'], defaultValue: '' },
        { name: 'minRows', type: ['number', 'string'], defaultValue: '' },
        { name: 'multiline', type: ['boolean'], defaultValue: false },
        { name: 'name', type: ['string'], defaultValue: '' },
        { name: 'onChange', type: ['func'], defaultValue: null },
        { name: 'placeholder', type: ['string'], defaultValue: '' },
        { name: 'required', type: ['boolean'], defaultValue: false },
        { name: 'rows', type: ['number', 'string'], defaultValue: '' },
        { name: 'select', type: ['boolean'], defaultValue: false },
        { name: 'SelectProps', type: ['object'], defaultValue: null },
        { name: 'size', type: ["'medium'", "'small'", 'string'], defaultValue: 'medium' },
        { name: 'type', type: ['string'], defaultValue: '' },
        { name: 'value', type: ['any'], defaultValue: '' },
        { name: 'variant', type: ["'filled'", "'outlined'", "'standard'"], defaultValue: 'outlined' }
      );
      break;
    case 'Card':
      specificProps.push(
        { name: 'children', type: ['node'], defaultValue: null },
        { name: 'raised', type: ['boolean'], defaultValue: false }
      );
      break;
    case 'Typography':
      specificProps.push(
        { name: 'align', type: ["'center'", "'inherit'", "'justify'", "'left'", "'right'"], defaultValue: 'inherit' },
        { name: 'gutterBottom', type: ['boolean'], defaultValue: false },
        { name: 'noWrap', type: ['boolean'], defaultValue: false },
        { name: 'paragraph', type: ['boolean'], defaultValue: false },
        { name: 'variant', type: ["'body1'", "'body2'", "'button'", "'caption'", "'h1'", "'h2'", "'h3'", "'h4'", "'h5'", "'h6'", "'inherit'", "'overline'", "'subtitle1'", "'subtitle2'", 'string'], defaultValue: 'body1' },
        { name: 'variantMapping', type: ['object'], defaultValue: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h6',
          subtitle2: 'h6',
          body1: 'p',
          body2: 'p',
          inherit: 'p',
        }}
      );
      break;
  }

  // Assign specificProps to MUIPropsOptions for the current component
  MUIPropsOptions[component.name] = specificProps;
});

 
