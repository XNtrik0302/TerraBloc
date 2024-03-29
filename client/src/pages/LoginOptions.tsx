import { Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import React from "react";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleUserlogin = () => {
    navigate("/loginuser");
  };
  const handleAdminlogin = () => {
    navigate("/loginadmin");
  };
  const handleOwnerlogin = () => {
    navigate("/loginowner");
  };

  return (
    <div>
      <Appbar title="Login" />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Button
          onClick={handleOwnerlogin}
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 15, width: "250px", height: "50px" }}
        >
          Login as Super Admin
        </Button>
        <Button
          onClick={handleAdminlogin}
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 5, width: "250px", height: "50px" }}
        >
          Login as Admin
        </Button>
        <Button
          onClick={handleUserlogin}
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 5, width: "250px", height: "50px" }}
        >
          Login as User
        </Button>
        {/* <Button
          component={Link}
          to="/userdashboard"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 5, width: "250px", height: "50px" }}
        >
          Dummy User Dashboard
        </Button>{" "} */}
        <Typography variant="caption" sx={{ mt: 2 }}>
          New to TerraBloc? <Link to="/RegisterUser">Register</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default LoginPage;
