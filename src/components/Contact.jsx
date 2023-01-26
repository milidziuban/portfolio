import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Contact.css'

export default function Contact() {
    return (
        <div className="fondo">
            <div className="desingItem">
                <h3> CONTACTÁME </h3>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className="box"
                >
                    <TextField id="standard-basic" label="Nombre" variant="standard" />
                    <TextField id="standard-basic" label="Motivo" variant="standard" />
                    <TextField
                        id="standard-multiline-static"
                        label="Mensaje"
                        multiline
                        rows={4}
                        variant="standard"
                    />
                    <button className="buttonLanding"> Enviar </button>
                </Box>
            </div>
        </div>
    )
}