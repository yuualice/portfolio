import { experienceData } from "../routes/experience";

export function Experience(): JSX.Element {
  return (
    <section className="section" id="experience">
      <div className="content">
        <h1 className="title">Experience.</h1>

        <div className="experience-container flex flex-col self-start md:items-stretch items-start md:w-3/5 justify-between">
          {experienceData.map((experience, index) => {
            return (
              <div key={index} className="mb-5">
                <div
                  key={index}
                  className="flex md:flex-row flex-col md:items-center md:justify-between"
                >
                  <strong
                    className="experience-name text-neutral-700 font-semibold text-lg px-4 py-2 text-start"
                    key={index}
                  >
                    {experience.company}
                  </strong>
                  <div
                    className="experience-date text-sm font-ligh px-4 "
                    key={index}
                  >
                    {experience.date}
                  </div>
                </div>
                <span
                  className="experience-title text-sm font-light px-4 inline-flex"
                  key={index}
                >
                  {experience.title}
                </span>
              </div>
            );
          })}

          <div className="resume-link flex md:flex-row flex-col text-lg md:text-xl my-6 md:mt-24 md:mb-10 font-semibold px-4 md:items-center">
            <a
              href="mailto:yuualice@live.unc.edu"
              target="_blank"
              className="highlight-link"
            >
              View my resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
