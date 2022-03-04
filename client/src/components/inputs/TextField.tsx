import React, { ReactEventHandler } from 'react'
import { useClickAway } from 'react-use'

// [Styles]
import { Input, Label, Icon } from 'styles/components/TextInput'

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

const TextField: React.FC<Props> = ({
    label,
    watch,
    name,
    position,
    register,
    required,
    icon,
    ...rest
}) => {
    const inputRef = React.useRef(null)
    const [focus, setFocus] = React.useState(false)
    const [blur, setBlur] = React.useState(true)

    const valueCount = () => {
        if (watch(name) === undefined || watch(name) === '') return 0
        else if (watch(name).length > 0) return watch(name)
    }

    const onFocus = (e: ReactEventHandler) => {
        setFocus(true)
        setBlur(false)
    }

    const onBlur = (e: ReactEventHandler) => {
        if (valueCount() > 0) {
            setFocus(true)
        } else {
            setFocus(false)
            setBlur(true)
        }
    }

    useClickAway(inputRef, () => {
        if (valueCount() > 0) setBlur(true)
    })

    const keyPressBlur = () => {
        if (valueCount() > 0) setBlur(true)
    }

    React.useEffect(() => {
        console.log(watch(name))
        const close = (e: any) => {
            if (e.keyCode === 27) {
                keyPressBlur()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [name, watch])

    return (
        <>
            <Input ref={inputRef} blur={blur} focus={focus} {...rest}>
                {label && (
                    <Label>
                        {icon && <Icon>{icon}</Icon>}
                        <span>{label}</span>
                    </Label>
                )}

                <input
                    name={name}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    {...register(name, { required })}
                />
            </Input>
            {focus && `The input is focused. ${watch(name)}`}
        </>
    )
}

export default TextField
