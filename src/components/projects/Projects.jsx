import image from "./assets/image.png";
import SectionHeading from "../../shared/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import AnimateComponent from "../../shared/Animation";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    case: "1",
    title: "Urban Estates",
    link: "https://urbanestate-dbfe4.web.app/",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934200/portfolio/agkeou9djdflperjlrpa.jpg",
    text: "Urban Estates is a real estate website divided into three categoris of users, users, admins and agents. Users can look and purchase properties via offering a price to the agent. Agents can upload and sell properties and Admins have the birds eye view of the whole application. Some interesting features were added here like Role-based user authentication, image upload, payment integration and more. Click the case study button below to know",
    stacks: [
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740930461/portfolio/ruvxlmoqoohotter530t.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929822/portfolio/tqefwmnan7wrq1nyzpbg.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740931452/portfolio/iap37xwaafm4ywws2nqw.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/yiurfwklddlitackfwqt.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/pnr3cycovxym6sx3nmuf.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/svtv77hzyg6pyt9agpm9.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/i8qmy6ztj7mbhyvb3340.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/l6hlysjru26w4xq4f7ba.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/lfcsfnfsoqwk2x19bhzx.svg",
      "https://images.stripeassets.com/fzn2n1nzq965/2EOOpI2mMZgHYBlbO44zWV/5a6c5d37402652c80567ec942c733a43/favicon.png?w=180&h=180",
    ],
  },
  {
    case: "2",
    title: "UrbanEats",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934039/portfolio/etbjdwnldh67lha4dv2p.jpg",
    link: "https://urbaneats-72385.web.app/",
    text: "UrbanEats is a multilevel Restaurant store management web application where users can purchase their necessary delicious foods and also sellers can sell their prepared foods. users can add orders and update their foods via this application. Also, The design is unique and built with great attention. To know more Click the case study button below",
    stacks: [
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740930461/portfolio/ruvxlmoqoohotter530t.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929822/portfolio/tqefwmnan7wrq1nyzpbg.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740931452/portfolio/iap37xwaafm4ywws2nqw.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/yiurfwklddlitackfwqt.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/pnr3cycovxym6sx3nmuf.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/i8qmy6ztj7mbhyvb3340.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/zzyw11vl83sp0vvd6lt9.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/svtv77hzyg6pyt9agpm9.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/l6hlysjru26w4xq4f7ba.svg",
    ],
  },
  {
    case: "3",
    title: "WorkFlowr",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740980740/portfolio/mhurwsauum5vq3apuamj.png",
    text: "A kanban-UI based drag and drop Todo application that solves a simple problem which is managing tasks. the kanban board is divided into 3 columns, Todo, Ongoing and Done. It is a full stack application built with MERN stack technologies with user authentication and data persistence feature. Click on the case study button to know more.",
    link: "https://workflowrr.netlify.app/",
    stacks: [
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740930461/portfolio/ruvxlmoqoohotter530t.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929822/portfolio/tqefwmnan7wrq1nyzpbg.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740931452/portfolio/iap37xwaafm4ywws2nqw.svg",
      "https://dndkit.com/dnd-kit-logo.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/pnr3cycovxym6sx3nmuf.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/yiurfwklddlitackfwqt.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/svtv77hzyg6pyt9agpm9.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/i8qmy6ztj7mbhyvb3340.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/l6hlysjru26w4xq4f7ba.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/lfcsfnfsoqwk2x19bhzx.svg",
    ],
  },
  {
    case: "4",
    title: "ColorZapp",
    text: "ColorZapp is a web-based color-generating application built with HTML, CSS, and JavaScript. In this app, users can generate a random color by clicking 'Generate Color', the color will be displayed in the box below the button. Additionally, the User can copy that color's RGB and HEX code. The red, green, and blue toggles are for adjusting the color. This app also has a dark mode option.This was the final project of my CS50 task. Through this, I got my CS50 certificate.",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740985833/portfolio/o007nzbrevlezgh0tzfk.png",
    link: "https://colorzapp.netlify.app/",
    stacks: [
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740986067/portfolio/rkaqclndmrjaeftdlp5a.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740986058/portfolio/hetlmcpjiecfvkcistsd.svg",
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
    ],
  },
];

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="portfolio" className="py-28">
      <AnimateComponent>
        <h1 className="section-heading " style={{ marginBottom: 0 }}>
          Selected Projects
        </h1>
      </AnimateComponent>

      {projects.map((project, index) => {
        const targetScale = 1 - (projects.length - index) * 0.05;

        return (
          <ProjectCard
            key={project.case}
            idx={index}
            range={[index * 0.1, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
            project={project}
          />
        );
      })}
    </section>
  );
};

export default Projects;
