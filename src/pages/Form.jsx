import React from 'react'


const Form = () => {
  return (
    <div>
          <form action='/submit' method="POST">
            <div className="name">
                <label for ="name" >Name </label>
                <input type="text" className="" placeholder="Timmy Oyin" />  
            </div>


            <div className="name">
                <label for ="name" >Username </label>
                <input type="text" className="" placeholder="SirMartel" />  
              </div>
              
              
            <div className="name">
                <label for ="name">Email Address </label>
                <input type="email" className="" placeholder="someone@example.com" />  
              </div>
              
            <div className="name">
                <label for ="name">Phone </label>
                <input type="email" className="" placeholder="0908 877 6655" />  
              </div>
              
            <div className="name">
                <label for ="name">WhatsApp Number</label>
                <input type="email" className="" placeholder="0908 877 6655" />  
            </div>
            
             <div className="name">
                <label for ="name">Pick Your Unit in The Media</label>
                  <select name="" id="">
                      <option value="Content">Content </option>
                      <option value="Videography">Videogrpahy</option>
                      <option value="Photogrpahy">Photogrpahy</option>
                      <option value="Livestream">Livestream & EasyWorship</option>
                  </select>  
              </div>
        </form>

      
    </div>
  )
}

export default Form
