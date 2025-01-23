import React, { useState } from 'react'
import {Stack, Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiButton() {
    const [formats, setFormats] = useState([])
    console.log(formats)
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats)
    }

  return (
    <Stack spacing={4} >
        <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://www.google.com'>
            Text
        </Button>
        <Button variant='outlined'>
            Outlined
        </Button>
        <Button variant='contained'>
            Contained
        </Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
            Primary
        </Button>
        <Button variant='contained' color='secondary'>
            Secondary
        </Button>
        <Button variant='contained' disabled>
            Disabled
        </Button>
        <Button variant="contained" color="error" >
            error
            </Button>
        <Button variant="contained" color="warning" >
            warning
            </Button>
        </Stack>
        <Stack spacing={2} direction='row' display="block">
            <Button variant='contained' size='small'>
                Small
            </Button>
            <Button variant='contained' size='medium'>
                Medium
            </Button>
            <Button variant='contained' size='large'>
                Large
            </Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>}>
                Start
            </Button>
            <Button variant='contained' endIcon={<SendIcon/>}>
                End
            </Button>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant='outlined' aria-label='aligment button group' size='small' color='secondary' orientation='vertical'>
            <Button >
                Left
            </Button>
            <Button >
                Center
            </Button>
            <Button>
                Right
            </Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormat} size='small' color='success'  exclusive orientation='vertical'>
                <ToggleButton value="bold" aria-label='bold'>
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value="italic" aria-label='italic'>
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value="underlined" aria-label='underlined'> 
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton