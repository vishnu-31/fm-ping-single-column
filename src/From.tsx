import { useState } from "react";
import EmailValidator from "email-validator";

export const Form = () => {
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const [mail, setMail] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const validateFn = () => {
        console.log(mail);
        const validation =EmailValidator.validate(mail);
        console.log("Validation", validation)
        if (mail == "") {
            setIsInvalid(true);
            setErrorMessage("Whoops! It looks like you forgot to add your email");
        } else if (!validation) {
            setIsInvalid(true);
            setErrorMessage("Please provide a valid email address");
        } else {
            setIsInvalid(false);
        }
    }



    return (
        <form className="my-6 flex flex-col justify-center mx-auto md:flex-row w-[80%] max-w-[500px] md:w-[700px]">
            <span className="mt-3 mb-7 md:items-center">
                <input className="rounded-full px-8  focus:border-blue-700 h-12 w-full mb-3 border-[1px]"
                    type="email" name="mail" id="mail" placeholder="Your email address.."
                    value={mail} onChange={e => setMail(e.target.value)} required formNoValidate />
                {isInvalid && <div className={`text-xs italic text-red-500`}>{errorMessage}</div>}
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