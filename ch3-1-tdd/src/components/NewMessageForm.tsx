import { useState } from "react";

type Props = {
    onSend: (msg: string) => void
}

export const NewMessageForm: React.FC<Props> = ({onSend}) => {
    const [inputText, setInputText] = useState('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    const handleClick = () => {
        onSend(inputText)
        setInputText('')
    }

    return (
        <>
            <input
                type='text'
                data-testid='messageText'
                value={inputText}
                onChange={handleInputChange}
            />
            <button
                data-testid='sendButton'
                onClick={handleClick}
            >
                Send
            </button>
        </>
    );
}