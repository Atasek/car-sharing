import "./Alert.scss";
import {cn} from "../../../../helpers";

export function Alert({isShown, message, onClose}) {
    const alertCn = cn('alert');
    return (
        <div
            className={alertCn()}
            style={{display: `${isShown ? "flex" : "none"}`}}
        >
            <span>{message}</span>
            <button className={alertCn('close-button')} onClick={onClose}>
                X
            </button>
        </div>
    )
}