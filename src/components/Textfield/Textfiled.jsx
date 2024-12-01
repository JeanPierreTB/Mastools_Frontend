import * as React from 'react';
import TextField from '@mui/material/TextField';
import styles from './Textfield.module.css';

function Textfield({ texto, numero = false, onChange, isPassword = false, inputValue, name, readOnly = false, date = false }) {
    return (
        <TextField 
            className={`${styles.textField} ${styles.Textfield_textField}`} 
            id="outlined-basic"
            label={texto}
            name={name}
            onChange={onChange}
            value={inputValue}
            variant="outlined"
            color='secondary'
            autoComplete={isPassword ? "new-password" : "off"}
            autoCorrect="off"
            type={isPassword ? "password" : numero ? "number" : date ? "date" : "text"}
            InputProps={{
                readOnly: readOnly,
                style: {
                    backgroundColor: readOnly ? '#f0f0f0' : 'transparent', 
                    color: readOnly ? '#888' : 'inherit', 
                },
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        border: "2px solid #6750A4",
                        borderColor: "black",
                    },
                },
                "& .Mui-focused fieldset": {
                    borderColor: "#6750A4",
                },
                "& label.Mui-focused": {
                    color: "#6750A4",
                },
                "&:hover fieldset": {
                    border: "2px solid #6750A4",
                },
            }}
            InputLabelProps={{
                shrink: true, 
            }}
        />
    );
}

export default Textfield;
