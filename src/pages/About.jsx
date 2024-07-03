import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Viktor
        </span>
      </h1>
      <div className="flex flex-col gap-3 mt-5 text-slate-500">
        <p>
          Software Developer based in Canada, specializing in creating visually
          appealing and user-friendly web applications.
        </p>
      </div>

      <div className="flex flex-col py-10">
        <h3 className="subhead-text">My Skills</h3>

        <div className="flex flex-wrap mt-16 gap-12">
          {skills.map((skill) => (
            <div key={skill.imageUrl} className="w-20 h-20 block-container">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                  title={skill.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="flex flex-col gap-3 mt-5 text-slate-500">
          <p>
            I've worked with several companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.company_name}
                date={exp.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={exp.icon}
                      alt={exp.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: exp.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{
                  backgroundColor: exp.iconBg,
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {exp.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {exp.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {exp.points.map((point, index) => (
                    <li
                      key={`exp-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
