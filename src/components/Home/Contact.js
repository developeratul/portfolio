import { useRef, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { UserOutlined, MailOutlined, CoffeeOutlined } from "@ant-design/icons";

const Contact = () => {
  const [message, setMessage] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef();
  const toast = useToast();

  function HandleInputChange(event) {
    const { name, value } = event.target;
    setMessage((pre) => ({ ...pre, [name]: value }));
  }

  async function HandleSubmit(e) {
    try {
      e.preventDefault();
      const contactForm = formRef.current;
      const formData = new FormData(contactForm);

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (res.ok) {
        toast({ title: "Your message was sent", status: "success" });
      }
    } catch (err) {
      toast({ title: err.message, status: "error" });
    }
  }

  return (
    <section className="contact_section" id="hire_or_contact">
      <div className="container">
        <div className="contact_section_content_wrapper">
          <div className="contact_form" data-aos="fade-right">
            <h2 className="form_title">Contact Me</h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={HandleSubmit}
              ref={formRef}
            >
              <div className="single_field">
                <InputGroup type="text">
                  <InputLeftElement
                    children={<UserOutlined color="gray.300" />}
                  />
                  <Input
                    name="username"
                    onChange={HandleInputChange}
                    value={message.username}
                    placeholder="Your name"
                  />
                </InputGroup>
              </div>

              <div className="single_field">
                <InputGroup>
                  <InputLeftElement
                    children={<MailOutlined color="gray.300" />}
                  />
                  <Input
                    type="email"
                    name="email"
                    onChange={HandleInputChange}
                    value={message.email}
                    placeholder="Your email"
                  />
                </InputGroup>
              </div>

              <div className="single_field">
                <InputGroup>
                  <InputLeftElement
                    children={<CoffeeOutlined color="gray.300" />}
                  />
                  <Input
                    type="text"
                    name="subject"
                    onChange={HandleInputChange}
                    value={message.subject}
                    placeholder="Your subject"
                  />
                </InputGroup>
              </div>

              <div className="single_field">
                <Textarea
                  name="message"
                  onChange={HandleInputChange}
                  row="10"
                  value={message.message}
                  placeholder="Your message"
                ></Textarea>
              </div>

              <div className="single_field">
                <Button type="submit" variant="solid" colorScheme="teal">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="contact_right_image" data-aos="fade-left">
            <img
              src="https://res.cloudinary.com/devr-static-assets-db/image/upload/v1628405715/DevR-portfolio/illustrations/contact_rfh6vc.svg"
              alt="Contact form illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
