import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/material/styles/makeStyles'
import { Search } from '@mui/icons-material'
const useStyles = makeStyles((theme)=>({
      logoLg:{
            display:'none',
            [theme.breakpoints.up('sm')]:{
                  display:'block'
            }
      },
      logoSm:{}
}))
export default function Navbar() {
  return (
    <>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h2" className={useStyles.logoLg}>
          جواد
        </Typography>
      
      </Toolbar>
    </AppBar>

    </>
  )
}
