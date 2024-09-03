import React from "react"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"

const MuiTextArea = () => {
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
        Message
        <span
          style={{ color: "red", fontSize: "16px", verticalAlign: "super" }}>
          *
        </span>
      </InputLabel>

      <TextField
        className=' bg-[#FEFFFE] border-[#2F318380]'
        placeholder='Add more details to the qurey'
        variant='outlined'
        fullWidth
        required={true}
        multiline
        rows={10}
      />
    </Box>
  )
}

export default MuiTextArea
