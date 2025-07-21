import React from 'react'
import ctl from '@netlify/classnames-template-literals';


const Form = () => {

  const inputFormStyle = ctl(`
        bg-[#f4f8f7] 
        py-1 
        px-8 
        rounded-lg 
        border 
        text-[#36454F]
        w-full
    `)
  
  const inputFormDivs = ctl(`
        flex
        flex-col
        gap-2
    `)
  return (
    <div className="flex justify-center pt-8 px-2 md:px-48">
      <div className="form-wrapper overflow-hidden rounded-xl w-full flex flex-col md:flex-row justify-center items-center">

          <div className="left-side flex flex-col justify-center items-center w-full md:w-xl md:max-w-2xl bg-[#3bb398] p-12 gap-6 h-[100%]  rounded-l-lg">
            <h1 className="text-[#fafcff] font-bold text-2xl">Welcome</h1>

            <p className=" text-center text-[#fafcff]">To start receiving update about when you're on duty, kindly register with your info</p>
            <button className="register text-[#3bb398] font-bold border rounded-xl p-2 bg-[#f5f5f5] hover:bg-[#3bb398] hover:text-[#f5fcff] w-full">Register</button>
          
          </div>

          <div className="right-side flex flex-col justify-center items-left w-full md:w-2xl md:max-w-3xl bg-[#f5f5f5] p-8 gap-6 h-full rounded-r-lg">
            <div className="form-title text-[#3eaf9c] font-bold text-2xl">
              Register Your Info
            </div>
            <form action='/submit' method="POST" className="flex flex-col justify-center items-left gap-2 ">
              <div className={inputFormDivs }>
                  <div className="name">
                      {/* <label for ="name" >Name </label> */}
                      <input type="text" className={inputFormStyle} placeholder="Name e.g 'Timmy Oyin'" />  
                  </div>


                  <div className="name">
                      {/* <label for ="name" >Username </label> */}
                      <input type="text" className={inputFormStyle} placeholder="Username eg. 'SirMartel' " />  
                  </div>
              </div>
                    
              <div className={inputFormDivs}>
                  <div className="name">
                      {/* <label for ="name">Email Address </label> */}
                      <input type="email" className={inputFormStyle} placeholder="Email e.g 'someone@example.com'" />  
                    </div>
                    
                  <div className="name">
                      {/* <label for ="name">Phone </label> */}
                      <input type="tel" className={inputFormStyle} placeholder="Phone '0908 877 6655' "/>  
                    </div>
              </div>
              
              <div className="WhatsApp">
                  <div className="name">
                      {/* <label for ="name">WhatsApp Number</label> */}
                      <input type="tel" className={inputFormStyle} placeholder="WhatsApp '0908 877 6655'" />  
                  </div>
              </div>

              <div className="unit">
                  <div className="name">
                      {/* <label for ="name">Pick Your Unit in The Media</label> */}
                        <select name="" id="" className={inputFormStyle}>
                            <option value="Content">Content </option>
                            <option value="Videography">Videography</option>
                            <option value="Photogrpahy">Photography</option>
                            <option value="Livestream">Livestream & EasyWorship</option>
                        </select>  
                    </div>
              </div>

              <button onClick="" className="text-[#fafcff] mt-6 font-bold border rounded-xl p-2 bg-[#3bb398] hover:bg-[#f5f5f5] hover:text-[#3bb398]">Submit</button>
                  
              </form>
            
            </div>

      </div>

      
    </div>
  )
}

export default Form
