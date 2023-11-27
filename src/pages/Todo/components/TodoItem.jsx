/* eslint-disable react/prop-types */
export default function TodoItem({todo,index,handleDelete}) {
    
  return (
    <tr key={index}>
      <th scope="row">{++index}</th>
      <td>{todo.todo}</td>
      <td>{todo.description}</td>
      <td>
        <button
          type="button"
          onClick={() => handleDelete(todo)}
          className="btn btn-danger"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}
