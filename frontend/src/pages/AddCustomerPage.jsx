import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { useState } from "react";

export const AddCustomerPage = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };

  const getLastName = (event) => {
    setLastName(event.target.value);
  };
  const getPhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (name === "") return;
    if (phoneNumber === "" || phoneNumber.length !== 9) return;
    if (email === "") return;

    const customerData = {
      name: name,
      lastname: lastname,
      phone_number: phoneNumber,
      email: email,
    };

    const response = fetch("http://127.0.0.1:8000/customers", {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    setName("");
    setLastName("");
    setPhoneNumber("")
    setEmail("");;
  };
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Add customer</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex"></div>
      </div>
      <form onSubmit={submitFormHandler} className="addCustomer">
        <label>Name:</label>
        <input
          onChange={getName}
          value={name}
          placeholder="Anna"
        ></input>
        <label>Lastname:</label>
        <input
          onChange={getLastName}
          value={lastname}
          placeholder="Nowak"
        ></input>
        <label>Phone Number:</label>
        <input
          onChange={getPhoneNumber}
          value={phoneNumber}
          placeholder="000 000 000"
        ></input>
        <label>Email:</label>
        <input
          onChange={getEmail}
          value={email}
          placeholder="annan@email.com"
        ></input>        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};