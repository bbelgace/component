import React from "react";
import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";
function App() {
  return (
    <div>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
