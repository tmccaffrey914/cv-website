import React from 'react';
import './scss/main.scss';


function MobileTimeline() {
  return <div class="mobile-timeline">
        <h2>Career History</h2>
        <div class="items">
          <div class="item">
            <div class="y2013"><h5>2013</h5></div>
            <div class="qub-1">
              <h4>QUB</h4>
              <h5>Student</h5>
              Computer Architecture, AI, Concurrent Programming, DSA, Formal Methods
            </div>
          </div>

          <div class="item">
            <div class="y2015"><h5>2015</h5></div>
            <div class="citi">
              <h4>CitiGroup</h4>
              <h5>Programmer – PMC Team</h5>
              JDBC, SQL Server, Shell Scripting.
            </div>
          </div>

          <div class="item">
            <div class="y2016"><h5>2016</h5></div>
            <div class="qub-2">
              <h4>QUB</h4>
              <h5>Dissertation</h5>
              JavaFX, MySQL, Shell Scripting.
            </div>
          </div>

          <div class="item">
            <div class="y2017"><h5>2017</h5></div>
            <div class="anomali">
              <h4>Anomali Inc.</h4>
              <h5>Software Engineer II - Integrator</h5>
              Python, AngularJS, React & SQLite3, Docker & Jenkins.
            </div>
          </div>

          <div class="item">
            <div class="y2020"><h5>2020</h5></div>
            <div class="ibm">
              <h4>IBM Cloud</h4>
              <h5>Site Reliability Engineer</h5>
            </div>
          </div>

          <div class="item">
            <div class="y2021"><h5>2021</h5></div>
            <div className="qualtrics">
              <h4>Qualtrics</h4>
              <h5>Senior Software Engineer - Engineering Services</h5>
              Kotlin, Python, NodeJS, AWS, Angular, MongoDB, DynamoDB.
            </div>
          </div>
        </div>
      </div>
}


function AboutInfoAndProjects() {
  return <div class="text-card-column">
    {TextCard(
      "About Me",
      null,
      "I began my career in Software 8 years ago as a Placement Student at CitiBank, where I worked on Java Applications. This is where I learned basic, key skills such as Shell Scripting and developed a passion for neat solutions to complex problems. This new passion drove me to be a “Self-Starter” achieving highly in my University Project the following year. At Anomali, I embraced the opportunity to learn new programming languages/frameworks such as Python, AngularJS and React. I was supported as I gained proficiency in DevOps utilities like Docker, Jenkins, VMWare, Vagrant. Over time I have become the source of support for others in these technologies. After a brief sojourn as a SRE in IBM, I have been working in the Engineering Services department at Qualtrics developing custom solutions for clients."
    )}
    {BulletTextCard(
      "Qualtrics",
      null,
      [
        "Managed the team & service responsible for providing HTML/PDF Reports of Single Survey Responses, use of JIRA sprint planning, retro meetings",
        "Delivered an integration to support a survey widget on Barclays Intrasite used by 300k+ users per day",
        "I was the main contact for Google Analytics integrations with Qualtrics Surveys",
        "Implemented an automation to notify Bosch Hiring Managers when a subordinate has completed their probationary period",
        "Ensuring maintenance of SLAs as a part of a monthly on-call rotation",
        "Designed and Delivered the 'Qualtrics Data Residency Solution' which was an AWS hosted collection of microservices tasked with preventing PII from leaving a given region",
        "Worked closely with 3rd Parties to gather requirements and ensure projects stay on track"
      ]
    )}
  </div>
}


function MoreProjects() {
  return <div class="text-card-column">
    {BulletTextCard(
      "IBM",
      null,
      [
        "Contributed to a Custom Chaos Testing Framework for use internally by IBM Teams",
        "Gained experience with Kubernetes, Terraform & Helm templating"]
    )}
    {BulletTextCard(
      "Anomali",
      null,
      [
        "Migrated the old AngularJS frontend of the Integrator Platform to React",
        "Developed an API on the Integrator application & an example SDK implementation to allow 3rd Party SIEMs to Integrate with the Anomali SaaS platform called ThreatStream",
        "Created a build process to package & distribute a Windows version of the Integrator application, using Chocolatey package manager and Vagrant Images with VirtualBox VMs",
      ]
    )}
    {BulletTextCard(
      "CitiBank",
      null,
      [
        "Worked on a team responsible for taking Financial Instrument information from Bloomberg Terminals and distributing that throughout Citi, the team was called Price Master Central",
        "Primarily worked with a Java backend interacting with SQL Server, oversaw a migration from JRE7 to JRE8",
        "Learned Shell Scripting and basics of Software Engineering, Scrum methodology, JIRA etc"
      ]
    )}
    {BulletTextCard(
      "Queen's University",
      null,
      [
        "My Dissertation project was a JavaFX Application to display & track the changes in prices of financial instruments over time, with an experimental aspect of comparing FlatFile vs Relational DB efficiency.",
        "Learned about various approaches to maintain thread safety in concurrent Java applications",
        "Created experimental AI Language processing applications using Prolog",
        "Used Haskell to prove predicate logic in Formal Methods",
      ]
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

function BulletTextCard(heading, icon, paragraphs) {
  if(icon) {
    return <div class="text-card">
      <span class="icon-wrap">
        <img class="icon-wrap-icon" src={icon} alt="text-card-icon"/>
      </span>
      <h2>{heading}</h2>
      <ul>
        {paragraphs.map((paragraph) => {return <li>{paragraph}</li>})}
      </ul>
    </div>
  } else {
    return <div class="text-card">
      <h2>{heading}</h2>
      <ul>
        {paragraphs.map((paragraph) => {return <li>{paragraph}</li>})}
      </ul>
    </div>
  }
}



export {AboutInfoAndProjects, MoreProjects, MobileTimeline};