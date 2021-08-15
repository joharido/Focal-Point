import Button from "./button";

const Header = ({headerTitle, onClick, showAddTask }) => {
  return (
    <header className="header">
      <h1>{headerTitle}</h1>
      <Button
        color={showAddTask ? "powderblue" : "black"}
        text={showAddTask ? "Close" : "Add"}
        textColor={showAddTask ? "black" : "white"}
        onClick={onClick}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
