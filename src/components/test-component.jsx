import "./style.css";

const user = {
  name: "Mathilda",
  age: 23,
};

const users = [
  {
    id: 1,
    name: "John",
    age: 32,
    profession: "teacher",
  },
  {
    id: 2,
    name: "Peter",
    age: 22,
    profession: "freelancer",
  },
  {
    id: 3,
    name: "Alice",
    age: 41,
    profession: "singer",
  },
  {
    id: 4,
    name: "Antony",
    age: 53,
    profession: "entertainer",
  },
];

function clicked() {
  const text = document.querySelector(".txt");
  text.classList.toggle("red");
}

function Element() {
  const { name, age } = user;
  return (
    <div>
      <p className="txt">
        This is {name} and she is {age} years old.
      </p>
      <button onClick={clicked}>Change Color</button>
      <div className="container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h3>{user.name}</h3>
            <p>{user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Element;
