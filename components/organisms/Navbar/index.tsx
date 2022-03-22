import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="flex justify-between py-3 px-6">
      <div className="flex">
        <Image src="/01.jpg" width={30} height={30} alt="profile" className="rounded-full" />
        <p className="self-center pl-2 font-poppins">DZ</p>
      </div>
      <FontAwesomeIcon icon={faBarsStaggered} className="self-center" />
    </div>
  );
}
