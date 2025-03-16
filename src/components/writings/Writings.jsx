import React from "react";
import SectionHeading from "../../shared/SectionHeading";
import WritingsCard from "./components/WritingsCard";

const blogs = [
  {
    title:
      "My Honest Review of Harvard’s CS50x: Tips, Guidelines & Free Certificate",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fskif2crikaileokxd3z3.png",
    description:
      "In May 2024, after 3 months of hard work, I finally completed the Harvard CS50X course. Finally, I finished the whole journey and got a free certificate from Harvard. It was one of the best courses I have ever taken. Here is my certificate,",
    link: "https://dev.to/shihabhaque/my-honest-review-of-harvards-cs50x-tips-guidelines-free-certificate-32bk ",
  },
  {
    title: "16 Essential JavaScript Best Practices for Smarter Coding",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm8qhriod4lhv3b0rbfog.png",
    description:
      "JavaScript is the language of the web. Nowadays, we often use frameworks and libraries for our day-to-day web application building, but still, it is quite effective to learn the best practices of JavaScript to write more effective and efficient code. Here I have discussed the top 20 best practices that I think are a must-know for all the web programmers.",
    link: "https://dev.to/shihabhaque/20-essential-javascript-best-practices-for-smarter-coding-dhf",
  },
  {
    title: "8 Must Have Chrome Extenions for Web Developers",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1676305189139/be10952f-4d90-45bc-974b-5563b898565a.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    description:
      "Here are the 8 must-have Chrome extensions that I use daily and that every frontend developer should use 1.TimeYourWeb Time Tracker Are you having trouble with time management? This extension may help. This extension will track the amount of time ",
    link: "",
  },
];

const Writings = () => {
  return (
    <section id="writings" className="pt-16 md:pt-24 lg:pt-32">
      <SectionHeading text={"My Writings"} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <WritingsCard key={index} idx={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writings;
