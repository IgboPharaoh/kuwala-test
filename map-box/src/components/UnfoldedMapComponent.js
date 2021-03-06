import React, { useState, useEffect, useRef } from "react";
import { UnfoldedMap } from "@unfolded/map-sdk";
import Data from "./DataContainer";


function UnfoldedMapComponent() {
  const [,setIsMapLoaded] = useState(false);
  const [, setMap] = useState(null);  

  const mountContainerRef = useRef(null);

  useEffect(() => {
    const unfoldedMap = new UnfoldedMap({
      mapUUID: "80c800cc-5805-4416-94a5-bd8105cab7f7",
      appendToDocument: false,
      embed: true,
      width: window.innerWidth,
      height: window.innerHeight,
      onLoad: () => {
        console.log(
          "%cUnfoldedMap: %cMap has loaded...",
          "color: violet;",
          "color: yellow;"
        );
        setMap(
          unfoldedMap.addDataset({
            uuid: "95a1320c-bd91-4a4a-878b-b64459411785",
            label: "Malta",
            data: JSON.stringify(Data),
          })
        );
        // changed location to malta
        setMap(
          unfoldedMap.setViewState({
            latitude: 35.917973,
            longitude: 14.409943,
            zoom: 10,
          })
        );
        setIsMapLoaded(true);
      },
    });
    mountContainerRef.current.appendChild(unfoldedMap.iframe);
  }, [setMap, setIsMapLoaded]);

  return (
    <div className="unfolded">
      <div ref={mountContainerRef} />
    </div>
  );
}

export default UnfoldedMapComponent;
