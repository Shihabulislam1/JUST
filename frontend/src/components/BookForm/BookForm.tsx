import React from "react";

const BookForm = () => {
  return (
    <form className="rounded-3xl py-6 px-16 bg-cream-100 flex flex-col items-center gap-8">
      <div className="flex flex-col gap-8">
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input type="text" className="inField" id="name" name="name" 
          />
        </div>
        <div className="form-group">
          <label className="label"  htmlFor="email">Email</label>
          <input type="email" className="inField" id="email" name="email"
          placeholder="example@email.com" />
        </div>
        <div className="form-group">
          <label className="label"  htmlFor="phone">Phone</label>
          <input type="number" className="inField" id="phone" name="phone" 
          placeholder="8801xxxxxxxxx"/>
        </div>
        <div className="form-group">
          <label className="label"  htmlFor="fare">Fare</label>
          <input type="number" className="inField" id="fare" name="fare" />
        </div>
        <div className="form-group">
          <label className="label"  htmlFor="location">Location</label>
          <input
            type="text"
            className="inField"
            id="location"
            name="location"
          />
        </div>
        <div className="form-group">
          <label className="label"  htmlFor="destination">Destination</label>
          <input
            type="text"
            className="inField"
            id="destination"
            name="destination"
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
