import { Box, Paper, Toolbar } from "@mui/material"
import { MyTabs } from "../../components/tabs/MyTabs.com"

export const Lessons:React.FC<{}>=()=>{
    return <>
    <Box>
        <Paper elevation={3}>
            <Toolbar><h1>My React Notes</h1></Toolbar>
        <MyTabs/>
        </Paper>
        
       </Box>
       </>
}