/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import useValid from "hooks/useValid";
import { SignupFormType } from "types";
import { ErrorMessage, Input, SuccessMessage, Title } from "style/Common";
import * as St from "./styles";

const DuplicationForm = ({
  title,
  inputName,
  btnName,
  placeholder,
  getDuplicationForm,
}: {
  title: string;
  inputName: string;
  btnName: string;
  placeholder: string;
  getDuplicationForm: (value: SignupFormType) => void;
}) => {
  const [duplicationForm, setDuplicationForm] = useState({
    [inputName]: "",
  });
  const { checkDuplicated } = useValid(duplicationForm);

  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState,
  );
  const messageState = useSelector(
    (state: RootState) => state.validationReducer.messageState,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDuplicationForm({ ...duplicationForm, [name]: value });
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    if (name === "idDuplicationBtn") {
      checkDuplicated("id", "아이디", duplicationForm[inputName] || "");
    } else if (name === "emailDuplicationBtn") {
      checkDuplicated("email", "이메일", duplicationForm[inputName] || "");
    }
  };

  useEffect(() => {
    getDuplicationForm({
      [inputName]: duplicationForm[inputName],
    });
  }, [duplicationForm]);

  return (
    <St.InputField>
      <Title>{title}</Title>
      <St.Field>
        <Input
          type="text"
          name={inputName}
          value={duplicationForm[inputName]}
          placeholder={placeholder}
          onChange={handleChange}
          required
        />
        <St.Button
          type="button"
          name={btnName}
          onClick={onClick}
          disabled={!validState[inputName]}
        >
          중복확인
        </St.Button>
      </St.Field>
      {duplicationForm[inputName] && validState[inputName] === false && (
        <ErrorMessage>{messageState[`${inputName}Message`]}</ErrorMessage>
      )}
      {duplicationForm[inputName] && validState[`${inputName}Duplication`] && (
        <SuccessMessage>
          {messageState[`${inputName}DuplicationMessage`]}
        </SuccessMessage>
      )}
      {duplicationForm[inputName] !== "" &&
        !validState[`${inputName}Duplication`] && (
          <ErrorMessage>
            {messageState[`${inputName}DuplicationMessage`]}
          </ErrorMessage>
        )}
    </St.InputField>
  );
};

export default DuplicationForm;
