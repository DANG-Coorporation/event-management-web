import style from "./style.module.css";
import React from "react";
import { Box, Divider, List, ListItem } from "@chakra-ui/react"; 


export default function TicketBar()
{
    return (
        <Box width='100%' >
            <List>
                <ListItem> JENIS TIKET</ListItem>
                <ListItem> DESKRIPSI</ListItem>
                <ListItem> JAM</ListItem>
                <Divider/>
                <ListItem>HARGA </ListItem>
            </List>
        </Box>
    )

}