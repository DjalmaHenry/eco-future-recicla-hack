import "./contact.css";
import { Button, Card, CardContent, FormGroup, Grid, TextField, Typography } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";
import React, { useState } from "react";

export function Contact() {
    
    let [campos, setCampos] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    function handleInputChange(event: any) {
        // campos[event.target.name] = event.target.value;
        setCampos(campos);
        console.log(campos);
        console.log(event.target.value);
       
        
    }

  return (
    <div className="container">
      <Navbar/>
     <Typography gutterBottom variant="h3" align="center">Formulario de Contato </Typography>
     <Card style={{maxWidth:600, margin:"0 auto", padding:"15px 5px"}}>
         <CardContent>
             <Typography gutterBottom variant="h5" align="center"> Entre em contato conosco </Typography>
             <form>
                <Grid container spacing={1} > 
                    <Grid xs={12} sm={6} item>
                        <TextField onChange={handleInputChange} type="text" name="firstName" label="Primeiro Nome" placeholder="Digite seu primeiro Nome" variant="outlined" fullWidth required/>

                        {/* <p>{firstName}</p> */}
                     </Grid>

                     <Grid xs={12} sm={6} item>
                         <TextField onChange={handleInputChange} type="text" name="lastName"  label="Ultimo Nome" placeholder="Digite seu ultimo Nome" variant="outlined" fullWidth required/>
                    </Grid>

                    <Grid xs={12} item>
                         <TextField  onChange={handleInputChange} type="text" name="email" label="E-mail" placeholder="Digite seu E-mail" variant="outlined" fullWidth required/>
                    </Grid>

                    <Grid xs={12} item>
                        <TextField  onChange={handleInputChange} type="message" name="message"  label="Mensagem" multiline rows={4} placeholder="Digite sua mensagem" variant="outlined" fullWidth required/>
                    </Grid>

                    <Grid xs={12} item>
                        <Button  type="submit" variant="contained" color="primary" fullWidth> Enviar </Button>
                     </Grid>

                </Grid>
             </form>
         </CardContent>
     </Card>
    </div>
  );
}
