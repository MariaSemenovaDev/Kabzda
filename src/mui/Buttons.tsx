import React from 'react';
import Button from '@mui/material/Button'
import {ButtonGroup, Fab} from "@mui/material";
import SaveIcon from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';


export const Buttons = () => {




    return (
        <div>
            {/*<Button variant="text">Text</Button>*/}
            {/*<Button variant="contained">Contained</Button>*/}
            {/*<Button variant="outlined">Outlined</Button>*/}
            <div>
                {/*<ButtonGroup variant="contained" aria-label="Basic button group">*/}
                {/*    <Button>One</Button>*/}
                {/*    <Button>Two</Button>*/}
                {/*    <Button>Three</Button>*/}
                {/*</ButtonGroup>*/}
                <ButtonGroup variant="text" aria-label="Basic button group" orientation='vertical'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>
            <Button loading loadingPosition="start" startIcon={<SaveIcon/>}>load</Button>
            <div>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                <Fab variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>
            </div>
            <hr/>
    <hr/>
        </div>
    );
};
