import styled, { useTheme } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  margin: 30px auto;
`;

const Card = styled.form`
  background-color: ${(props) => props.theme.primary};
  transition: all 0.8s ease-in-out;
  border: 1px solid black;
  padding: 50px;
  width: 90%;
  max-width: 550px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Input = styled.input`
  padding: 20px 0 20px 0px;
  width: 100%;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid black;

  ::placeholder {
    font-weight: normal;
    transition: opacity 0.8s ease-in-out;
  }

  &:focus {
    outline: none;
    transition: box-shadow 0.8s ease-in-out;

    ::placeholder {
      opacity: 0;
    }
  }
`;

const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  height: auto;
  border-bottom: none;
  padding: 20px 0 20px 0px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const InputCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  z-index: 1;
`;

const Checkmark = styled.span`
  position: relative;
  display: block;
  height: 18px;
  width: 18px;
  border: 1px solid black;

  &::after {
    content: "x";
    position: absolute;
    display: none;
    left: 3px;
    top: 3px;
    width: 3px;
    height: 10px;
    transform: rotate(-45deg);
    z-index: 2;
  }

  ${InputCheckbox}:checked + &::after {
    display: block;
  }
`;

const FancyButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid black;

  padding: 10px 20px;
  font-size: 16px;
  transition: all 0.8s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    font-size: 16px;
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const ButtonWrapper = styled.div`
  padding: 20px 0 20px 10px;
  text-align: center;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  gap: 40%;
`;

export default function Home() {
  const pempek = [
    "Adaan",
    "Lenjer",
    "Balok Potong",
    "Keriting",
    "Telor",
    "Tahu",
    "Kulit",
    "Otak-otak",
    "Sate",
  ];
  return (
    <Container>
      <Card>
        <Title> PO Pempek (Batch 1)</Title>
        <Input type="text" placeholder="Name" />
        <OptionWrapper>
          <p id="30pcs">30pcs</p>
          <p id="20pcs">20pcs</p>
        </OptionWrapper>
        <CheckboxWrapper>
          {pempek.map((item, index) => (
            <label key={index}>
              <CheckboxContainer>
                <InputCheckbox
                  type="checkbox"
                  id={`item${index + 1}`}
                  name={`item${index + 1}`}
                />
                <Checkmark style={{ marginLeft: "10px" }} />
                <p style={{ marginLeft: "10px" }} key={index}>
                  {item}
                </p>
              </CheckboxContainer>
            </label>
          ))}
        </CheckboxWrapper>

        <Input type="text" placeholder="Full Address" />

        <Input type="tel" placeholder="Contactable Phone Number" />
        <label htmlFor="receipt">
          <CheckboxContainer>
            <InputCheckbox type="checkbox" id="receipt" name="receipt" />
            <Checkmark style={{ marginLeft: "10px" }} />
            <p style={{ marginLeft: "10px" }}>
              {"I've receive the payment receipt"}
            </p>
          </CheckboxContainer>
        </label>

        <ButtonWrapper>
          <FancyButton type="submit">Submit</FancyButton>
        </ButtonWrapper>
      </Card>
    </Container>
  );
}
