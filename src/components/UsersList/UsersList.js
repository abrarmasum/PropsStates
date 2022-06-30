import UsersListItem from "../UsersListItem/UsersListItem";

const UsersList = (props) => {
  return (
    <ul className="user-list">
      {props.items.map((item) => (
        <UsersListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default UsersList;
