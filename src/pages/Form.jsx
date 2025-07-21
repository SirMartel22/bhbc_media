import React from 'react'


const Form = () => {
  return (
    <div className="flex justify-center pt-18 px-48">
      <div className="form-wrapper overflow-hidden rounded-xl w-full flex justify-center items-center">

          <div className="left-side flex flex-col justify-center items-center max-w-2xl bg-[#3bb398] p-12 gap-6 h-[100%] w-xl rounded-l-lg">
            <h1 className="text-[#fafcff] font-bold text-2xl">Welcome</h1>

            <p className=" text-center text-[#fafcff]">To start receiving update about when you're on duty, kindly register with your info</p>
            <button className="register text-[#fafcff] font-bold border rounded-xl p-2">Register</button>
          
          </div>

          <div className="right-side flex flex-col justify-center items-center w-2xl max-w-3xl  bg-[#f5f5f5] p-12 gap-6 h-full rounded-r-lg">
            <div className="form-title text-[#3eaf9c] font-bold text-2xl">
              Register Your Info
            </div>
            <form action='/submit' method="POST" className="flex flex-col justify-center items-left gap-2">
              <div className="name-username-div">
                  <div className="name">
                      {/* <label for ="name" >Name </label> */}
                      <input type="text" className="" placeholder="Name e.g 'Timmy Oyin'" />  
                  </div>


                  <div className="name">
                      {/* <label for ="name" >Username </label> */}
                      <input type="text" className="" placeholder="Username eg. 'SirMartel' " />  
                  </div>
              </div>
                    
              <div className="email-phone-div">
                  <div className="name">
                      {/* <label for ="name">Email Address </label> */}
                      <input type="email" className="" placeholder="Email e.g 'someone@example.com'" />  
                    </div>
                    
                  <div className="name">
                      {/* <label for ="name">Phone </label> */}
                      <input type="email" className="" placeholder="Phone '0908 877 6655' " />  
                    </div>
              </div>
              
              <div className="WhatsApp">
                  <div className="name">
                      {/* <label for ="name">WhatsApp Number</label> */}
                      <input type="email" className="" placeholder="WhatsApp '0908 877 6655'" />  
                  </div>
              </div>

              <div className="unit">
                  <div className="name">
                      {/* <label for ="name">Pick Your Unit in The Media</label> */}
                        <select name="" id="">
                            <option value="Content">Content </option>
                            <option value="Videography">Videography</option>
                            <option value="Photogrpahy">Photography</option>
                            <option value="Livestream">Livestream & EasyWorship</option>
                        </select>  
                    </div>
              </div>

              <button onClick="">Submit</button>
                  
              </form>
            
            </div>

      </div>

      
    </div>
  )
}

export default Form
