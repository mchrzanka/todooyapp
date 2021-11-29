import { Brand } from "../brand" 
import {Bar} from "./styles"
 
import {UserLoginStatus } from "../authentication/login-status"
 
 function AppBar(props) {
    return (
        <Bar>
            <ul>
                <li><Brand font="14px" letter="16px" logo="20px" /></li>
               
                <li>
                  <UserLoginStatus/>
                </li>

            </ul>
        </Bar>
    )
}

export default AppBar