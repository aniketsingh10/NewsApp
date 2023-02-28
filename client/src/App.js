import { ContentCopy } from "@mui/icons-material";
import "./App.css";
import Articles from "./components/Content/Articles";
import Header from "./components/Header/Header";
import InfoHeader from "./components/InfoHeader/infoHeader";

function App() {
  return(
    <>
    <Header/>
    <InfoHeader/>
    <Articles/>
    </>

  );
}

export default App;
