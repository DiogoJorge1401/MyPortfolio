import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import axios from "axios";
import "./index.scss";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState<any>({});
  const [isSubmiting, setIsSubmiting] = useState(false)

  const handleFieldUpdate = (e: any) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmiting(true)
    setButtonText("Eviando...");
    try {
      await axios.post(
        "https://lazy-cyan-hen-hose.cyclic.app/contact",
        formDetails
      );

      setStatus({ success: true, message: "Mensagem enviada com sucesso." });
    } catch (error) {
      setStatus({
        success: false,
        message: "Algo deu errado, tenta novamente mais tarde.",
      });
    }

    setButtonText("Enviar");
    setIsSubmiting(false);
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>

          <Col md={6}>
            <h2>Entrar Em Contato</h2>

            <form onSubmit={handleOnSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Primeiro Nome"
                    name="firstName"
                    value={formDetails.firstName}
                    onChange={handleFieldUpdate}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Sobrenome"
                    name="lastName"
                    value={formDetails.lastName}
                    onChange={handleFieldUpdate}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formDetails.email}
                    onChange={handleFieldUpdate}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Num. de telefone"
                    name="phone"
                    value={formDetails.phone}
                    onChange={handleFieldUpdate}
                  />
                </Col>

                <Col>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Mensagem"
                    rows={6}
                    value={formDetails.message}
                    onChange={handleFieldUpdate}
                  ></textarea>

                  <button type="submit" disabled={isSubmiting}>
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {status.message && (
                  <Col>
                    <p className={!status.success ? "danger" : "success"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};