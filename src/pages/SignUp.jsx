import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Container = styled.div`
  color: #e7e9ea;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FormWrapper = styled.form`
  margin-top: 20px;
  background-color: #000000;
  padding: 30px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 31px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #e7e9ea;
  text-align: center;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const InputLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.hasValue ? "-10px" : "10px")};
  left: 10px;
  font-size: ${(props) => (props.hasValue ? "12px" : "16px")};
  color: ${(props) => (props.hasValue ? "#1d9bf0" : "#71767b")};
  pointer-events: none;
  transition: 0.2s ease all;
  background-color: ${(props) => (props.hasValue ? "#000000" : "transparent")};
  padding: ${(props) => (props.hasValue ? "0 4px" : "0")};
`;

const Input = styled.input`
  color: white;
  width: 100%;
  background-color: transparent;
  padding: 15px 10px;
  border: 1px solid
    ${(props) => (props.error ? "#f4212e" : props.focused ? "#1d9bf0" : "#333")};
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &:focus + ${InputLabel} {
    top: -10px;
    font-size: 12px;
    color: #1d9bf0;
    background-color: #000000;
    padding: 0 4px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${(props) => (props.disabled ? "#333" : "#1d9bf0")};
  color: ${(props) => (props.disabled ? "#71767b" : "#ffffff")};
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#333" : "#1a8cd8")};
  }
`;

const ErrorMessage = styled.span`
  color: #f4212e;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

const SignUpLink = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #71767b;

  a {
    color: #1d9bf0;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const initialForm = {
  username: "",
  password: "",
};

export default function SignUp({ setUser }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});
  const history = useHistory();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleFocus = (field) => {
    setFocused({
      ...focused,
      [field]: true,
    });
  };

  const handleBlur = (field) => {
    setFocused({
      ...focused,
      [field]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Create user object for login
      const user = {
        isim: formData.username, // Using username as name for backward compatibility
        user: formData.username,
      };

      // Set user and redirect to home
      setUser(user);
      history.push("/home");
    }
  };

  const isFormComplete = formData.username.trim() && formData.password.trim();

  return (
    <Container>
      <img src={logo} alt="Logo" width={50} />
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Sign in to X</Title>

        <InputGroup>
          <Input
            type="text"
            value={formData.username}
            name="username"
            onChange={handleChange}
            onFocus={() => handleFocus("username")}
            onBlur={() => handleBlur("username")}
            focused={focused.username}
            error={!!errors.username}
            id="username"
          />
          <InputLabel
            htmlFor="username"
            hasValue={formData.username.length > 0}
          >
            Username
          </InputLabel>
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Input
            type="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            onFocus={() => handleFocus("password")}
            onBlur={() => handleBlur("password")}
            focused={focused.password}
            error={!!errors.password}
            id="password"
          />
          <InputLabel
            htmlFor="password"
            hasValue={formData.password.length > 0}
          >
            Password
          </InputLabel>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputGroup>

        <Button type="submit" disabled={!isFormComplete}>
          Sign in
        </Button>

        <SignUpLink>
          Don't have an account? <a href="#">Sign up</a>
        </SignUpLink>
      </FormWrapper>
    </Container>
  );
}
