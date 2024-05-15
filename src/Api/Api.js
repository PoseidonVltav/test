import { useEffect, useState } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";


function Api() {

  const [kavy, nastavKavy] = useState([])
  const [vybranaKava, nastavVybranouKavu] = useState("")


  useEffect(() => {
    axios.get('https://api.sampleapis.com/coffee/hot')
      .then(odpoved => {
        console.log("Přišla odpověď třetí strany")
        nastavKavy(odpoved.data)
      }

      )
    console.log("Pokračuj ve vykonávání funkce")
  }, [])

  return (
    <>

      <Paper>
        <Typography variant="subtitle1">
          {vybranaKava != "" && <span>Vybraná kává je: {vybranaKava}</span>}
        </Typography>
      </Paper>
      
      
      <Typography variant="h3">List káv</Typography>
      <Grid container spacing={2}>
        {kavy.map(kava => (
          <>
            <Grid item xs={2}>
              <Paper onClick={() => nastavVybranouKavu(kava.title)} style={{ textAlign: "center" }} elevation={2} square={false}>
                <div className='coffee' key={kava.id} style={{ listStyleType: "none" }}>
                <img src={kava.image} style={{ width: "50px" }}></img>
                <Typography variant="subtitle2">{kava.title}</Typography>
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