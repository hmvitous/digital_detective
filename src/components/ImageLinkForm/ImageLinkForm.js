import React from "react";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {
          "This Digital Detective will find the faces in your pictures. Put him on the case"
        }
      </p>
      <div>
        <input className="f4 pa2 w-70 center" type="text" />
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
