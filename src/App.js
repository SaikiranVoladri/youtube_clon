import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed,VideoDetails ,SearchArea,ChannelDetails,Videos } from './components';


const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/Video/:id" element={<VideoDetails/>} />
        <Route path="/Channel/:id" element={<ChannelDetails/>} />
        <Route path="/Search/:searchTerm" element={<SearchArea/>} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App