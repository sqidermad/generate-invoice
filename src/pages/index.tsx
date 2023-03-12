import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  margin: 30px auto;
  
`

const Card = styled.form`
  background-color: #fff6e6;
  box-shadow: 5px 9px 0px 3px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 5px 9px 0px 3px rgba(0, 0, 0, 1);
  -moz-box-shadow: 5px 9px 0px 3px rgba(0, 0, 0, 1);

  transition: all 0.8s ease-in-out;
  border-radius: 16px;
  border: 1px solid black;
  padding: 50px;
  width: 90%;
  max-width: 550px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 9px 0px 3px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 5px 9px 0px 3px rgba(0, 0, 0, 1);
    -moz-box-shadow: 5px 9px 0px 3px rgba(0, 0, 0, 1);
  }
`;

const Input = styled.input<{ borderBottom: boolean }>`
  padding: 20px;
  width: 100%;
  background-color: transparent;
  color: #2c2c2c;
  font-size: 18px;
  transition: border-bottom 0.8s ease-in-out;
  font-weight: bold;
  border: 1px solid black;
  border-bottom: ${(props) => (props.borderBottom ? "" : "none")};

  ::placeholder {
    color: black;
    font-weight: normal;
    transition: opacity 0.8s ease-in-out;
  }

  &:focus {
    outline: none;

    ::placeholder {
      opacity: 0;
    }
  }
`;

const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-gap: 30px;
  width: 100%;
  border: 1px solid black;
  border-bottom: none;
  padding: 10px;
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
  border-radius: 2px;

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 3px;
    top: 3px;
    width: 3px;
    height: 10px;
    border: solid #2c2c2c;
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg);
    background-color: #00ff00;
    z-index: 2;
  }

  ${InputCheckbox}:checked + &::after {
    display: block;
  }
`;

const FancyButton = styled.button`
  background-color: #ee6007;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: 2px 2px 0px 3px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 2px 2px 0px 3px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 2px 0px 3px rgba(0, 0, 0, 1);
  transition: all 0.8s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    font-size: 16px;
    box-shadow: 2px 2px 0px 3px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 2px 2px 0px 3px rgba(0, 0, 0, 1);
    -moz-box-shadow: 2px 2px 0px 3px rgba(0, 0, 0, 1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
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
        <Input type="text" placeholder="Name" borderBottom={false} />

        <CheckboxWrapper>
          <label htmlFor="30pcs">
            <CheckboxContainer>
              <InputCheckbox type="checkbox" id="30pcs" name="30pcs" />
              <Checkmark />
              <p style={{ marginLeft: "10px" }}>30pcs</p>
            </CheckboxContainer>
          </label>
          <label htmlFor="20pcs">
            <CheckboxContainer>
              <InputCheckbox type="checkbox" id="20pcs" name="20pcs" />
              <Checkmark />
              <p style={{ marginLeft: "10px" }}>20pcs</p>
            </CheckboxContainer>
          </label>
        </CheckboxWrapper>

        <CheckboxWrapper>
          {pempek.map((item, index) => (
            <label key={index}>
              <CheckboxContainer>
                <InputCheckbox
                  type="checkbox"
                  id={`item${index + 1}`}
                  name={`item${index + 1}`}
                />
                <Checkmark />
                <p style={{ marginLeft: "10px" }} key={index}>
                  {item}
                </p>
              </CheckboxContainer>
            </label>
          ))}
        </CheckboxWrapper>

        <Input type="text" placeholder="Full Address" borderBottom={false} />

        <Input
          type="tel"
          placeholder="Contactable Phone Number"
          borderBottom={true}
        />
        <label htmlFor="receipt">
          <CheckboxContainer>
            <InputCheckbox type="checkbox" id="receipt" name="receipt" />
            <Checkmark />
            <p style={{ marginLeft: "10px" }}>
              I agree to the terms and conditions
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
