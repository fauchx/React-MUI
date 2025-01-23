import React, { useState } from 'react'
import { Stack,TextField, InputAdornment } from '@mui/material'
function MuiTextField() {
    const [value, setValue] = useState("")
    const onValue = (e) => {    
        setValue(e.target.value)
    }
  return (

    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label="name"/>
            <TextField label="email" variant='filled'/>
            <TextField label="password" variant='standard'/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label="Small secondary" size='small' variant='outlined' color='secondary'/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label="Form input" value={value} required onChange={onValue} error={!value} helperText={!value ? 'Required': 'Do not share' }/>
            <TextField label="Form input" helperText="dont share password"/>
            <TextField label="Password" type='password'/>
            <TextField label="Read only" InputProps={{readOnly: true}}/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label="amount" InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}/>
            <TextField label="weigth" InputProps={{endAdornment: <InputAdornment position='end'>kg</InputAdornment>}}/>
        </Stack>
    </Stack>
  )
}

export default MuiTextField