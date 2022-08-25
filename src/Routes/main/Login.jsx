import { Box, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    
  });
  const[names,setNames]=useState("")
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        console.log(res);
        console.log("dd",names)
        auth.handleLogin(res.token,names);
       navigate("/")
      })
      .catch((err) => {});
  }
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <Input
            value={"eve.holt@reqres.in"}
            onChange={handleChange}
            placeholder="email"
            name="email"
          />
        </Box>
        <Box>
          <Input
            value={"cityslicka"}
            onChange={handleChange}
            placeholder="password"
            name="password"
            type="password"
          />
        </Box>
        <Box>
        <Input
            value={names}
            onChange={(e)=>setNames(e.target.value)}
            placeholder=" your user name"
            name="name"
            type="name"
          />
        </Box>
        <Box>
          <Input type="submit" />
        </Box>
      </form>
    </Box>
  );
}

export default Login;
