import "./contact.css";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import emailjs from "emailjs-com";

export function Contact() {
  async function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_kgictxc",
        e.target,
        "mRfbfVdwZLhJUl6Ty"
      )
      .then(
        (result: any) => {
          alert("Sua mensagem foi enviada!");
        },
        (error: any) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container-contact">
      <Navbar />
      <div className="main">
      <div className="top form">
            <div className="top-text">
              <span className="name">Formulário de contato</span>
            </div>
          </div>
        <Card className="card">
          <CardContent>
            <form onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="text"
                    name="firstName"
                    label="Primeiro Nome"
                    placeholder="Digite seu primeiro Nome"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} sm={6} item>
                  <TextField
                    type="text"
                    name="lastName"
                    label="Ultimo Nome"
                    placeholder="Digite seu ultimo Nome"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    type="text"
                    name="email"
                    label="E-mail"
                    placeholder="Digite seu E-mail"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    type="text"
                    name="subject"
                    label="Assunto"
                    placeholder="Digite o assunto"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    type="message"
                    name="message"
                    label="Mensagem"
                    multiline
                    rows={4}
                    placeholder="Digite sua mensagem"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} item>
                  <Button
                    sx={{background: "#88932a", color: "white"}}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    {" "}
                    Enviar{" "}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
