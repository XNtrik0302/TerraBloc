import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Signup from "./pages/owner/RegisterAdmin";
import { Login } from "./pages/Login";
import LoginPage from "./pages/LoginOptions";
import Admin from "./pages/admin/Admin";
import RegisterUser from "./pages/RegisterUser";
import "./App.css";
import TransferOwnershipFinal from "./pages/admin/FinalTransferOwnership";
import Map from "./pages/user/Map";
import Owner from "./pages/owner/Owner";
import User from "./pages/user/User";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LandDetails from "./pages/user/LandDetails";
import { Contacts } from "@mui/icons-material";

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#104775",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/loginuser" element={<Login value="user" />} />
            <Route path="/loginadmin" element={<Login value="admin" />} />
            <Route path="/loginowner" element={<Login value="owner" />} />
            <Route path="/userdashboard/*" element={<User />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/loginoption" element={<LoginPage />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/registeruser" element={<RegisterUser />} />
            <Route path="/map" element={<Map />} />
            <Route
              path="/userdashboard/landgallery/:id"
              element={<LandDetails />}
            />
            <Route
              path="/userdashboard/mylands/:id"
              element={<LandDetails />}
            />
            <Route
              path="/admin/transferownership"
              element={<TransferOwnershipFinal />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
