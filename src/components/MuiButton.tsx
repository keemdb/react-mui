import { Stack, Button, IconButton, ButtonGroup } from "@mui/material"

import SendIcon from "@mui/icons-material/Send"

  

export const MuiButton = () => {

 return (

  <Stack spacing={4}>

    <Stack spacing={2} direction='row'>

      <Button variant="text" href='http://google.com'>Text</Button>

      <Button variant="contained">Contained</Button>

      <Button variant="outlined">Outlined</Button>

    </Stack>

    <Stack spacing={2} direction='row'>

      <Button variant="contained" color="primary">primary</Button>

      <Button variant="contained" color="secondary">secondary</Button>

      <Button variant="contained" color="error">error</Button>

      <Button variant="contained" color="warning">warning</Button>

      <Button variant="contained" color="info">info</Button>

      <Button variant="contained" color="success">succes</Button>

    </Stack>

    <Stack display="block" spacing={2} direction="row">

      <Button variant="contained" size="small">small</Button>

      <Button variant="contained" size="medium">medium</Button>

      <Button variant="contained" size="large">large</Button>

    </Stack>

    <Stack spacing={2} direction="row">

      <Button variant="contained" startIcon={<SendIcon/>} disableRipple onClick={()=>{alert('test')}}>Send</Button>

      <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>

      <IconButton aria-label="send" color="success" size="small">

        <SendIcon/>

      </IconButton>

    </Stack>

    <Stack direction='row'>

      <ButtonGroup

        variant="text"

        orientation="vertical"

        size="small"

        color="secondary"

        aria-label="alignment button group"

      >

        <Button onClick={()=>{ alert('left')}}>left</Button>

        <Button>center</Button>

        <Button>right</Button>

      </ButtonGroup>

    </Stack>

  </Stack>

 )

}