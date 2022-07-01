import UsersListItem from "../UsersListItem/UsersListItem";
import Card from "../../components/UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul className="user-list">
      {props.items.map((item) => (
        <UsersListItem key={item.id} item={item} />
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;
