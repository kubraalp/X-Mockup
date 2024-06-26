import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Container = styled.div`
  color: #e7e9ea;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`;
const FormWrapper = styled.form`
  margin-top: 20px;
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  color: white;
  width: 95%;
  background-color: black;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;
const Heading = styled.h5`
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Paragraph1 = styled.p`
  color: gray;
`;

const Select = styled.select`
  width: 31%;
  padding: 10px;
  margin-right: 2%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
  background-color: black;
  color: gray;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #6a6969;
  color: black;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 50px;
`;
const initialForm = {
  isim: "",
  person: "",
  day: "",
  month: "",
  year: "",
};

export default function SignUp({ setUser }) {
  const [formData, setFormData] = useState(initialForm);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/twitter", formData)
      .then((response) => {
        console.log(response);
        setUser(formData);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const currentYear = new Date().getFullYear();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i
  );

  return (
    <Container>
      <img src={logo} alt="Logo" width={50} />
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Create your account</Title>

        <Input
          type="text"
          placeholder="Name"
          value={formData.isim}
          name="isim"
          onChange={handleChange}
        ></Input>

        <Input
          type="text"
          placeholder="User name"
          value={formData.user}
          name="user"
          onChange={handleChange}
        />

        <Heading>Date of birth</Heading>
        <Paragraph1>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </Paragraph1>

        <Select
          id="day"
          name="day"
          value={formData.day}
          onChange={handleChange}
        >
          <option value="">Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </Select>

        <Select
          id="month"
          name="month"
          value={formData.month}
          onChange={handleChange}
        >
          <option value="">Month</option>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </Select>

        <Select
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
        <Button type="submit">Register</Button>
      </FormWrapper>
    </Container>
  );
}
