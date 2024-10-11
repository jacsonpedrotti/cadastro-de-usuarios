import usersImage from "../../assets/users.png"
import { Background } from "./styles"

function TopBackground(){
    return (
        <Background>
        <img src={usersImage} alt="image-users" />
      </Background>

    )
}
export default TopBackground