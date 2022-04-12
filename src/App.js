import "./form.css";
import React, { useEffect, useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gender, setGender] = useState("");
  const [comment, setComment] = useState("");

  const [allData, setAllData] = useState();

  const submitValue = () => {
    const frmdetails = {
      FirstName: fName,
      LastName: lName,
      Gender: gender,
      Comment: comment,
    };

    const rawData = localStorage.getItem("data");
    const data = JSON.parse(rawData);

    if (!data) {
      const toAdd = [frmdetails];
      localStorage.setItem("data", JSON.stringify(toAdd));
    } else {
      const newToAdd = [...data, frmdetails];
      localStorage.setItem("data", JSON.stringify(newToAdd));
    }
    getData();
  };

  const resetValue = () => {
    setFName("");
    setLName("");
    setGender("");
    setComment("");
  };

  const getData = () => {
    const rawData = localStorage.getItem("data");
    const data = JSON.parse(rawData);
    setAllData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="fb">
        <div className="feed_content">
          <header>
            <h2>write your feedback</h2>
          </header>
          <table style={{ padding: "50px", fontSize: "20px" }}>
            <tr>
              <td>First Name</td>
              <td>
                <input
                  type="text"
                  id="first_name"
                  style={{ height: "30px", width: "220px" }}
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td mar>Last Name</td>
              <td>
                <input
                  type="text"
                  id="last_name"
                  style={{ height: "30px", width: "220px" }}
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="radio"
                  id="res"
                  value="mr"
                  name="gender"
                  onChange={(e) => setGender("Mr")}
                />{" "}
                male &nbsp;
                <input
                  type="radio"
                  id="res"
                  name="gender"
                  value="mrs"
                  onChange={(e) => setGender("Ms")}
                />
                female
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Comment</td>
              <td>
                <textarea
                  id="comment"
                  style={{ height: "100px", width: "220px", margin: "0px" }}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button
                  style={{
                    height: "40px",
                    width: "120px",
                    margin: "0px",
                    backgroundColor: "#acb3b9",
                  }}
                  onClick={submitValue}
                >
                  <b>Submit</b>
                </button>
              </td>
              <td>
                <button
                  style={{
                    height: "40px",
                    width: "120px",
                    margin: "0px",
                    backgroundColor: "#acb3b9",
                  }}
                  onClick={resetValue}
                >
                  <b>Reset</b>
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div className="comment">
          <header>
            <h2>all comments</h2>
          </header>
          <table
            style={{ width: "90%", marginLeft: "20px", marginTop: "10px" }}
            id="add_comment"
          >
            <thead style={{ backgroundColor: "#acb3b9" }}>
              <th style={{ width: "40px" }}>No.</th>
              <th>Name</th>
              <th>Comment</th>
            </thead>
            <tbody style={{ backgroundColor: "#d4d7dc" }}>
              {allData?.map((item, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <th>
                    {item.Gender} {item.FirstName} {item.LastName}
                  </th>

                  <th>{item.Comment}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "#d4d7dc",
          position: "absolute",
          left: "0px",
          bottom: "0",
          right: "0",
        }}
      >
        <p>Copyright &copy; 2021 Saloni Mahicha </p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
