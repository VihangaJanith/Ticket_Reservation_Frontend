import axios from "axios";
import React, { useEffect, useState } from "react";

function AllAgents() {
  const [AllUsers, setAllUsers] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5068/api/Admin").then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  }, []);
 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5068/api/User/${id}`);

      alert("User Deleted Successfully");
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      window.location.href = "/AllUsers";
    } catch (error) {
      console.error("Error deleting user data:", error);
    }
  };

  //create a function to handle active and inactive if active make it inactive and vice versa

  // const handleActive = async (id) => {
  //   try {
  //     const response = await axios.get(`http://localhost:5068/api/User/${id}`);
  //     const user = response.data;
  //     user.active = !user.active;
  //     await axios.put(`http://localhost:5068/api/User/${id}`, user);
  //     alert("User Details Updated Successfully");
  //     window.location.href = "/AllUsers";
  //   } catch (error) {
  //     console.error("Error updating user data:", error);
  //   }
  // };

  return (
    <>


      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>User Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {AllUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>

                <td>
                  {user.userRole === "1" ? (
                    <span className="badge bg-success">Backoffice</span>
                  ) : (
                    <span className="badge bg-success">Travel Agent</span>
                  )}
                </td>
                <td>
                  <a className="btn btn-warning " href={`/edituser/${user.id}`}>
                    Edit
                  </a>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                    style={{ marginLeft: "5px" }}
                  >
                    Delete
                  </button>
                  {/* {user.active === true ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleActive(user.id)}
                      style={{ marginLeft: "5px" }}
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => handleActive(user.id)}
                      style={{ marginLeft: "5px" }}
                    >
                      Activate
                    </button>
                  )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllAgents;
