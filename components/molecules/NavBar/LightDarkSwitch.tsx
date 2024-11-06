import ldStyles from './LightDarkSwitch.module.css';
import {useState, useEffect} from 'react';
import sun from '../../../assets/Sun.svg';
import moon from '../../../assets/Moon.svg';

const LightDarkSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
      // Check localStorage for the theme
      const selectedTheme = localStorage.getItem("selected-theme");
      if (selectedTheme === "dark") {
          setIsChecked(true);
          setDarkMode();
      } else {
          setLightMode();
      }
  }, []);

  const setDarkMode = () => {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("selected-theme", "dark");
  };

  const setLightMode = () => {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("selected-theme", "light");
  };

  const handleChange = () => {
      setIsChecked(!isChecked);
      if (!isChecked) {
          setDarkMode();
      } else {
          setLightMode();
      }
  };

  return (
      <div className={ldStyles.LDswitch}>
          <label>
              <input type="checkbox" checked={isChecked} onChange={handleChange} />
              <span className={ldStyles.slider}>
                  <img src={isChecked ? moon.src : sun.src} alt="Theme icon" />
              </span>
          </label>
      </div>
  );
};

export default LightDarkSwitch;