import { useState } from 'react'
import './App.css'



function App() {
  let [title , setTitle] = useState("");
  let [amount , setAmount] = useState("");
  let [date , setDate] = useState("");
  let [expenseRecord , setER] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();
    // show expense Call hona Chahiye
    const record = {
      title: title,
      amount: amount,
      date: date
    };
    setER([...expenseRecord, record]);
    console.log(typeof expenseRecord);
    
  }

  return (
    <>
      <div>
        <h1>Expense Tracker App</h1>
        <form onSubmit={handleSubmit}>
          <label>Title:<input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}></input></label><br></br>
          <label>Amount:<input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)}></input></label><br></br>
          <label>Date:<input type='date' value={date} onChange={(e)=>setDate(e.target.value)}></input></label><br></br>
          <button type='submit'>Add Expense</button><br></br>
        </form>

                {/* show expense records */}
        <div>
          <h2>All Expenses</h2>
          {expenseRecord.length === 0 ? (
            <p>No expenses added yet.</p>
          ) : (
            expenseRecord.map((exp, index) => (
              <div key={index}>
                <p>Title: {exp.title}</p>
                <p>Amount: {exp.amount}</p>
                <p>Date: {exp.date}</p>
                <hr />
              </div>
            ))
          )}
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
