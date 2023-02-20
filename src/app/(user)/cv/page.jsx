// Sanity
import { cvQuery } from "../../../lib/sanity.queries";
import { client } from "../../../lib/sanity.client";

const PageCv = async () => {
  const cv = await client.fetch(cvQuery);
  console.log(cv);
  // TODO add more information to the CV in the sanity studio

  return (
    <>
      <h1>Curriculum Vitae</h1>
      <section className="grid md:grid-cols-2">
        <div className="mt-5">
          <h2 className="mb-2">Personalia</h2>
          <p className="mb-2 sm:gap flex flex-col sm:flex-row sm:gap-2">
            Name: <span>{cv.personalia.name}</span>
          </p>
          <p className="mb-2 flex flex-col sm:flex-row sm:gap-2">
            DOB: <span>{cv.personalia.DOB}</span>
          </p>
          <p className="mb-2 flex flex-col sm:flex-row sm:gap-2">
            Nationality: <span>{cv.personalia.nationality}</span>
          </p>
          <p className="mb-2 flex flex-col sm:flex-row sm:gap-2">
            Email: <span>{cv.personalia.email}</span>
          </p>
        </div>
        <div className="mt-5">
          <h2 className="mb-2">Experiences</h2>
          {cv.experiences.map((item, index) => (
            <p key={index} className="mb-2 flex flex-col sm:flex-row sm:gap-2">
              <span>
                {item.from.split("-")[0]} - {item.to.split("-")[0]}:{" "}
              </span>
              <span>{item.title}</span>
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default PageCv;
