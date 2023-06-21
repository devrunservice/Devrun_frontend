// import { useState } from 'react';

// const useInput = (initialValue: string, validator) => {
//     const [value, setValue] = useState(initialValue);
//     const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const {
//             target: {value}
//         } = event;
//         let willUpdate = true;
//         if (typeof validator === "function") {
//             willUpdate = validator(value);
//         }
//         if (willUpdate) {
//             setValue(value);
//         }

//         setValue(event.target.value);
//     }
//     console.log(value);

//     return {value, onChange};
// };

// export default useInput;
export {}