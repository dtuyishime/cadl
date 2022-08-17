import { FunctionComponent, useEffect, useRef } from "react";
import CreateSwaggerUI from "swagger-ui";
export interface SwaggerUIProps {
  spec: string;
}
export const SwaggerUI: FunctionComponent<SwaggerUIProps> = (props) => {
  const uiRef = useRef(null);
  const uiInstance = useRef<any>(null);
  useEffect(() => {
    if (uiInstance.current === null) {
      uiInstance.current = CreateSwaggerUI({
        domNode: uiRef.current,
        spec: JSON.parse(props.spec),
      });
    } else {
      uiInstance.current.specActions.updateSpec(props.spec);
    }
  }, [props.spec]);

<<<<<<< HEAD
  return <div ref={uiRef}></div>;
=======
  return <div className="swagger-ui-container" ref={uiRef}></div>;
>>>>>>> 347ad287d1ed04caeeee5e0171bf1e0a64745244
};
