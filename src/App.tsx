import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

function App() {

  return (
    <main className='flex 
                      items-center 
                      justify-center 
                      min-h-screen 
                      w-full'>
      <div className="flex-col 
                        pt-10
                        justify-around 
                        text-center
                        w-[80%]
                        min-h-screen
                        ">
        <div className="flex justify-center my-8 items-center">
          <img className="w-[65px] md:w-auto" src="/images/logo.svg" alt="Ping Logo" />
        </div>
        
        <div className="flex-col justify-center my-8">
          <p className='text-2xl md:text-4xl my-4'>
            <span className="font-light text-gray-400">We are launching&nbsp;</span>
            <span className="font-bold">soon!</span>
          </p>
          <p className="text-sm">
            Subscribe and get notified
          </p>
        
          <form >
            <div className="flex-col 
                              mt-8
                              md:flex-row 
                              max-w-[700px]
                              md:mx-auto
                              md:w-auto">
              <span>
                <input className="rounded-full 
                                        w-full  
                                        py-2
                                        h-12
                                        text-sm
                                        px-4 
                                        border-[1px]
                                        border-slate-300
                                        md:w-[60%]
                                        m-2" 
                            type="email" name="mail" id="mail" 
                            placeholder="Your email address.."/>
              </span>
              <span>
                <button className="rounded-full 
                                      bg-blue-400 
                                      text-white 
                                      text-xs 
                                      font-semibold 
                                      border-2 
                                      w-full 
                                      h-12
                                      mx-2 
                                      md:w-fit
                                      py-3 px-10" 
                            type="button">Notify Me</button></span>
            </div>
          </form>
        </div>

        <div className="my-16
                          flex-col 
                          w-full 
                          md:w-[80%] 
                          md:max-w-[700px] 
                          mx-auto">
          <img src="/images/illustration-dashboard.png" alt="dashboard image"/>
        </div>

        <div className="flex-col mt-28 mb-0 justify-self-end">
          <div className="flex 
                            justify-around 
                            w-[60%] 
                            mx-auto 
                            mt-8 
                            mb-3 
                            max-w-[150px]">
            <button className="border-2 w-8 h-8 rounded-full bg-white">
              <FontAwesomeIcon icon={faFacebookF}  className="text-blue-400"/>
            </button>
            <button className="border-2 w-8 h-8 rounded-full bg-white">
              <FontAwesomeIcon icon={faTwitter}  className="text-blue-400"/>
            </button>
            <button className="border-2 w-8 h-8 rounded-full bg-white">
              <FontAwesomeIcon icon={faInstagram}  className="text-blue-400"/>
            </button>
          </div>
          <div className="text-slate-400 text-xs max-w-[300px] mx-auto">
            &copy; Copyright Ping. all rights reserved
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
