// import React from "react";
// import { FormType } from "types";
// import { Input } from "style/Common";
// import * as St from "./styles";

// const PhoneNumber = (form: FormType) => (
//     <>
//       <St.Field>
//         <Input
//           type="text"
//           name="phonenumber"
//           value={form.phonenumber}
//           placeholder="휴대폰 번호 '-' 제외하고 입력"
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//             setForm({ ...form, phonenumber: e.target.value });
//             setIsValid((prev) => ({ ...prev, phonenumber: true }));
//           }}
//         />
//         <St.Button
//           type="button"
//           onClick={handleGetAuthenticationNumber}
//           disabled={!isValid.phonenumber}
//         >
//           인증번호
//         </St.Button>
//       </St.Field>
//       {isValid.codeBtn && isValid.phonenumber ? (
//         // 인증번호가 요청되었습니다
//         <SuccessMessage>{validMessage.phonenumberMessage}</SuccessMessage>
//       ) : (
//         // 인증번호가 실패했습니다, 인증번호를 다시 받아주세요
//         <ErrorMessage>{validMessage.phonenumberMessage}</ErrorMessage>
//       )}
//       <St.Field>
//         <Input
//           type="text"
//           name="code"
//           value={form.code}
//           placeholder="인증번호 입력"
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//             setForm({ ...form, code: e.target.value });
//             setIsValid((prev) => ({ ...prev, code: true }));
//           }}
//         />
//         <St.Button
//           type="button"
//           onClick={handleCheckAuthenticationNumber}
//           disabled={!isValid.code}
//         >
//           확인
//         </St.Button>
//       </St.Field>
//       {isValid.code ? (
//         <SuccessMessage>{validMessage.codeMessage}</SuccessMessage>
//       ) : (
//         <ErrorMessage>{validMessage.codeMessage}</ErrorMessage>
//       )}
//     </>
//   );

// export default PhoneNumber;

export {};
