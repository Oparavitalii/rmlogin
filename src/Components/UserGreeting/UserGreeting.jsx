import React from "react";
import { useSelector } from "react-redux";
import Logout from "../Logout/Logout";
import "./index.scss";
export default function UserGreeting() {
  const { nameUser } = useSelector((state) => state.store);
  return (
    <div className="greeting">
      <div className="container">
        <div className="greeting__inner">
          <p>Hello,{nameUser}</p>
          <Logout />
        </div>
      </div>
    </div>
  );
}
