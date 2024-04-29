import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Select,
  MenuItem,
  TextField,
  FormControl
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import FormSelector from '../../components/form/Selector';
import makeStyles from '@mui/styles/makeStyles';

// Assume these arrays are defined elsewhere in your code
const buttonPropsArray3 = []; // Define your Button props array
const textFieldpropsArray = []; // Define your TextField props array
const inputPropsArray2 = []; // Define your Input props array
const typographyPropsArray4 = []; // Define your Typography props array

const MUIProps = ({ isThemeLight }): JSX.Element => {
  const classes = useStyles(isThemeLight);
  const dispatch = useDispatch();
  const [selectedProps, setSelectedProps] = useState({});
  const [displayMode, setDisplayMode] = useState('');
  const [muiDisplayMode, setMUIDisplayMode] = useState('');
  const [muiFlexDir, setMUIFlexDir] = useState('');
  const [muiFlexJustify, setMUIFlexJustify] = useState('');
  const [muiFlexAlign, setMUIFlexAlign] = useState('');
  const [muiFlexOptionsVisible, setMUIFlexOptionsVisible] = useState(false);
  const [muiBGColor, setMUIBGColor] = useState('');
  const [muiCompText, setMUICompText] = useState('');
  const [muiCompLink, setMUICompLink] = useState('');
  const [muiCssClasses, setMUICssClasses] = useState('');
  const [muiCompWidth, setMUICompWidth] = useState('');
  const [muiCompHeight, setMUICompHeight] = useState('');
  const [muiDeleteLinkedPageError, setMUIDeleteLinkedPageError] =
    useState(false);
  const [muiDeleteIndexError, setMUIDeleteIndexError] = useState(false);
  const [muiDeleteComponentError, setMUIDeleteComponentError] = useState(false);
  const [muiModal, setMUIModal] = useState(null);
  const [muiUseContextObj, setMUIUseContextObj] = useState({});
  const [muiStateUsedObj, setMUIStateUsedObj] = useState({});
  const [muiEventAll, setMUIEventAll] = useState(['', '']);
  const [muiEventOptionsVisible, setMUIEventOptionsVisible] = useState(false);
  const [muiEventRow, setMUIEventRow] = useState([]);
  const [muiEventRowsVisible, setMUIEventRowsVisible] = useState(false);

  const handleSend = () => {
    // Handle sending selected props
  };

  const handlePropChange = (propName, propValue) => {
    setSelectedProps((prevProps) => ({
      ...prevProps,
      [propName]: propValue
    }));
  };

  const renderPropInputs = (propsArray) => {
    return propsArray.map((prop) => (
      <div key={prop.name}>
        <label>{prop.name}:</label>
        <Select
          value={selectedProps[prop.name] || ''}
          onChange={(e) => handlePropChange(prop.name, e.target.value)}
        >
          <MenuItem value={''}>None</MenuItem>
          {prop.type.split('|').map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </div>
    ));
  };

  const handleMUIChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    switch (e.target.name) {
      case 'muiDisplayMode':
        setMUIDisplayMode(inputVal);
        break;
      case 'muiFlexDir':
        setMUIFlexDir(inputVal);
        break;
      case 'muiFlexJustify':
        setMUIFlexJustify(inputVal);
        break;
      case 'muiFlexAlign':
        setMUIFlexAlign(inputVal);
        break;
      case 'muiBGColor':
        setMUIBGColor(inputVal);
        break;
      case 'muiCompText':
        setMUICompText(inputVal);
        break;
      case 'muiCompLink':
        setMUICompLink(inputVal);
        break;
      case 'muiCssClasses':
        setMUICssClasses(inputVal);
        break;
      case 'muiCompWidth':
        setMUICompWidth(inputVal);
        break;
      case 'muiCompHeight':
        setMUICompHeight(inputVal);
        break;
      case 'muiDeleteLinkedPageError':
        setMUIDeleteLinkedPageError(Boolean(inputVal));
        break;
      case 'muiDeleteIndexError':
        setMUIDeleteIndexError(Boolean(inputVal));
        break;
      case 'muiDeleteComponentError':
        setMUIDeleteComponentError(Boolean(inputVal));
        break;
      case 'muiModal':
        setMUIModal(inputVal);
        break;
      case 'muiUseContextObj':
        setMUIUseContextObj(inputVal);
        break;
      case 'muiStateUsedObj':
        setMUIStateUsedObj(inputVal);
        break;
      case 'muiEventAll':
        setMUIEventAll(Array(inputVal));
        break;
      case 'muiEventOptionsVisible':
        setMUIEventOptionsVisible(Boolean(inputVal));
        break;
      case 'muiEventRow':
        setMUIEventRow(Array(inputVal));
        break;
      case 'muiEventRowsVisible':
        setMUIEventRowsVisible(Boolean(inputVal));
        break;
      default:
        break;
    }
  };

  return (
    <div>

      {/* Button Customization Options */}
      <Accordion className={classes.accordion}>
        <AccordionSummary className={classes.accordionSummary}>Button</AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <section className={classes.buttonSection}>
            <div className={classes.buttonLeftDiv}>
              
              {/* Size Properties for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Size:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'small', text: 'small' },
                  { value: 'medium', text: 'medium' },
                  { value: 'large', text: 'large' }
                ]}
              />

              {/* Color Properties for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Color:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'inherit', text: 'inherit' },
                  { value: 'primary', text: 'primary' },
                  { value: 'secondary', text: 'secondary' },
                  { value: 'success', text: 'success' },
                  { value: 'error', text: 'error' },
                  { value: 'info', text: 'info' },
                  { value: 'warning', text: 'warning' }
                ]}
              />

              {/* Variant Properties for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Variant:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'contained', text: 'contained' },
                  { value: 'outlined', text: 'outlined' },
                  { value: 'text', text: 'text' }
                ]}
              />

              {/* href Properties for Button */}
              <div className={classes.configRow}>
                <div
                  className={
                    isThemeLight
                      ? `${classes.configType} ${classes.lightThemeFontColor}`
                      : `${classes.configType} ${classes.darkThemeFontColor}`
                  }
                >
                  <h3>href:</h3>
                </div>
                <div className={classes.configValue}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="href"
                      className={classes.select}
                      inputProps={{
                        className: isThemeLight
                          ? `${classes.selectInput} ${classes.lightThemeFontColor}`
                          : `${classes.selectInput} ${classes.darkThemeFontColor}`
                      }}
                      // value={BGColor}
                      // onChange={handleChange}
                      placeholder="https://www.reactype.dev/"
                    />
                  </FormControl>
                </div>
              </div>
            </div>  

            {/* Button Right Div */}
            <div className={classes.buttonRightDiv}>

              {/* Disable Options for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Disabled:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'true', text: 'true' },
                  { value: 'false', text: 'false' },
                ]}
              />

              {/* Disable Elevation Options for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Disable Elevation:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'true', text: 'true' },
                  { value: 'false', text: 'false' },
                ]}
              />

              {/* Disable Focus Ripple Options for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Disable Ripple:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'true', text: 'true' },
                  { value: 'false', text: 'false' },
                ]}
              />

              {/* Full Width Options for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Full Width:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'true', text: 'true' },
                  { value: 'false', text: 'false' },
                ]}
              />

            </div>
          </section>
        </AccordionDetails>
      </Accordion>

      {/* TextField Customization Options */}
      <Accordion className={classes.accordion}>
        <AccordionSummary className={classes.accordionSummary}>TextField</AccordionSummary>     
        <AccordionDetails className={classes.accordionDetails}>
        <section className={classes.buttonSection}>
            <div className={classes.buttonLeftDiv}>
              
              {/* Size Properties for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Size:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'small', text: 'small' },
                  { value: 'medium', text: 'medium' },
                  { value: 'large', text: 'large' }
                ]}
              />

              {/* Color Properties for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Color:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'inherit', text: 'inherit' },
                  { value: 'primary', text: 'primary' },
                  { value: 'secondary', text: 'secondary' },
                  { value: 'success', text: 'success' },
                  { value: 'error', text: 'error' },
                  { value: 'info', text: 'info' },
                  { value: 'warning', text: 'warning' }
                ]}
              />

              {/* Variant Properties for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Variant:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'contained', text: 'contained' },
                  { value: 'outlined', text: 'outlined' },
                  { value: 'text', text: 'text' }
                ]}
              />

              {/* href Properties for Button */}
              <div className={classes.configRow}>
                <div
                  className={
                    isThemeLight
                      ? `${classes.configType} ${classes.lightThemeFontColor}`
                      : `${classes.configType} ${classes.darkThemeFontColor}`
                  }
                >
                  <h3>href:</h3>
                </div>
                <div className={classes.configValue}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="href"
                      className={classes.select}
                      inputProps={{
                        className: isThemeLight
                          ? `${classes.selectInput} ${classes.lightThemeFontColor}`
                          : `${classes.selectInput} ${classes.darkThemeFontColor}`
                      }}
                      // value={BGColor}
                      // onChange={handleChange}
                      placeholder="https://www.reactype.dev/"
                    />
                  </FormControl>
                </div>
              </div>
            </div>  

            {/* Button Right Div */}
            <div className={classes.buttonRightDiv}>

              {/* Disable Options for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Disabled:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'true', text: 'true' },
                  { value: 'false', text: 'false' },
                ]}
              />

              {/* Disable Elevation Options for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Disable Elevation:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'true', text: 'true' },
                  { value: 'false', text: 'false' },
                ]}
              />

              {/* Disable Focus Ripple Options for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Disable Ripple:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'true', text: 'true' },
                  { value: 'false', text: 'false' },
                ]}
              />

              {/* Full Width Options for Button */}
              <FormSelector
                classes={classes}
                selectValue={muiDisplayMode} // Using muiDisplayMode for Material UI state
                handleChange={handleMUIChange} // Using handleMUIChange for Material UI props
                title="Full Width:"
                name="muiDisplayMode" // Matching with the name in the change handler
                items={[
                  { value: '', text: 'default' },
                  { value: 'true', text: 'true' },
                  { value: 'false', text: 'false' },
                ]}
              />

            </div>
          </section>
        </AccordionDetails>
      </Accordion>

      {/* Card Customization Options */}
      <Accordion className={classes.accordion}>
        <AccordionSummary className={classes.accordionSummary}>
          Card
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {renderPropInputs(inputPropsArray2)}
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Typography Customization Options */}
      <Accordion className={classes.accordion}>
        <AccordionSummary className={classes.accordionSummary}>
          Typography
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {renderPropInputs(typographyPropsArray4)}
          </div>
        </AccordionDetails>
      </Accordion>

      <button onClick={handleSend}>Save</button>
    </div>
  );
};

