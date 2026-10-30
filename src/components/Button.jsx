

function Button({children, version, type, isDisabled}) {

    return (
        <button type={type} disabled={isDisabled} className={version}>
            {children}
        </button>
    )
}

export default Button