import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Contact.css'

export default function Contact() {

    const [dataMail, setDataMail] = useState({});

    function handleDataMail(e) {
        e.preventDefault();

        setDataMail({
            ...dataMail,
            [e.target.name]: e.target.value,
            [e.target.motivo]: e.target.value,
            [e.target.mail]: e.target.value,
        })
        // else {
        //     alert('Wrong or missing data')
        // }
    }

    // function handleSendMail(e) {
    //     console.log(dataMail);
    //     MailApp.sendEmail("milagrosdziuban1@gmail.com", `${dataMail.motive}`, `${dataMail.mesaje}`);
    // }

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
                    <TextField id="standard-basic" label="Nombre" variant="standard" type="text" name="name" value={dataMail.name} onChange={handleDataMail} />
                    <TextField id="standard-basic" label="Motivo" variant="standard" type="text" name="motive" value={dataMail.motive} onChange={handleDataMail} />
                    <TextField
                        id="standard-multiline-static"
                        label="Mensaje"
                        multiline
                        rows={4}
                        variant="standard"
                        type="text" name="mesaje" value={dataMail.mensaje} onChange={handleDataMail}
                    />
                </Box>
                <button 
                //onClick={handleSendMail} 
                className="buttonLanding"> Enviar </button>
            </div>
        </div>
    )
}