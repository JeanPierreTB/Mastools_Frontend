import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './Textfield.module.css'
import { colors } from '@mui/material';

function Textfield({texto,numero=false ,onChange, isPassword = false }) {
    return (
        <TextField 
        className={`${styles.textField} ${styles.Textfield_textField}`} 
        id="outlined-basic"
        label= {texto}
        onChange={onChange}
        
        variant="outlined"
        color='secondary'
        autoComplete={isPassword ? "new-password" : "off"}
        autoCorrect="off"
        type={isPassword ? "password" :numero ? "number":"text"}
        
        sx={{
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    border: "2px solid #6750A4",
                    borderColor: "black",
                    hover: "#6750A4"
                }  
            },
            "& .Mui-focused fieldset": {
                borderColor: "#6750A4"
            },
            "& label.Mui-focused": {
                color: "#6750A4"
            },
            "&:hover fieldset": {
                border: "2px solid #6750A4"
            },
        }}
    
        />
    )
}
export default Textfield