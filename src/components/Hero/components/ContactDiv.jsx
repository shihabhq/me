const ContactDiv = ({ hideContactDiv }) => {
  const handleSubmit = () => {
    hideContactDiv();
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
      <div
        action="https://formsubmit.co/438ce5424609b476640040eedfa690ea"
        method="POST"
        className="bg-cardHover px-6 py-12 rounded-2xl w-[400px] h-[450px] space-y-4 relative transition-all duration-300"
      >
        <span>
          <i
            className="fa-solid fa-xmark absolute right-5 text-2xl top-5 
        cursor-pointer transition-all duration-200 hover:text-[rgb(255,255,255,.8)]"
            id="contact-close"
          ></i>
        </span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="contact-input"
        />
        <input
          type="email"
          name="email"
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
            className="contact-button bg-button border-button hover:bg-inherit hover:text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
        <input type="hidden" name="_captcha" value="false" />
      </div>
    </div>
  );
};

export default ContactDiv;