const useStyles = makeStyles({
  select: {
    fontSize: '1em',
    borderRadius: '10px',
    '> .MuiSelect-icon': {
      color: '#C6C6C6'
    }
  },
  selectInput: {
    paddingTop: '15px',
    paddingLeft: '15px'
  },
  formControl: {
    minWidth: '125px'
  },
  configRow: {
    display: 'flex',
    paddingLeft: '25px',
    paddingRight: '25px',
    marginTop: '20px'
  },
  configType: {
    minWidth: '185px',
    fontSize: '85%'
  },
  configValue: {
    marginLeft: '20px'
  },
  buttonRow: (isThemeLight) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '15px',
    '& > .MuiButton-textSecondary': {
      color: isThemeLight ? '#808080' : '#ECECEA', // color for delete page
      border: isThemeLight ? '1px solid #808080' : '1px solid #ECECEA'
    }
  }),
  button: {
    fontSize: '1rem',
    padding: '9px 35px',
    margin: '10px 15px 0 0',
    borderRadius: '8px'
  },
  saveButtonLight: {
    border: '1px solid #0671e3',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  saveButtonDark: {
    border: '1px solid #3c59ba'
  },
  compName: {
    fontSize: '1rem'
  },
  rootCompName: {
    fontSize: '1.75rem'
  },
  // 'Parent Component' font size
  configHeader: {
    '& > h4': {
      fontSize: '1rem',
      letterSpacing: '0.5px',
      marginBottom: '10px',
      marginTop: '10px'
    }
  },
  rootConfigHeader: {
    height: '70px',
    '& > h4': {
      fontSize: '1.75rem',
      letterSpacing: '0.5px',
      marginBottom: '0',
      marginTop: '30px'
    }
  },
  lightThemeFontColor: {
    color: 'white'
  },
  darkThemeFontColor: {
    color: '#fff'
  },
  buttonSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start' // Align items to the top
  },
  buttonLeftDiv: {
    flex: '0 0 48%', // Adjust width as needed
    marginRight: '16px' // Add margin between divs
  },
  buttonRightDiv: {
    flex: '0 0 48%', // Adjust width as needed
    marginLeft: '16px' // Add margin between divs
  },
  accordion: {
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center'
  },
  accordionDetails: {
    backgroundColor: 'black',
    color: 'white'
  },
  accordionSummary: {
    justifyContent: 'center'
  }
});

export default MUIProps;
