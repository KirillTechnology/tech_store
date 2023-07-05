// import './FormInput.scss'
import { Group, InputLabel, Input } from "./FormInput.styles.jsx";


function FormInput({ label, ...otherProps }) {
    return (
        <Group>
            <Input {...otherProps} />
            {label &&
                <InputLabel
                    $shrink={otherProps.value.length}
                    // className={`form-input-label ${otherProps.value.length ? 'active' : ''}`}
                >
                    {label}
                </InputLabel>
            }
            <br />
        </Group>
    )
}

export default FormInput;