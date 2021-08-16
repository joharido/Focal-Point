import React from "react";
import Button from "./button";

interface HeaderProps {
  headerTitle: string;
  setShowAddTask: any;
  showAddTask: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  headerTitle,
  setShowAddTask,
  showAddTask
}: HeaderProps) => {
  return (
    <div>
      <header className="header">
        <h1>{headerTitle}</h1>
        <Button
          color={showAddTask ? "powderblue" : "black"}
          text={showAddTask ? "Close" : "Add"}
          textColor={showAddTask ? "black" : "white"}
          onClick={() => setShowAddTask(!showAddTask)}
        />
      </header>
    </div>
  );
}

export default Header;
