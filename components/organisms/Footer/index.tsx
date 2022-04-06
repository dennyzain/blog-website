import style from '../../../styles/animate.module.css';

export default function Footer() {
  return (
    <footer className="left-0 bottom-0 flex flex-col absolute right-0 text-center w-full ">
      <p className="font-poppins text-xs lg:text-sm mt-1">
        &copy; 2021-
        {new Date().getFullYear()}
        {' '}
        Made with
        &#128525;
        by Denny Abbas Zain
      </p>
      <div className={`${style['bg-full-color']} h-2 z-50 w-full left-0 bottom-0 right-0 `} />
    </footer>
  );
}
