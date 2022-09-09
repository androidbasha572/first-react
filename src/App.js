import { useState } from "react";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY = [
  // {
  //   id: "e1",
  //   title: "Toilet Paper",
  //   amount: 94.12,
  //   date: new Date(2020, 7, 14),
  // },
  // {
  //   id: "e2",
  //   title: "New TV",
  //   amount: 799.49,
  //   date: new Date(2021, 2, 12),
  // },
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: "e4",
  //   title: "New Desk (Wooden)",
  //   amount: 450,
  //   date: new Date(2021, 5, 12),
  // },
];

function App() {
  let [expenses, pushNewData] = useState(DUMMY);

  const getData = (zData) => {
    //Receiving Data ^^^^^
    pushNewData((prevState) => [zData, ...prevState]);
  };

  return (
    <div>
      <NewExpense onUpData={getData} />
      <Expenses pushData={expenses} />
    </div>
  );
}

export default App;
