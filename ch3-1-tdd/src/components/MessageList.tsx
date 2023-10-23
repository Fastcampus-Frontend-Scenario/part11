type Props = {
    data: Array<string>
}
export const MessageList: React.FC<Props> = ({ data }) => {
    return (
        <>
            {data.map((message, i) => (
                <div key={i} data-testid='messageText'>{message}</div>
            ))}
        </>
    )
}