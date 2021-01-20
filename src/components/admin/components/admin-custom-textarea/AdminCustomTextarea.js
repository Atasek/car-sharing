import "./AdminCustomTextarea.scss";
import {cn} from "../../../../helpers";

export function AdminCustomTextarea({value, label, onChange}) {
    const textareaCn = cn('admin-textarea');
    return (
        <div className={textareaCn()}>
            <label className={textareaCn('label')}>{label}</label>
            <textarea
                className={textareaCn('textarea')}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}