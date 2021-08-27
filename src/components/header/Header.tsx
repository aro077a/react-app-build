import { FC, useState, useEffect } from "react";

import { Twirl as Hamburger } from "hamburger-react";
import Dropdown from "react-dropdown";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { getLanguageSuccess } from "../../redux/features/language";
import {
  fetchNavLinks,
  navbarSelector,
} from "../../redux/features/navbar/navbarSlice";
import { whiteLogoPath } from "../../utils/paths";
import Navbar from "../home-container/Navbar";
import Logo from "../icon-containers/Logo";
import MobileLogo from "../icon-containers/MobileLogo";
import MobileNavbar from "../mobile-navbar/MobileNavbar";
import { SelectType } from "../model";
import Button from "../reusable-components/Button";

const Header: FC = () => {
  const { t, i18n } = useTranslation("common");

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { navLinks } = useSelector(navbarSelector);

  const [isOpen, setOpen] = useState(false);
  const [lang, setLang] = useState({ value: "en", label: "EN" });

  const [langOptions, setLangOptions] = useState([
    { value: "ru", label: "RU" },
    { value: "hy", label: "HY" },
    { value: "fr", label: "FR" },
  ]);

  const [headerClass, setHeaderClass] = useState("header__container");

  const activePath = whiteLogoPath.filter((e) => e === pathname);

  useEffect(() => {
    dispatch(getLanguageSuccess(lang.value));
    dispatch(fetchNavLinks(lang.value));
  }, [dispatch, lang.value]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0 || prevScrollPos < currentScrollPos) {
        setHeaderClass("header__container");
      } else if (prevScrollPos > currentScrollPos) {
        setHeaderClass("scrolled__header");
      }
      prevScrollPos = currentScrollPos;
    };
  }, [headerClass]);

  const showMenu = () => {
    setOpen(!isOpen);
  };

  const handleLangChange = (option: SelectType) => {
    const filteredLang = langOptions.filter(
      (langOption) => langOption.value !== option.value
    );
    setLangOptions([...filteredLang, lang]);
    setLang(option);

    i18n.changeLanguage(option.value);
  };

  return (
    <div
      className={headerClass === "scrolled__header" ? "header-background" : ""}
    >
      <div className={headerClass}>
        <Link to="/">
          <Logo className="logo" headerClass={headerClass} />
        </Link>
        <div
          className={
            headerClass === "scrolled__header"
              ? "scrolled__header__last"
              : "header__container__last"
          }
        >
          <Navbar navLinks={navLinks} headerClass={`${headerClass}`} />
          <Button
            className={
              headerClass === "scrolled__header"
                ? "header__container__button--dark"
                : activePath.length
                ? "header__container__button--dark"
                : "header__container__button--light"
            }
            buttonText={t("header.button")}
          ></Button>
          <Dropdown
            className={
              headerClass === "scrolled__header"
                ? "Dropdown__root__dark"
                : activePath.length
                ? "Dropdown__root__dark"
                : "Dropdown__root__light"
            }
            options={langOptions}
            value={lang}
            onChange={(option) => handleLangChange(option)}
          />
        </div>
        <div
          className={
            pathname === "/" || pathname === "/about" || pathname === "/career"
              ? "header__container__mobile--dark"
              : "header__container__mobile--light"
          }
          onClick={showMenu}
          role="button"
          aria-hidden="true"
        >
          <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
        </div>
        <div
          className={
            isOpen
              ? "header__container__mobile__menu"
              : "header__container__mobile__menu__hide"
          }
        >
          <MobileLogo className="header__container__mobile__menu--logo" />
          <MobileNavbar
            navLinks={navLinks}
            showMenu={showMenu}
            selectedLang={lang.label}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
