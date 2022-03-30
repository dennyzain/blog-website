import {
  faFacebookF, faGithub, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Profile() {
  return (
    <div className="bg-slate-200 rounded-lg mx-3 my-1 mb-2 p-3 md:hidden">
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
