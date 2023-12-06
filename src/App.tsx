import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Form } from "./From"

function App() {


  return (
    <main className="flex-col h-[100vh] mx-auto text-center min-w-[350px] w-[90%] md:w-[800px]  pt-[6em]">
      <div className=" flex items-center mb-12 ">
        <img className="mx-auto w-16 md:w-20" src="/images/logo.svg" alt="Ping Logo" />
      </div>

      <div>
        <p className="text-xl md:text-5xl my-3 text-gray-400">We are launching <span className=" text-black font-bold">soon!</span></p>
        <p className="text-sm mb-10 md:text-xl">Subscribe and get notified</p>
        <Form/>
      </div>

      <div className="w-[80%] mx-auto">
        <img src="/images/illustration-dashboard.png" alt="dashboard illustration" />
      </div>

      <div className="justify-self-end min-mt-[100px] mt-[10vh]">
        <div className="my-5">
          <button className=" mx-2 rounded-full text-blue-500 border-[1px] w-8 h-8" type="button">
            <FontAwesomeIcon icon={faFacebookF}/>
          </button>
          <button className=" mx-2 rounded-full text-blue-500 border-[1px] w-8 h-8" type="button">
            <FontAwesomeIcon icon={faTwitter}/>
          </button>
          <button className=" mx-2 rounded-full text-blue-500 border-[1px] w-8 h-8" type="button">
            <FontAwesomeIcon icon={faInstagram}/>
          </button>
        </div>
        <div className="text-xs text-gray-400">&copy; Copyright Ping. All rights reserved.</div>
      </div>
    </main>  )
}

export default App
