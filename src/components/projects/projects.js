const projects = [
  {
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
  },
  {
    case: "2",
    title: "UrbanEats",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740934039/portfolio/etbjdwnldh67lha4dv2p.jpg",
    link: "https://urbaneats-72385.web.app/",
    github: "https://github.com/shihabhq/urbaneats",
    titleImg:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1741497218/urbaneats/bj0nv2q5qmggtiore6lg.jpg",
    tagline: "A Platform to Buy, Sell, and Manage Delicious Experiences.",
    text: "UrbanEats is a multilevel Restaurant store management web application where users can purchase their necessary delicious foods and also sellers can sell their prepared foods. users can add orders and update their foods via this application. Also, The design is unique and built with great attention. To know more Click the case study button below",
    stacks: [
      {
        text: "JavaScript",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
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
        text: "Router",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740931452/portfolio/iap37xwaafm4ywws2nqw.svg",
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
        text: "JWT",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/zzyw11vl83sp0vvd6lt9.svg",
      },

      {
        text: "Axios",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/l6hlysjru26w4xq4f7ba.svg",
      },
    ],
    colorcodes: ["#bf9444", "#0f142a"],
    approaches: [
      {
        problem:
          "User authentication was required for using all the features and routing accross every page(including public and private pages)",
        solution:
          "I used firebase authentication and onAuthStateChanged function to manage authentication. Also, for security I implemented JWT token authorization.",
      },
      {
        problem:
          "Different components used the same server link for data fetching. For this I had to write the same server link accross every component. Which was repetitive.",
        solution:
          "I created a hook named useAxios() and this hook provided an axiosInstance. This one mitigated the necessary of writing repetitive server link. Also, this axiosInstance maintained the 401 and 403 authorization security.",
      },
      {
        problem:
          "When User wants to add a food item then he/she needs to upload the image. Implementing image upload functionality was a challenge as I had to ensure image upload to a service provider and paste the image url in the database. Also, faster image loading was required.",
        solution:
          "To solve this I chose cloudinary. I created two functions handleImageChange() and uploadImage() to handle this. The handleImageChange() function checks the file type and saves it in a state and the uploadImage() function uploads the image to cloudinary and returns the secure_url of the image which I save in the database.",
      },
      {
        problem:
          "Implementing the dark mode was a challenge. As the whole application has huge number of elements and components. changing their style using the dark: tailwind class was a hassle.",
        solution:
          "I used a tailwindCSS library called daisyUI to implement this. I created a Theme Provider that changed the data-theme of the document using useEffect(). It also saved the theme data inside localStorage for future theme preference.",
      },
      {
        problem:
          "The gallery page needed some interactive images in a simple format.",
        solution:
          "I have implemented yet-another-react-lightbox library in this page for this functionality.",
      },
    ],
    gallery: [
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741519758/urbaneats/new%20gallery/sktg3zbx4am702wwk6hw.png",
        title: "Light mode of the UI",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741519760/urbaneats/new%20gallery/o7ulx62q9ncae17rwwqw.png",
        title: "Dark mode UI",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741519760/urbaneats/new%20gallery/axa7gjarr6kt6hsqq9pt.png",
        title: "login and register system that uses firebase authentication",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741519761/urbaneats/new%20gallery/xttlhqrabmag6e3dviil.png",
        title: "Gallery page where the react lightbox library was implemented",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741520696/urbaneats/new%20gallery/tun8wvtqrzn8l6xlhany.png",
        title: "Good looking Footer and Navbar",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741519758/urbaneats/new%20gallery/sktg3zbx4am702wwk6hw.png",
        title:
          "Added Foods page that shows the added foods by the user in a table format",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741519756/urbaneats/new%20gallery/psfvdsblup13hyqzm4hv.png",
        title:
          "Ordered Foods of the user are shown in this Order Foods private page.",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741519754/urbaneats/new%20gallery/w8yzj7vtwm6oc7lpdnuq.png",
        title:
          "Add foods page where I have implemented the Cloudinary image upload function.",
      },
    ],
    learnings:
      "This project has taught me Firebase authentication, JWT authorization, Image upload via a third party service provider and more. It also increased my knowledge and enhanced my capabilities in JavaScript, React and Tailwind. I had a tremendous confidence boost after building this project. I believe this learnings will help me in my further self taught developer journey.",
    improvements:
      "Several improvements can be made in this project. first of all, TailwindCSS got upgraded to a latest v4 and this project can be migrated to that version. I could've used the lazy loading and more performance optimization systems of React.In the backend, I only used MongoDB native codes whereas using mongoose could've increased the readability of code and enhanced developer experience. As I know Typescript, I can use TS in this project to increase type safety.",
  },
  {
    case: "3",
    title: "WorkFlowr",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740980740/portfolio/mhurwsauum5vq3apuamj.png",
    text: "A kanban-UI based drag and drop Todo application that solves a simple problem which is managing tasks. the kanban board is divided into 3 columns, Todo, Ongoing and Done. Drag and Drop can be done in both direction vertically and horizontally. It is a full stack application built with MERN stack technologies with user authentication and data persistence feature.",
    link: "https://workflowrr.netlify.app/",
    github: "https://github.com/shihabhq/workflowrr",
    tagline: "A Kanban UI-based Drag and Drop productivity management app",
    titleImg:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1741527769/workflowr/les4jdtjw2eq26j3jv2b.png",
    stacks: [
      {
        text: "JavaScript",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
      },
      {
        text: "TailwindCSS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740930461/portfolio/ruvxlmoqoohotter530t.svg",
      },
      {
        text: "ReactJS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929822/portfolio/tqefwmnan7wrq1nyzpbg.svg",
      },
      {
        text: "Router",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740931452/portfolio/iap37xwaafm4ywws2nqw.svg",
      },

      { text: "dnd-kit", image: "https://dndkit.com/dnd-kit-logo.svg" },
      {
        text: "NodeJS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/pnr3cycovxym6sx3nmuf.svg",
      },
      {
        text: "Firebase",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/yiurfwklddlitackfwqt.svg",
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
    ],
    colorcodes: ["#17a2b8", "#f9aa49", "#1487be", "#1fc678"],
    approaches: [
      {
        problem:
          "As each different user has different tasks to save, User authentication was required to get into the application.",
        solution:
          "I used the firebase authentication with React's PrivateRoute component combined with loading component to implement this.",
      },
      {
        problem:
          "Through the documentation and some youtube video, I could easily write the code of a single column vertically task drag and drop functionality. But The main and most painfull challenge was to implement the horizontal drag and drop system through columns. The main problem was that, the task object specifically was added in a column by checking the 'column' property of that task object. Each 'column' property of a task was fixed to that particular Column. If I drag horizontally, the fixed 'column' property name didn't make it switch tasks from one columen to another column.",
        solution:
          "I have watched countless tutorials and read a huge amount of documentation and finally found a solution to this problem. I created a handleDragOver() function of dnd-kit/core that check for the column name difference while dragging. If the column name was different from the initial column, this function changes the column's name. this ensured the horizontal drag and drop functionality. ",
      },
      {
        problem:
          "Data persistency is a challenge. As client can change the state of task by dragging and dropping them in various ways. It is a challenge to maintain this and persist the data in the database in this exact location.",
        solution:
          "There is no easy solution in JavaScript just like arrayMove() in dnd-kit. For large scale application I could've made my own arrayMove() function and sent the changed data in MongoDB but as it is just a small project, I can just send the whole array of tasks data in the database and that is completely fine for this. If you open the network tab you can see that in each drag and drop a network request is sent in the database to save this current data.",
      },
    ],
    gallery: [
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741527550/workflowr/wg1zebjgt4j4cnn6hzq3.png",
        title: "Home Page",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542643/workflowr/n59ufk3wn9rgkf1halky.png",
        title: "Blank Kanban board without any task",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542565/workflowr/xr7qwz8cetflh67qqbsd.png",
        title: "Adding a new Task functionality through a modal.",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542566/workflowr/jyezhwqe5iin9efdr5xy.png",
        title: "Direct editing functionality through clicking the task title.",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542566/workflowr/r7spviehygwaqn2kv4xt.png",
        title: "Login Page",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542565/workflowr/balry2i45ytvcclt2465.png",
        title: "Register Page",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542565/workflowr/iyco5hpuopb3slx77i7v.png",
        title: "While Dragging a task from one column to another.",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542565/workflowr/mncalpuzkarjmzqkqzmp.png",
        title: "Loading Spinner of the app",
      },
    ],
    learnings:
      "It is one of my best small projects. I really enjoyed a lot while building this. This Project not just has enhanced my MERN stack skills with tailwind UI building but taught me how to dive deep and implement something from reading documentation of a package. Initially, the dnd-kit was a hassle for me to implement and it generated a huge frustation. But I remained calm and steady to build this.",
    improvements:
      "Currently in the project, There are fixed amount of columns(only 3). Future improvements can be adding the functionality to increase the column count dynamically. I could've improved the UI and implemented dark mode using Tailwind. Also, data persistency is not that much secured. JWT authorization can be added over here. Lastly, This project chould have a better data persistency method instead of the whole array saving. But for a small project like this, it is completely fine.",
  },
  {
    case: "4",
    title: "ColorZapp",
    text: "ColorZapp is a web-based color-generating application built with HTML, CSS, and JavaScript. In this app, users can generate a random color by clicking 'Generate Color', the color will be displayed in the box below the button. Additionally, the User can copy that color's RGB and HEX code. The red, green, and blue toggles are for adjusting the color. This app also has a dark mode option.This was the final project of my CS50 course. Through this, I got my CS50 certificate.",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740985833/portfolio/o007nzbrevlezgh0tzfk.png",
    link: "https://colorzapp.netlify.app/",
    titleImg:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1741548647/colorzapp/qtsemmyzzknmh1eyiykr.png",
    github: "",
    tagline:
      "A color-generating web-based application that gives different format of color codes with copying functionality.",
    stacks: [
      {
        text: "HTML",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740986067/portfolio/rkaqclndmrjaeftdlp5a.svg",
      },
      {
        text: "CSS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740986058/portfolio/hetlmcpjiecfvkcistsd.svg",
      },
      {
        text: "JavaScript",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
      },
    ],
    colorcodes: ["#08cc70", "#ff2323", "#30cb30", "#2caeff", "#121212"],
    approaches: [
      {
        problem: "Generating a random color was a challenge",
        solution:
          "I used JavaScript's Math.random() function to create 3 different value between 0 to 255. then I dynamically changed the css of the box using rgb color code.",
      },
      {
        problem:
          "From RGB to HEX code color transform functionality was needed.",
        solution:
          "On the left side of the app, there are two input fields. One is for RGB and another is for HEX. These two fields will give the RGB and HEX values of the generated color.Toggling each input field will change the corresponding another field's value accordingly as I have implemented isRGBValid, isHexValid and event listeners to change values realtime. Also, I have used CSS absolute property and a copy icon from the fontawesome website to add the copy function from these inputs. There is a CSS animation is used to assure the user that the color code has been copied.",
      },
      {
        problem:
          "Toggleing RGB range inputs should change the box's color accordingly.",
        solution:
          "I used JavaScript dom manipulation to implement this functionality.",
      },
      {
        problem: "I had to implement dark mode in the app",
        solution:
          "this app is not created by using any framework or library. I used vanilla JavaScript's dom manipulation and localStorage's data persistency to save the background state and change the background color of the app accordingly.",
      },
    ],
    gallery: [
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741549348/colorzapp/gt0ngpmajmptnok27lrj.jpg",
        title: "My CS50X certificate",
      },

      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741548647/colorzapp/a48zjcysjjczq13qspmk.png",
        title: "The application UI",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741548648/colorzapp/huebuz5x8megfbubwfnv.png",
        title: "Dark mode of the UI",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741548647/colorzapp/vscqzwcpdtcyj1njojgm.png",
        title: "RGB to HEX color change and copy functionality",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741548647/colorzapp/qtsemmyzzknmh1eyiykr.png",
        title: "Generate Color functionality",
      },
    ],
    learnings:
      "This was my CS50 final project. I submitted this one and got my CS50X certificate. It was very hard and took a lot time to complete this course but it gave me an overview of the whole computer science world. I really enjoyed each of the lectures and tasks of this course and it ensured my commitment and consistency in the tech world.",
    improvements:
      "This project was created using just HTML, CSS and JavaScript. I am now profiecient enough to write code in TypeScript and React and these modern web technologies can be used to build this type of small apps. Also, I could've used MongoDB and firebase authentication over here. As, I got my CS50 certificate through only JavaScript, I can say that it was a success.",
  },
];
export default projects;
