import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactDiv = ({ hideContactDiv }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_07ooohc", "template_gxffy8k", form.current, {
        publicKey: "HWaDzw_ZqmQY0VXEB",
      })
      .then(
        () => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://res.cloudinary.com/deyzzky20/image/upload/v1740649700/portfolio/zdjqtvckmbhkc0dtsful.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Got Your Message
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Will reply to you asap
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ));
          hideContactDiv();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="contactdiv"
      className="h-screen z-50 flex items-center justify-center fixed 
      top-0 w-full opacity-100 transition-all"
    >
      {" "}
      <div
        id="contact_blur-div"
        onClick={hideContactDiv}
        className="w-full h-full bg-[rgb(0,0,0,.5)] blur-3xl absolute top-0 right-0"
      ></div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-cardHover px-6 py-12 rounded-2xl w-[30%] min-w-[80%] 
        mdl:min-w-[400px] h-[450px] space-y-4 relative transition-all duration-300"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="contact-input"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="contact-input"
        />
        <textarea
          name="message"
          className="contact-input h-[150px]"
          placeholder="Message"
        ></textarea>
        <div className="flex justify-center">
          <button
            className="contact-button bg-button cursor-pointer
             border-button hover:text-white"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactDiv;
