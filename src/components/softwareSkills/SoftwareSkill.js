import React from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";
import {Icon} from '@iconify/react';
import pythonIcon from '@iconify/icons-logos/python';
import dockerIcon from '@iconify/icons-logos/docker-icon';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import awsIcon from '@iconify/icons-logos/aws';
import djangoIcon from '@iconify/icons-logos/django';
import tensorflowIcon from '@iconify/icons-logos/tensorflow';
// import scikitlearnIcon from '@iconify/icons-logos/scikitlearn';
// import pytorchIcon from '@iconify/icons-logos/pytorch-icon';
// import ReactJSIcon from '@iconify/icons-logos/reactjs';
import  ReactJSIcon from '@iconify/icons-logos/react';
import  pytorchIcon from '@iconify/icons-logos/pytorch';
import  sqlIcon from '@iconify/icons-logos/mysql';
import scikitlearnIcon from '@iconify/icons-devicon/scikitlearn';
import vueIcon from '@iconify/icons-logos/vue';
// import SqlIcon from '@iconify/sql';


export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            let icon;
            switch (skills.skillName.toLocaleLowerCase()) {
              case "django":
                icon =  <Icon icon={djangoIcon} />;
                break;
              case "nodejs":
                icon =  <Icon icon={nodejsIcon} />;
                break;
              case "aws":
                icon =  <Icon icon={awsIcon} />;
                break;
              case "tensorflow":
                icon =  <Icon icon={tensorflowIcon} />;
                break;
              case "pytorch":
                icon =  <Icon icon={pytorchIcon} />;
                break;
              case "scikit-learn":
                icon =  <Icon icon={scikitlearnIcon} />;
                break;
              case "docker":
                icon =  <Icon icon={dockerIcon} />;
                break;
              case "python":
                icon = <Icon icon={pythonIcon} />;
                break;
              case "mysql":
                icon = <Icon icon={sqlIcon} />;
                break;
              case "reactjs":
                icon = <Icon icon={ReactJSIcon} />;
                break;
              case "vuejs":
                icon = <Icon icon={vueIcon} />;
                break;
              default:
                icon = <i className={skills.fontAwesomeClassname}></i>;
                break;
            }
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                {icon}
                <p>{skills.skillName}</p>
              </li>
            );

          })}
        </ul>
      </div>
    </div>
  );
}
