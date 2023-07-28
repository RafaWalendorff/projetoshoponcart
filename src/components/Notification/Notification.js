import ReactDOM from "react-dom"
import Alert from "react-bootstrap/Alert"
import "./index.css";

export const Notification = ({ message, variant = 'success', onClose }) => {
    return ReactDOM.createPortal(
        <div id="notification" className="notification">
            <Alert variant={variant} onClose={onClose} dismissible>
                {message}
            </Alert>
        </div>,
        document.body
    )
}