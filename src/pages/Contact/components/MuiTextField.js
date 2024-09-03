import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel" 

const MuiTextField = ({ label, placeholder, required }) => {
  return (
    <Box
      sx={{
        "& .MuiTextField-root": {
          marginBottom: 2,
          width: "100%",
          fontSize: "14px",
        },
      }}
      component='form'
      noValidate>
      <InputLabel
        htmlFor='custom-text-field'
        sx={{
          mb: 1,
          fontSize: "16px",
          color: "black",
          fontFamily: "Poppins",
        }}>
        {label}{" "}
        {required ? (
          <span
            style={{
              color: "red",
              fontSize: "16px",
              verticalAlign: "super",
            }}>
            *
          </span>
        ) : null}
      </InputLabel>

      <TextField
        id='custom-text-field'
        className=' bg-[#FEFFFE] border-[#2F318380]'
        placeholder={placeholder}
        variant='outlined'
        fullWidth
        required={required}
      />
    </Box>
  )
}

export default MuiTextField
