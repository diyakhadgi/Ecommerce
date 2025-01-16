import React from "react";
import contact from "../assets/contacts.png";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: "absolute", top: "350px", right: "0px" }}>
        <img src={contact} alt="" />
      </div>
      <div style={{ position: "absolute", top: "200px", left: "150px" }}>
        <h1 className="text-center text-4xl">Contact Us</h1>
        <br />
        <input
          style={{
            width: "550px",
            border: "1px solid grey",
            color: "black",
            borderRadius: "5px",
            outline: "none",
            padding: "10px",
          }}
          type="text"
          name=""
          id=""
          placeholder="Name"
        />{" "}
        <br /> <br />
        <input
          style={{
            width: "550px",
            border: "1px solid grey",
            color: "black",
            borderRadius: "5px",
            outline: "none",
            padding: "10px",
          }}
          type="text"
          name=""
          id=""
          placeholder="Email"
        />{" "}
        <br /> <br />
        <textarea
          style={{
            width: "550px",
            border: "1px solid grey",
            color: "black",
            borderRadius: "5px",
            outline: "none",
            padding: "10px",
          }}
          name=""
          id=""
          placeholder="Message..."
        ></textarea>{" "}
        <br />
        <br />
        <button
          style={{
            border: "1px solid black",
            padding: "8px",
            width: "100px",
            borderRadius: "8px",
            backgroundColor: "#2e3c5c",
            color: "#fff",
          }}
        >
          Send
        </button>{" "}
        <br />
        <br />
        <h2>Follow us on:</h2>
        <br />
        <div className="flex ">
          <li className="mr-4" style={{ listStyle: "none" }}>
            <a href="#">Facebook</a>
          </li>
          <li className="mr-4" style={{ listStyle: "none" }}>
            <a href="#">Instagram</a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a href="#">Twitter</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Contact;
