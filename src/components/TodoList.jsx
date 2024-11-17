import TodoCard from "./TodoCard"

export default function TodoList(props) {
  const {todos} = props;
  return (
    <ul className="main">
      {todos.map((todo, index)=>{
        return (
          <TodoCard key={index} {...props} todo={todo} index={index}>
            <p>test</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
