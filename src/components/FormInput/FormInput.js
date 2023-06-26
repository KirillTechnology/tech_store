import './FormInput.scss'


function FormInput({ label, ...otherProps }) {
    return (
        <div className='input-group'>
            <input className="form-input" {...otherProps} />
            {label && 
                <label className={`form-input-label ${otherProps.value.length ? 'active' : ''}`}>{label}</label>
            }
            <br />
        </div>
    )
}

export default FormInput;