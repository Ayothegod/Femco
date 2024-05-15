import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

// Temporary key of my query parameter
const MY_QUERY_PARAMETER: string = "myQueryParameter";

export const Query = (props: any) => {
  // Hook which returns a tuple. First element is the current URLSearchParams object and second element is the function to take in the new URLSearchParams object alongside a configuration object to either replace the query parameters or not alongside state.
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const newQueryParameters: URLSearchParams = new URLSearchParams();

  console.log(currentQueryParameters.get(MY_QUERY_PARAMETER));

  const onInputValueChangeEventHandler: (
    event: ChangeEvent<HTMLInputElement>
  ) => void = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    if (value) newQueryParameters.set(MY_QUERY_PARAMETER, value);

    setSearchParams(newQueryParameters);
  };

  return (
    <div className="max-w-[800px] mx-auto px-8">

    <input
      className="mt-2 border"
      type="text"
      onChange={onInputValueChangeEventHandler}
      />
      </div>
  );
};
