import React from "react";
import ListCharacters from "../../Components/ListCharacters/ListCharacters";
import Banner from "../../Components/Banner/Banner";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import Login from "../../Components/Login/Login";
import UserGreeting from "../../Components/UserGreeting/UserGreeting";

export default function Home() {
  return (
    <>
      <UserGreeting />
      <Banner />
      <SearchPanel />
      <ListCharacters />
    </>
  );
}
