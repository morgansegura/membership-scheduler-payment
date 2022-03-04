import React, { ReactEventHandler } from 'react'
import { useClickAway } from 'react-use'
// [Styles]
import { TextField } from 'styles/Form'

type Props = {
    // input
    label?: string
    register: any
    watch: any
    required?: boolean
    name?: string
    // icon
    position?: string
    icon?: JSX.Element
    [rest: string]: any
}

const TextInput: React.FC<Props> = ({
    label,
    register,
    type,
    required = false,
    watch,
    name,
    ...rest
}) => {
    const inputRef = React.useRef(null)
    const [focus, setFocus] = React.useState(false)
    const [blur, setBlur] = React.useState(true)

    const onFocus = (e: any) => {
        setFocus(true)
        setBlur(false)
    }

    const onBlur = (e: any) => {
        setFocus(false)
        setBlur(true)
    }

    useClickAway(inputRef, () => {
        console.log('useClickaway')
        if (watch(`${name}`).length === 0) setBlur(true)
    })

    const keyPressBlur = () => {
        if (watch(`${name}`).length === 0) setBlur(true)
    }

    React.useEffect(() => {
        const close = (e: any) => {
            if (e.keyCode === 27) {
                keyPressBlur()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [watch])

    return (
        <>
            <TextField ref={inputRef} focus={focus} blur={blur}>
                <div>{label}</div>
                <input
                    name={name}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}
                    {...register(name, { required })}
                    {...rest}
                />
            </TextField>
        </>
    )
}

export default TextInput
