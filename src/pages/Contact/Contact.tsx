import "./contact.css";
import { Button, Card, CardContent, FormGroup, Grid, TextField, Typography } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";

export function Contact() {
  return (
    <div className="container">
      <Navbar />
     <Typography gutterBottom variant="h3" align="center"> Contato </Typography>
     <Card className="card-container">
         <CardContent className="input-container">
             <Grid container spacing={1} > 
             <Grid xs={12} sm={6} item>
                 <TextField label="Primeiro Nome" placeholder="Digite seu primeiro Nome" variant="outlined" fullWidth required/>
             </Grid>

             <Grid xs={12} sm={6} item>
                 <TextField label="Ultimo Nome" placeholder="Digite seu ultimo Nome" variant="outlined" fullWidth required/>
             </Grid>

             <Grid xs={12} item>
                 <TextField type="email" label="E-mail" placeholder="Digite seu E-mail" variant="outlined" fullWidth required/>
             </Grid>

             <Grid xs={12} item>
                 <TextField  label="Mensagem" multiline rows={4} placeholder="Digite sua mensagem" variant="outlined" fullWidth required/>
             </Grid>

             <Grid xs={12} item>
                 <Button variant="contained" color="primary" fullWidth> Enviar </Button>
             </Grid>

             </Grid>
         </CardContent>
     </Card>
    </div>
  );
}
