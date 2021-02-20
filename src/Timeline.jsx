import React from 'react';
import anomali from "../public/anomali.png";
import './scss/main.scss';


function Timeline() {
  return <div class="timeline">
        <h2>Career History</h2>
        <div class="items">
          <div class="qub-1">
            <h4>QUB</h4>
            <h5>Student</h5>
            Computer Architecture, AI, Concurrent Programming, DSA, Formal Methods
          </div>
          <div class="citi">
            <h4>CitiGroup</h4>
            <h5>Programmer – PMC Team</h5>
            JDBC, SQL Server, Shell Scripting.
          </div>
          <div class="qub-2">
            <h4>QUB</h4>
            <h5>Dissertation</h5>
            JavaFX, MySQL, Shell Scripting.
            GPA: 65% - 2.1
          </div>
          <div class="anomali">
            <h4>Anomali Inc.</h4>
            <h5>Software Engineer II - Integrator</h5>
            Python, AngularJS, React & SQLite3, DevOps tech like Docker & Jenkins.
            Integrated TS Platform with SIEMs.
          </div>
          <div class="ibm">
            <h4>IBM Cloud</h4>
            <h5>SRE</h5>
            Full Stack,
            DevOps
          </div>
        </div>
        <div class="items">
          <div class="y2013"><h5>2013</h5></div>
          <div class="y2015"><h5>2015</h5></div>
          <div class="y2016"><h5>2016</h5></div>
          <div class="y2017"><h5>2017</h5></div>
          <div class="y2020"><h5>2020</h5></div>
        </div>
      </div>
}


function AboutInfoAndProjects() {
  return <div class="text-card-row">
    {TextCard(
      "About Me",
      null,
      "I began my career in Software 6 years ago as a Placement Student at CitiBank, where I worked on Java Applications. This is where I learned basic, key skills such as Linux Scripting and developed a passion for neat solutions to complex problems. This new passion drove me to be a “Self-Starter” achieving highly in my University Project the following year. At Anomali, I embraced the opportunity to learn new technologies such as Python, JavaScript, AngularJS and React. I was supported as I gained proficiency in DevOps utilities like Docker, Jenkins, VSphere, AWS, Vagrant. Over time I have become the source of support for others in these technologies."
    )}
    {TextCard(
      "Migrating AngularJS to React",
      anomali,
      "Migrated from AngularJS to new, Bleeding-Edge React Front-End. Achieved with a team of three Engineers, of which I was the most Senior. Implemented a brand new, fully RESTful API with no impact on the workflow of other team-mates. Designed the UI so that it could be fully driven by a templating system accessible via the API facilitating instantaneous addition/removal of features. Owned the features I added, such as new Login/Session System & Source Configuration Page. Hopped between languages, wearing multiple hats and learning fast in a highly pressured environment. Always available to colleagues seeking information, guidance or support on my areas of code. Added build steps to package the new UI on both Windows and Linux Systems."
    )}
    {TextCard(
      "SDK Project",
      anomali,
      "Owned project from inception, to realization to maintenance. Strategically important, later presented by the CEO at a Security Conference. Involved passing Intelligence through Standard Output, so an external process on the same machine could receive & process it to bespoke requirements. Implemented in a clean, flexible way - which allowed my teammate to easily expand on existing features in the second version."
    )}
  </div>
}


function MoreProjects() {
  return <div class="text-card-row">
    {TextCard(
      "Developer Operations",
      anomali,
      "As one of my first tickets at Anomali, I adapted the Integrator Windows Build process to package a new User Interface and work on a new OS version. This used a new Batch Script that called Chocolatey commands and Vagrant with VirtualBox. Moved the Jenkins Build Pipeline to within the Project’s Git Repository to allow versioning of the Docker Containers with which we performed our builds. Added steps to Jenkins Pipeline to automatically create Directories in JFrog Artifactory named after Version, then Build Numbers respectfully and for each Build Number, had further directories underneath for Windows & *nix versions of the Integrator Build. Added new steps to the build process to package & release the SDK Reference Implementation separately from the Integrator binary, I did this using 7zip."
    )}
    {TextCard(
      "Intelligence Snapshot Destination",
      anomali,
      "Executed a new Intelligence format based off internal organization requirements & added new API endpoint structures to retrieve the intelligence from. Showed foresight by ensuring we could support multiple snapshots. Something which wasn’t an original requirement, but was proved to be needed months later. Conceived an approach that facilitated the instantaneous and modular retrieval of information such as checksums and corresponding endpoint locations to allow Users of the Snapshot to properly access each safely. It became the most popular Destination, configured by the most Users."
    )}
  </div>
}


function TextCard(heading, icon, paragraph) {
  if(icon) {
    return <div class="text-card">
      <span class="icon-wrap">
        <img class="icon-wrap-icon" src={icon} alt="text-card-icon"/>
      </span>
      <h2>{heading}</h2>
      <p>
        {paragraph}
      </p>
    </div>
  } else {
    return <div class="text-card">
      <h2>{heading}</h2>
      <p>
        {paragraph}
      </p>
    </div>
  }
}


export {AboutInfoAndProjects, MoreProjects, Timeline};
