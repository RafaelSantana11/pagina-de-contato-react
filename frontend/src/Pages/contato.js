import { useState, useEffect } from "react";
import styled from "styled-components";
import { TextField, Container } from "@material-ui/core/";

const Contatos = () => {
  const url = "http://localhost:5000/message";
  const [message, setMessage] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [validator, setValidator] = useState(false);
  const [render, setRender] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleted, setDeleted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMessage([...data]);
  }, [render]);

  const sendMessage = () => {
    setValidator(false);
    if (author.length <= 0 || content.length <= 0) {
      return setValidator(!validator);
    }
    const bodyForm = {
      email: author,
      message: content,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyForm),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setRender(true);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      });

    setAuthor("");
    setContent("");
  };

  const deleteMessage = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setRender(true);
      setDeleted(true);
      setTimeout(() => {
        setDeleted(false);
      }, 5000);
    });
  };

  return (
    <Wrapper>
      <Container maxWidth="xl">
        <div className="row">
          <div className="col">
            <TitleBox>
              <Title>Como podemos ajudar?</Title>
              <Subtitle>
                <Paragraph>
                  Tem alguma dúvida ou está interessado em trabalhar no nosso
                  time? Envie-nos uma mensagem!
                </Paragraph>
              </Subtitle>
            </TitleBox>
          </div>
          <div className="col">
            <Card className="card pt-2 pb-3 px-3">
              <TextField
                color="info"
                id="name"
                label="E-mail"
                value={author}
                onChange={(event) => {
                  setAuthor(event.target.value);
                }}
                fullWidth
              />
              <TextField
                id="message"
                label="Mensagem"
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                }}
                fullWidth
              />

              {validator && (
                <div
                  className="alert alert-warning alert-dismissible fade show mt-2"
                  role="alert"
                >
                  <strong>Por favor preencha todos os campos!</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}

              {success && (
                <div
                  className="alert alert-success alert-dismissible fade show mt-2"
                  role="alert"
                >
                  <strong>Mensagem foi enviada</strong>
                </div>
              )}

              {deleted && (
                <div
                  className="alert alert-success alert-dismissible fade show mt-2"
                  role="alert"
                >
                  <strong>Mensagem deletada com sucesso</strong>
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  sendMessage();
                }}
                className="btn btn-primary mt-2"
              >
                Enviar
              </button>
            </Card>
          </div>
        </div>

        <Divider></Divider>

        <Subtitle>
          <h3>Últimas mensagens enviadas</h3>
        </Subtitle>

        {message.map((content) => {
          return (
            <Card className="card mt-2" key={content.id}>
              <div className="card-body">
                <h5 className="card-title">{content.email}</h5>
                <p className="card-text">{content.message}</p>
                <p className="card-text">
                  <small className="text-muted">{content.created_at}</small>
                </p>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteMessage(content.id);
                  }}
                >
                  Excluir
                </button>
              </div>
            </Card>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Contatos;

const Wrapper = styled.div`
  background-color: rgb(30, 25, 44);
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const TitleBox = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const Subtitle = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 10%;
  padding-right: 10%;
`;
const Title = styled.h1`
  color: #ffffff;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #ffffff;
  text-align: center;
`;

const Card = styled.div`
  color: rgb(21, 21, 21);
  background-color: #d4d9fd;
`;

const Divider = styled.hr`
  color: #ffffff;
  margin: 5% 20% 20px 20%;
`;
