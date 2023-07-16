import React from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";
import {Icon, InlineIcon} from '@iconify/react';
import truffleIcon from '@iconify/icons-file-icons/truffle';
import svelteIcon from '@iconify/icons-logos/svelte-icon';
import pythonIcon from '@iconify/icons-logos/python';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import awsIcon from '@iconify/icons-logos/aws';
import djangoIcon from '@iconify/icons-logos/django';
import ethereumIcon from '@iconify/icons-logos/ethereum';
import reactIcon from '@iconify/icons-logos/react';
import vueIcon from '@iconify/icons-logos/vue';
import tensorflowLight from '@iconify/icons-logos/tensorflow';
import ibmWatsonNaturalLanguageUnderstanding from '@iconify/icons-carbon/ibm-watson-natural-language-understanding';
import machineLearningOutlined from '@iconify/icons-eos-icons/machine-learning-outlined';
import scikitlearnIcon from '@iconify/icons-devicon/scikitlearn';
import fileTypeCpp3 from '@iconify/icons-vscode-icons/file-type-cpp3';
import flaskIcon from '@iconify/icons-devicon/flask';
// import tensorflowWordmark from '@iconify/icons-devicon/tensorflow-wordmark';

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            let icon;
            switch (skills.skillName.toLocaleLowerCase()) {
              case "truffle":
                icon =  <Icon icon={truffleIcon} />;
                break;
              case "ethereum":
                icon =  <Icon icon={ethereumIcon} />;
                break;
              case "django":
                icon =  <Icon icon={djangoIcon} />;
                break;
              case "nodejs":
                icon =  <Icon icon={nodejsIcon} />;
                break;
              case "aws":
                icon =  <Icon icon={awsIcon} />;
                break;
                
              case "python":
                icon = <Icon icon={pythonIcon} />;
                break;
              case "cpp":
                icon = <Icon icon={fileTypeCpp3} />;
                break;
              case "react":
                icon = <Icon icon={reactIcon} />;
                break;
              case "flask":
                icon = <Icon icon={flaskIcon} />;
                break;
              case "vue":
                icon = <Icon icon={vueIcon} />;
                break;
              case "scikit":
                icon = <Icon icon={scikitlearnIcon} />;
                break;
              case "tensorflow":
                icon = <Icon icon={tensorflowLight} />;
                break;
              case "machine learning":
                icon = <Icon icon={machineLearningOutlined} />;
                break;
              case "natural language processing":
                icon = <Icon icon={ibmWatsonNaturalLanguageUnderstanding} />;
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
