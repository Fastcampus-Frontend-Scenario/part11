type Props = {
    items: string[]
}
export const TodoList: React.FC<Props> = ({items}) => {
    return (
        <>
            {items.map((item, index) => {
                return (
                    <div key={`item-${index}`}>
                        <input className="toggle" type="checkbox" data-testid="todo-item-toggle" />
                        <label data-testid="todo-title">{item}</label>
                        <button className="destroy" data-testid="todo-item-button" />
                    </div>
                )
            }
            )}
            <button className="destroy" data-testid="todo-item-button" />
        </>
    )
}