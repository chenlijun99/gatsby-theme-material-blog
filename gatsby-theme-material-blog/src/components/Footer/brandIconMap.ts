import {
  faGithub,
  faTwitter,
  faInstagram,
  faGitlab,
  faFacebook,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

const brandIconMap: {
  [key: string]: IconDefinition;
} = {
  github: faGithub,
  twitter: faTwitter,
  facebook: faFacebook,
  instagram: faInstagram,
  gitlab: faGitlab,
};

export default brandIconMap;
