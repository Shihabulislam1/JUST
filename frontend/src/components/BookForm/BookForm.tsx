import { useUserAddress } from "@/contexts/user.context";
import { useState } from "react";
import React from "react";

const BookForm = () => {
  const { contract1, userAddress } = useUserAddress();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [fare, setFare] = useState<number>();
  const [location, setLocation] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contract1.addUser(
        userAddress,
        name,
        email,
        phone,
        fare,
        location,
        destination,
        new Date().toLocaleDateString(),
        new Date().toLocaleTimeString()
      );
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <form
      className="rounded-3xl py-12 px-16 bg-cream-100 flex flex-col items-center gap-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4">
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="inField"
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="inField"
            id="email"
            name="email"
            placeholder="example@email.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            className="inField"
            id="phone"
            name="phone"
            placeholder="8801xxxxxxxxx"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="fare">
            Fare
          </label>
          <input
            type="number"
            className="inField"
            id="fare"
            onChange={(e) => {
              setFare(Number(e.target.value));
            }}
            name="fare"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            className="inField"
            id="location"
            name="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="destination">
            Destination
          </label>
          <input
            type="text"
            className="inField"
            id="destination"
            name="destination"
            onChange={(e) => {
              setDestination(e.target.value);
            }}
          />
        </div>
      </div>

      <button type="submit" className="button">
        Book Now
      </button>
    </form>
  );
};

export default BookForm;
