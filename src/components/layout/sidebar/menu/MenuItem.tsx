import React from 'react';
import { 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText 
} from '@mui/material';
import { QuestionAnswer } from '@mui/icons-material'

export const MenuItem = () => {
  return (
    <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
    </List>
  )
}
