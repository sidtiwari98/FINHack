import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Radio from '../Radio/radio'
import Checkbox from '../Checkbox/checkbox'
import OutlinedButtons from '../Button/button'
import { InputBase } from '@material-ui/core';
import Slider from '../Slider/slider'

const currencies = [
  {
    value: 'zero',
    label: '0',
  },
  {
    value: 'one',
    label: '1',
  },
  {
    value: 'two',
    label: '2',
  },
  {
    value: 'three',
    label: '3',
  },
  {
    value: 'four',
    label: '4',
  },
];
const choice = [
  {
    value: '1',
    label: 'Male',
  },
  {
    value: '0',
    label: 'Female',
  },

];
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  dense: {
    marginTop: theme.spacing(1),
  },
  menu: {
    width: 2000,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'John',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
    <div style={{
      textAlign: "center",
      padding: "50px",
  }}>
      <p style={{ color: "black", fontSize: "48px", fontFamily: "Verdana" }}>Get Your Quote</p>
  </div>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="First Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        fullWidth
        variant="outlined"
      />
      <TextField
        id="outlined-uncontrolled"
        label="Last Name"
        defaultValue="Mall"
        className={classes.textField}
        margin="normal"
        fullWidth
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Age"
        fullWidth
        defaultValue="35"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <br />
      <TextField
        error
        id="outlined-error"
        label="BMI"
        fullWidth
        defaultValue="22.3"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      {/* <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      /> */}
      {/* <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      /> */}
      {/* <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      /> */}
      {/* <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      /> */}
      {/* <TextField
        id="outlined-dense"
        label="Dense"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense-multiline"
        label="Dense multiline"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="4"
      /> */}
      {/* <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        value={values.multiline}
        onChange={handleChange('multiline')}
        className={classes.textField}
        margin="normal"
        helperText="hello"
        variant="outlined"
      /> */}
      {/* <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows="4"
        defaultValue="Default Value"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      /> */}
      {/* <TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Some important text"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      /> */}
      {/* <TextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-number"
        label="Number"
        value={values.age}
        onChange={handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      /> */}
      {/* <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      /> */}
      {/* <TextField
        id="outlined-select-currency"
        select
        label="Smoker?"
        className={classes.textField}
        value={values.choice}
        onChange={handleChange('choice')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please tell if you smoke or not"
        margin="normal"
        variant="outlined"
      >
        {choice.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField> */}
      <div className="style1" style={{ display: "flex", flexDirection: "column" }}>
        <Radio />
        <div className="style1" style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            id="outlined-select-currency"
            select
            label="No. of Children"
            className={classes.textField}
            value={values.currency}
            onChange={handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Number of Children"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Gender"
            className={classes.textField}
            value={values.choice}
            onChange={handleChange('choice')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please tell your gender"
            margin="normal"
            variant="outlined"
          >
            {choice.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Checkbox />
        <Slider/>
        <Link to="/Premium" style={{ color: '#FFF' }}>
          <button style = {{
            backgroundColor: "white",
            border: "2px solid #008CBA",
            color: "blue",
            padding: "8px 17px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "8px 42px",
            cursor:" pointer"
          }}>Submit</button>
        </Link>
      </div>
          
      {/* <TextField
        id="outlined-select-currency-native"
        select
        label="Number of Children"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField> */}
      {/* <TextField
        id="outlined-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-bare"
        className={classes.textField}
        defaultValue="Bare"
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
      /> */}

    </form>
    </div>
  );
}