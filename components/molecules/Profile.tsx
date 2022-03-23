import {
  faFacebookF, faGithub, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';

interface ProfileProps{
  disabled:boolean;
}

export default function Profile({ disabled }:ProfileProps) {
  const cxName = cx({
    'bg-slate-200 rounded-lg mx-3 my-1 mb-2 p-3': true,
    '-slow': disabled === false,
    'transition ease duration-700': !disabled,
    'hidden ': disabled,
  });
  return (
    <div className={cxName}>
      <p className="font-roboto">
        Hello there, Im Denny Abbas Zain a web developer you can reach me
        {' '}
      </p>
      <div className="social-media flex justify-evenly w-2/4 mt-5 ">
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
    </div>
  );
}
