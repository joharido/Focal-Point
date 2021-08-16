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

      {/* <header className="header">
        <h1>{props.headerTitle}</h1>
        <Button
          color={props.showAddTask ? "powderblue" : "black"}
          text={props.showAddTask ? "Close" : "Add"}
          textColor={props.showAddTask ? "black" : "white"}
          onClick={() => props.setShowAddTask(!props.showAddTask)}
        />
      </header> */}
    </div>
  );
}

// const test = (headerTitle: any, onClick: any , showAddTask: string ) => {
//   return (
//     <header className="header">
//       <h1>{headerTitle}</h1>
//       <Button
//         color={showAddTask ? 'powderblue' : 'black'}
//         text={showAddTask ? 'Close' : 'Add'}
//         textColor={showAddTask ? 'black' : 'white'}
//         onClick={onClick}
//       />
//     </header>
//   );
// };
// Header.defaultProps = {
//   title: "Task Tracker",
// };

export default Header;
