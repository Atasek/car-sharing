import "./Textarea.scss";
import {cn} from "../../../../helpers";

export function Textarea({value, label, onChange}) {
    const textareaCn = cn('admin-textarea');

    function handleText(event) {
        onChange(event.target.value);
    }

    return (
        <div className={textareaCn()}>
            <label className={textareaCn('label')}>{label}</label>
            <textarea
                className={textareaCn('textarea')}
                value={value}
                onChange={handleText}
            />
        </div>
    )
}