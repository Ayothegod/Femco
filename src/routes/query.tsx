// import { ChangeEvent, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// export const Query = (props: any) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const newQueryParameters: URLSearchParams = new URLSearchParams();
//   const queryTerm = "search";

//   const [input, setInput] = useState("");

//   console.log(searchParams.get(queryTerm));

//   const onInputValueChangeEventHandler = (e: any) => {
//     setInput(e.target.value);

//     if (input) newQueryParameters.set(queryTerm, input);
//     setSearchParams(newQueryParameters);
//   };

//   // const onInputValueChangeEventHandler: (
//   //   event: ChangeEvent<HTMLInputElement>
//   // ) => void = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
//   //   if (value) newQueryParameters.set(MY_QUERY_PARAMETER, value);

//   //   setSearchParams(newQueryParameters);
//   // };

//   return (
//     <div className="max-w-[800px] mx-auto px-8">
//       <input
//         className="mt-2 border"
//         type="text"
//         onChange={onInputValueChangeEventHandler}
//       />
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import {
  useSearchParams
} from "react-router-dom";

export const Query = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [paramValue, setParamValue] = useState("");

  useEffect(() => {
    setParamValue(searchParams.get("myParam") || "");
  }, [searchParams]);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setParamValue(value);
    setSearchParams({ myParam: value });
  };

  return (
    <div>
      <input
        type="text"
        value={paramValue}
        onChange={handleChange}
        placeholder="Set URL parameter"
      />
      <p>Value of myParam: {paramValue}</p>
    </div>
  );
};
