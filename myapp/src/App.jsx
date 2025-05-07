import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { enqueueSnackbar, SnackbarProvider } from 'notistack'
import axios from 'axios'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/view")
      .then((res) => {
        if (res.data.message === "Success") {
          setCount(res.data.data)
        }
      })
      .catch((err) => {
        console.log("Error fetching data:", err)
      })
  }, [])

  const Conform = (a, b, c) => {
    alert("Email is Senting Wait for Few Seconds......")
    axios.post("http://localhost:5000/api/sentmail", {
      toEmail: a,
      subject: b,
      message: c
    })
      .then((res) => {
        if (res.data.message === "Success") {
          enqueueSnackbar("Email sent successfully", { variant: "success" })
        }
      })
      .catch((err) => {
        console.log(err)
        enqueueSnackbar("Email not sent", { variant: "error" })
      })
  }

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <h1>Lawyer Appointment Booking </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {count.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phonenumber}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.reason}</td>
              <td>
                <button
                  onClick={() => Conform(item.email, "AppointmentBooked Successfully", `${item.name} Appointment Booked Successfully`)}
                  style={{ backgroundColor: 'green', color: 'white', marginRight: '5px' }}
                >
                  Conform
                </button>
                <button
                  onClick={() => Conform(item.email, "AppointmentBooked Cancelled", `${item.name} Appointment Cancelled`)}
                  style={{ backgroundColor: 'red', color: 'white' }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SnackbarProvider>
  )
}

export default App
