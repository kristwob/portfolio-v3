import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-center">contact</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-[8em]">
        <div>
          <h3>Send me an email</h3>
          <Form />
        </div>
        <div>
          <h3>My socials</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
