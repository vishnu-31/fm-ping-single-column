import { useRef, useState } from "react";
import EmailValidator from "email-validator";

export const Form =() =>{
    const [isInvalid, setIsInvalid] = useState(false);
    const mailRef = useRef<HTMLInputElement>(null);
    const validateFn = () =>{
        if(mailRef.current?.value != null || mailRef.current?.value != "" ){
        setIsInvalid(EmailValidator.validate(mailRef.current.value))
    }
        
    }

    return (
        <form className="my-6 flex flex-col justify-center mx-auto md:flex-row w-[80%] max-w-[500px] md:w-[700px]">
            <span className="mt-3 mb-7 md:items-center">
                <input ref={mailRef} className="rounded-full px-8  focus:border-blue-700 h-12 w-full mb-3 border-[1px]"   
                    type="email" name="mail" id="mail" required formNoValidate/>
                {isInvalid &&<div  className={`text-xs italic text-red-500`}>Please provide a valid email address</div>}
            </span>
            <span>
                <button onClick={validateFn} 
                className="font-semibold 
                            w-full 
                            bg-blue-500 
                            text-white 
                            rounded-full 
                            p-3 px-6 
                            md:mt-3 md:mx-3 
                            border-[1px] 
                            hover:bg-blue-400" 
                type="button">Notify Me</button>
            </span>
        </form>
    );
}