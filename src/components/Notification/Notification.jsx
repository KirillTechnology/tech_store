import { UserContext } from "../../context/UserContext";
import { NotificationContext } from "../../context/NotificationContext";
import { NotificationContainer, Cross } from "./Notification.styles";
import { useContext } from "react";


function Notification() {
    const { message, show, setShow } = useContext(NotificationContext)

    return (
        <NotificationContainer className={show ? 'ON' : null}>
            {message}
            <Cross onClick={() => {setShow(false)}}>&#10005;</Cross>
        </NotificationContainer>
    )
}


export default Notification;