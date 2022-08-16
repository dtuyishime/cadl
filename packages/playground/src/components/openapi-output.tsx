import { FunctionComponent, useCallback, useState } from "react";
<<<<<<< HEAD
import { OutputEditor } from "./cadl-editor";
import { PlaygroundManifest } from "../manifest";
=======
import { PlaygroundManifest } from "../manifest";
import { OutputEditor } from "./cadl-editor";
>>>>>>> 0bacd878912cb875ea1241e0cc65db828577c7d6
import { SwaggerUI } from "./swagger-ui";
export interface OpenAPIOutputProps {
  content: string;
}

<<<<<<< HEAD
export const OpenAPIOutput: FunctionComponent<OpenAPIOutputProps> = (props)=> {
  const[selected, setSelected] = useState<"raw"|"swagger-ui">("raw");
  const handleSelected = useCallback(
    () => { return setSelected(selected === "raw"?("swagger-ui"):("raw"));
    },
    [selected],
  );
  return(
    <>
    {PlaygroundManifest.enableSwaggerUI? (
    <select className="output-dropdown" onChange={handleSelected}>
      <option>OpenApi</option>
      <option >Swagger-UI</option>
    </select>
    ):(<></>)}
    
    {selected === "raw"? (<OutputEditor value={props.content}/>):(<SwaggerUI spec={props.content} />)}
    </>);
}

=======
export const OpenAPIOutput: FunctionComponent<OpenAPIOutputProps> = (props) => {
  const [selected, setSelected] = useState<"raw" | "swagger-ui">("raw");
  const options = [
    { label: "Open API", value: "raw" },
    { label: "Swagger-UI", value: "swagger-ui" },
  ];

  const handleSelected = useCallback(
    (event: any) => {
      setSelected(event.target.value);
    },
    [selected]
  );

  return (
    <>
      {PlaygroundManifest.enableSwaggerUI ? (
        <select className="output-dropdown" onChange={handleSelected} value={selected}>
          {options.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      ) : (
        <></>
      )}

      {selected === "raw" ? (
        <OutputEditor value={props.content} />
      ) : (
        <SwaggerUI spec={props.content} />
      )}
    </>
  );
};
>>>>>>> 0bacd878912cb875ea1241e0cc65db828577c7d6
