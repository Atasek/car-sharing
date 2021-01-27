import "./Checkbox.scss";

export default function CustomCheckbox({value, onChange, label, checked}) {
    return <div key={label} className="checkbox">
        <input
            className="checkbox__input"
            type="checkbox"
            name={label}
            id={label}
            checked={checked}
            value={value}
            onChange={onChange}
            readOnly={!onChange}
        />
        <label className="checkbox__label" htmlFor={label}>
            {label}
        </label>
    </div>
}
