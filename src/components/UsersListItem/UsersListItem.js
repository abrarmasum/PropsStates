const UsersListItem = (props) => {
  return (
    <li className="user-list-item">
      <span>{props.item.name}</span>
      <span>{props.item.age}</span>
    </li>
  );
};

export default UsersListItem;
