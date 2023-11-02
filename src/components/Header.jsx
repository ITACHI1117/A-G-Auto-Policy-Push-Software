import headerStyles from "@/styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";

function Header() {
  let [active, setActive] = useState("push_software");

  const change_active_button = () => {
    if (active == "update_software") {
      setActive("push_software");
    }
  };
  const change_active_button_to_update = () => {
    if (active == "push_software") {
      setActive("update_software");
    }
  };

  return (
    <div className={headerStyles.description}>
      <h1>A&G SOFTWARE</h1>
      <br />

      {active == "push_software" ? (
        <div className={headerStyles.softwares}>
          <Link href="/">
            {" "}
            <p
              onClick={() => change_active_button()}
              style={{
                border: "1px solid red",
                backgroundColor: "red",
                color: "white",
              }}
            >
              A&G Policy Correction Software
            </p>
          </Link>
          <Link href="/article2">
            <p onClick={() => change_active_button_to_update()}>
              A&G Policy Push Software
            </p>
          </Link>
        </div>
      ) : (
        <div className={headerStyles.softwares}>
          <Link href="/">
            {" "}
            <p onClick={() => change_active_button()}>
              A&G Policy Update Software
            </p>
          </Link>
          <p
            onClick={() => change_active_button_to_update()}
            style={{
              border: "1px solid red",
              backgroundColor: "red",
              color: "white",
            }}
          >
            A&G Policy Push Software
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
