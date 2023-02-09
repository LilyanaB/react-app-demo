import { useState, useEffect } from "react";
import List from "./components/List.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Alert from "./components/Alert.jsx";
import Form from "react-bootstrap/Form";
import "./index.css";

const getLocalItems = () => {
  const itemStorage = localStorage.getItem("items");
  if (itemStorage) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalItems());
  const [isEdditing, setIsEdditing] = useState(false);

  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter TO DO");
    } else if (name && isEdditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEdditing(false);
      showAlert(true, "success", "TO DO Changed");
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        status: false,
      };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "All TO DOs removed");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "TO DO removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const individualItem = list.find((item) => item.id === id);
    setIsEdditing(true);
    setEditID(id);
    setName(individualItem.title);
  };

  return (
    <section className="section-wrapper">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>TO DO DEMO APP</h3>
        <Form.Group className="mb-3" controlId="form-contorl">
          <div className="flex flex-row gap-1">
            <Form.Control
              type="text"
              placeholder="Enter To Do"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit" variant="outline-secondary">
              {isEdditing ? "Edit" : "Add"}
            </Button>{" "}
          </div>
          <Form.Text className="text-muted">
            Organize your activities more efficient!
          </Form.Text>
        </Form.Group>
      </form>
      {list.length > 0 && (
        <div className="items-container flex flex-column">
          {list.map((item) => (
            <List
              items={list}
              removeItem={removeItem}
              editItem={editItem}
              item={item}
              key={item.id}
              list={list}
              setList={setList}
            />
          ))}
          <Button variant="outline-danger" type="button" onClick={clearList}>
            clear all
          </Button>{" "}
        </div>
      )}
    </section>
  );
}

export default App;
