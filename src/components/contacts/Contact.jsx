import SectionHeading from "../../shared/SectionHeading";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { GrSend } from "react-icons/gr";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_07ooohc", "template_saewxb7", form.current, {
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
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-12 overflow-hidden">
      <SectionHeading text={"Contact me"} />
      <div className="flex max-w-[1280px] flex-col-reverse w-full md:w-3/5 xl:flex-row items-center justify-around xl:w-11/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, bounce: 0 }}
          className="flex flex-col w-full mx-auto items-center justify-center"
        >
          <div className="flex items-center bg-card py-4 xsm:px-6 xsm:py-5 rounded-xl w-11/12 sm:min-w-[500px] mb-10 xl:min-w-[365px] xl:w-fit">
            <div className="p-4 rounded-full bg-cardHover mr-3">
              <span>
                <CiMail size={36} color="cyan" />
              </span>
            </div>

            <div>
              <h1 className="font-Poppins text-base xsm:text-xl font-semibold">
                Mail me at
              </h1>
              <a
                href="shihab:shihabhq@yahoo.com"
                className="font-Opensans font-semibold text-button text-sm xsm:text-lg"
              >
                shihabhq@yahoo.com
              </a>
            </div>
          </div>
          <div className="flex items-center bg-card py-4 xsm:px-6 xsm:py-5 rounded-xl w-11/12 sm:min-w-[500px] mb-10 xl:min-w-[365px] xl:w-fit">
            <div className="p-4 rounded-full bg-cardHover mr-3">
              <span>
                <CiLocationOn size={36} color="cyan" />
              </span>
            </div>

            <div>
              <h1 className="font-Poppins text-base xsm:text-xl font-semibold">
                Location
              </h1>
              <span className="font-Opensans font-semibold text-button text-sm xsm:text-lg">
                Dhaka, Bangladesh
              </span>
            </div>
          </div>
        </motion.div>

        <div>
          <h1 className="text-2xl font-bold block my-10 xl:hidden">OR</h1>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, bounce: 0 }}
          ref={form}
          onSubmit={sendEmail}
          className="bg-card p-8 md:p-12 rounded-2xl space-y-8 w-11/12 md:w-fit md:min-w-[715px]"
        >
          <h1 className="text-xl sm:text-3xl font-Poppins font-semibold">
            Send me a message
          </h1>
          <div className="flex justify-between flex-col md:flex-row">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Name"
              className="px-4 text-lg py-3 w-full mb-8 md:mb-0 md:w-[48%] focus:border-green-400 border border-transparent mr-auto outline-none bg-[#032135] rounded-xl"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              id="contact-email"
              className="px-4 text-lg py-3 w-full md:w-[48%] outline-none focus:border-green-400 border border-transparent bg-[#032135] rounded-xl"
            />
          </div>
          <textarea
            name="message"
            id="contact-message"
            className="w-full h-[200px] border border-transparent outline-none focus:border-green-400 rounded-2xl text-lg bg-[#032135] p-4"
            placeholder="Message"
            style={{ resize: "none" }}
            required
          ></textarea>
          <button
            className="bg-button flex items-center gap-1 text-background px-10 py-3 font-Poppins
            cursor-pointer transition-all duration-200 font-semibold text-lg rounded-xl border
             border-button hover:bg-card hover:text-white"
            type="submit"
          >
            Send <GrSend size={24} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
