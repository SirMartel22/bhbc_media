import {useState, useEffect} from 'react'



const History = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  
  console.log(backendData);

  return (
    <div>
      <h2>This is Duty History Page</h2>

      {(typeof backendData === "undefined")? (
        <p>Loading...</p>
      ) : (
          backendData.map((user, i) => (
            <p key={i}>{ user}</p>
          ))
      )}
    </div>
  )
}

export default History
