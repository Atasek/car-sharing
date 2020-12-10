export const selectStyles = {
    control: (styles) => (
        {
            ...styles,
            fontSize: 14,
            fontWeight: 300,
            borderRadius: 0,
            backgroundColor: "white",
            border: `none`,
            cursor: "pointer",
            width: 225,
            boxShadow: `none !important`,
            borderBottom: `1px solid #999999`,
            ':hover': {
                borderColor: `#0EC261`
            },
            ':focus': {
                borderColor: `#0EC261`
            }
        }
    ),
    input: (styles) => (
        {
            ...styles,
            fontWeight: 300,
            fontSize: 14,
            padding: 0,
            margin: 0,
        }
    ),
    dropdownIndicator: (styles) => (
        {
            display: `none`
        }
    ),
    indicatorSeparator: (styles) => (
        {
            display: `none`
        }
    ),
    clearIndicator: (styles) => (
        {
            color: `#EEEEEE`,
            transition: `all 100ms`,
            ':hover': {
                color: `#121212`
            },
        }
    )
}
