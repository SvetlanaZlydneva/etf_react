import React from 'react';
import T from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FormSelect = ({ label, name, required, value, items, onChange }) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.selectEmpty} fullWidth>
      <InputLabel htmlFor="select">{label}</InputLabel>
      <Select
        native
        label={label}
        value={value}
        onChange={onChange}
        required={required}
        inputProps={{
          name,
          id: 'select',
        }}
      >
        <option aria-label="None" value="" />
        {items.map(({ _id, name: activity }) => (
          <option key={_id} value={activity}>
            {activity}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

FormSelect.defaultProps = {
  required: true,
};

FormSelect.propTypes = {
  onChange: T.func.isRequired,
  label: T.string.isRequired,
  name: T.string.isRequired,
  value: T.string.isRequired,
  items: T.arrayOf(String).isRequired,
  required: T.bool,
};

export default FormSelect;
