import { experienceData } from "../routes/experience";

export function Experience(): JSX.Element {
  return (
    <section className="section" id="experience">
      <div className="content">
        <h1 className="title">Experience.</h1>

        <div className="experience-container">
          {experienceData.map((experience, index) => {
            return (
              <div key={index} className="my-5 md:mb-5 md:mt-0">
                <div
                  key={index}
                  className="flex md:flex-row flex-col md:items-center md:justify-between"
                >
                  <strong className="experience-name" key={index}>
                    {experience.company}
                  </strong>
                  <div className="experience-date" key={index}>
                    {experience.date}
                  </div>
                </div>
                <span className="experience-title" key={index}>
                  {experience.title}
                </span>
              </div>
            );
          })}

          <div className="experience-link">
            <a
              href="/Alice_Yu_Resume.pdf"
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
