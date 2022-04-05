import style from '../../../styles/animate.module.css';

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 h-auto relative w-full flex justify-center ">
      <p className="font-roboto mb-2">Made with &hearts; 2022</p>
      <div className={`${style['bg-full-color']} h-2 bottom-0 lg:rounded-t-lg absolute w-full`} />
    </footer>
  );
}
