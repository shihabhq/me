import NotFound from "./NotFound";
import Nav from "../components/casestudy/Nav";
import Summary from "../components/casestudy/Summary";
import Introduction from "../components/casestudy/Introduction";
import Approach from "../components/casestudy/Approach";
import Gallery from "../components/casestudy/Gallery";
import Footer from "../components/footer/Footer";
import { motion } from "motion/react";

const CaseStudy = () => {
  const project = {
    case: "1",
    title: "Urban Estates",
    link: "https://urbanestate-dbfe4.web.app/",
    titleImg:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1741407394/urbanestates/r8csjbtrxpzs83u4msfl.png",
    github: "https://github.com/shihabhq/urban-estates",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934200/portfolio/agkeou9djdflperjlrpa.jpg",
    text: "Urban Estates is a real estate website divided into three categoris of users, users, admins and agents. Users can look and purchase properties via offering a price to the agent. Agents can upload and sell properties and Admins have the birds eye view of the whole application. Some interesting features were added here like Role-based user authentication, image upload, payment integration and more. Each user role has its own dashboard.",
    stacks: [
      {
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
        text: "javaScript",
      },
      {
        text: "TailwindCSS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740930461/portfolio/ruvxlmoqoohotter530t.svg",
      },
      {
        text: "React",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929822/portfolio/tqefwmnan7wrq1nyzpbg.svg",
      },
      {
        text: "Firebase",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/yiurfwklddlitackfwqt.svg",
      },
      {
        text: "NodeJS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/pnr3cycovxym6sx3nmuf.svg",
      },
      {
        text: "ExpressJS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/svtv77hzyg6pyt9agpm9.svg",
      },
      {
        text: "MongoDB",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/i8qmy6ztj7mbhyvb3340.svg",
      },
      {
        text: "Axios",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/l6hlysjru26w4xq4f7ba.svg",
      },
      {
        text: "Mongoose",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/lfcsfnfsoqwk2x19bhzx.svg",
      },
      {
        text: "Stripe",
        image:
          "https://images.stripeassets.com/fzn2n1nzq965/2EOOpI2mMZgHYBlbO44zWV/5a6c5d37402652c80567ec942c733a43/favicon.png?w=180&h=180",
      },
    ],
    approaches: [
      {
        problem: `User role was divided into 3 categories, "Agent", "Admin" and "User". 
        The app needs to check teh user role and
         different roles required diffrent Dashboard design and accessiblility.`,
        solution: `The onAuthStateChanged function with the React's useEffect
         hook looks for user role which is saved in the database. 
         I Used react conditional rendering with role-access based Private Routing to render the
         dashboard accordingly for the required user role.`,
      },
      {
        problem: `Uploading image and while uploading the image user have to see the image real time preview`,
        solution: `I used Cloudinary api to upload and instantly the uploaded url was saved to MongoDB for future usage.
         I used JavaScript's FileReader() with react's state to show the realtime image Preview.`,
      },
      {
        problem: `The users can purchase properties from agents. For this payment integration in the application was
      necessary.`,
        solution: `Stripe's payment intent with React systems is used in this app to apply 
        the payment system integration over here`,
      },
      {
        problem: `The initial Loading time was very slow in this application. Images were slowly loading and the place was
        blank.`,
        solution: `I uploaded the static images to cloudinary manually which ensured faster image rendering. Also I added teh lazy loading system of React
        for more performance optimization. There is a small loading component that was required for good UI.`,
      },
      {
        problem: `The data persistency was a challenge as more and more data like user, wishlists, reviews,
         property requests and offers are saved in the database. repetitive data was saved there.`,
        solution: `As I used MongoDB database, which is a NO-SQL database, repetitive data were saved due to
         no relations among tables. Hence, I used Mongoose ORM and used the populate() functionality to connect between collections.
         This reduced the repetitive data saving problem.`,
      },
    ],
    tagline: "A Real estate management app for multilevel users.",
    colorcodes: ["#f1913d", "#2d2e33", "#20b759"],
    gallery: [
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741446821/urbanestates/eumomhhc4mlbmcbuoydp.png",
        title: "Payment gateway system using Stripe",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741446841/urbanestates/lprxonydcx1ypwbh2dtc.png",
        title:
          "Good looking UI Home page with sticky navbar and additional 8 sections",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741446843/urbanestates/z8nezdjnueds0cwexacz.png",
        title: "Authentication using firebase authentication",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741446891/urbanestates/cf4puuawc3jqv2bubcfs.png",
        title: "Agent Dashboard",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741446829/urbanestates/zwcqz0b0ckewa4tqzbff.png",
        title:
          "Upload image to cloudinary and add properties in the application",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741446821/urbanestates/gnxs0ccos4wpylnpalis.png",
        title: "User Dashboard",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741446815/urbanestates/x2em1lugexexyzjh344b.png",
        title: "Admin Dashboard",
      },
    ],
    learnings:
      "The project has taught me the image upload functionality, real time database update using mongoose, and payment integration. Also my existing knowledge of JavaScript, React, and TailwindCSS were improved and solidified. I had a tremendous confidence boost to build large scale web applications using these technologies and increase my horizon to the unknown in the world of web.",
    improvements:
      "I could've increased the security of the backend by using the JWT authentication. Future plans includes this to implement. I can add Dark mode and additional pages for furthur improvements. Also, Some basic animations could have been added over here using Framer motion.",
  };

  if (!project) {
    return <NotFound />;
  }
  return (
    <>
      <Nav />
      <Summary project={project} />
      <Introduction project={project} />
      <Approach approaches={project.approaches} />
      <Gallery project={project} />
      <motion.section
        className="container max-w-[1280px] w-[90%] mx-auto my-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold my-4">Key Learnings</h1>
        <p className="font-medium">{project.learnings}</p>
      </motion.section>
      <motion.section
        className="container max-w-[1280px] w-[90%] mx-auto my-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold my-4">Future Improvements</h1>
        <p className="font-medium">{project.improvements}</p>
      </motion.section>
      <Footer />
    </>
  );
};

export default CaseStudy;
