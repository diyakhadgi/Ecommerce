import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const AuthCheck = () => {

  const history = useHistory();

  if (localStorage.getItem("accessTokenApi")) {
    // do nothing
  } else {
    history.replace("/")
  }
}

export default AuthCheck;