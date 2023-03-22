import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AsyncAddCashAction, asyncGetCashAction } from "./store/cashReducer";
import {
  addCustomerAction,
  fetchUsers,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: 50 }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => dispatch(AsyncAddCashAction())}>
          Add money
        </button>
        <button onClick={() => dispatch(asyncGetCashAction())}>
          Get money
        </button>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => dispatch(fetchUsers())}>
          Get clients from db
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div>There are no clients!</div>
      )}
    </div>
  );
}

export default App;
