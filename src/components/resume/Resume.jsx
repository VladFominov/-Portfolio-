import React from 'react'

import resume from "../../assets/images/Vlad_Fominov_junior_frontend.pdf";

function Resume() {
  return (
    <div>
      this is my Resume
      <a class="btn btn-primary" href={resume} role="button" download="Resume">
        RESUME
      </a>
    </div>
  );
}

export default Resume;