import { useEffect, useState } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";


function Api() {

  const [filmy, nastavFilm] = useState([])
  const [vybranyFilm, nastavVybranyFilm] = useState("")


  useEffect(() => {
    axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
      .then(odpoved => {
        console.log("Přišla odpověď třetí strany")
        nastavFilm(odpoved.data)
      }

      )
    console.log("Pokračuj ve vykonávání funkce")
  }, [])

  return (
    <>

      <Paper>
        <Typography variant="subtitle1">
          {vybranyFilm != "" && <span>Vybraný film je: {vybranyFilm}</span>}
        </Typography>
      </Paper>
      
      
      <Typography variant="h3">Filmy</Typography>
      <Grid container spacing={2}>
        {filmy.map(film => (
          <>
            <Grid item xs={20}>
              <Paper onClick={() => nastavVybranyFilm(film.title)} style={{ textAlign: "center" }} elevation={2} square={false}>
                <div className='coffee' key={film.id} style={{ listStyleType: "none" }}>
                <img src={film.image} style={{ width: "50px" }}></img>
                <Typography variant="subtitle2">{film.title}</Typography>
                </div>
              </Paper>
            </Grid>
          </>
        ))
        }
      </Grid >


    </>
  )
}

export default Api;