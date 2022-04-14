import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <p>
        Copyright
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> {date}{" "}
      </p>
    </div>
  );
};

export default Footer;
