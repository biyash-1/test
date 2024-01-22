import React from "react";

export default function Maps() {
  const description = [
    {
      id: 1,
      name: "Biyash",
      age: 21,
      study: "bachelor",
    },
    {
      id: 2,
      name: "Shyam",
      age: 22,
      study: "bachelor",
    },
    {
      id: 3,
      name: "Hari",
      age: 22,
      study: "bachelor",
    },
    {
      id: 4,
      name: "mohit",
      age: 22,
      study: "bachelor",
    },
    {
      id: 6,
      name: "ram",
      age: 22,
      study: "bachelor",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-full">
       <ul>
        <li>
          <p>{description.filter( (items) =>
          items.id>1).map((items) => (
            <p>{items.name} {items.study}</p>
           
          ))}
          </p>
        </li>
       </ul>
    </div>
  );
}
