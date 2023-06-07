import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    //form은 전송 후에 refresh(새로고침) 된다
    e.preventDefault();

    console.log(username, password);
  };

  //onChang는 input의 값이 바꿀때마다 실행하는 함수
  return (
    <>
      <form onSubmit={onSubmit}>
        {/*<form onSubmit={onSubmit}> -> form에는 onSubmit 필수*****  */}
        <input
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default App;
