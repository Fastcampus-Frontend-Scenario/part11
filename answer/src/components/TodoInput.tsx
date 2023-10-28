import { useState } from "react"

type Props = {
    onInput:   (value: string) => void
}
export const TodoInput: React.FC<Props> = ({onInput}) => {
    const [value, setValue] = useState('')

    const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onInput(value)
            setValue('')
        }
    }
    return (
        <div>
            <input
                placeholder="What needs to be done?"
                onKeyDown={handleInput}
                autoFocus={true}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

