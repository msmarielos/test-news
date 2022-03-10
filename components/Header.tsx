import styles from "../styles/Header.module.css";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getLocaleIcon, humanizeLocale } from "../utils/locale";

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const router = useRouter();

  const onDocumentClick = useCallback(() => {
    if (!isDropdownVisible) {
      return;
    }

    toggleDropdown();
  }, [isDropdownVisible]);

  useEffect(() => {
    if (window?.document) {
      document.body.addEventListener("click", onDocumentClick);

      return () => document.body.removeEventListener("click", onDocumentClick);
    }
  }, [onDocumentClick]);

  function toggleDropdown() {
    setIsDropdownVisible((visible) => !visible);
  }

  function onActivatorClick(event: MouseEvent) {
    event.stopPropagation();

    toggleDropdown();
  }

  return (
    <header className={styles.header}>
      <div className="content">
        <div className={styles.container}>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="Itmo Logo" height={16} />
            </a>
          </Link>
          <button className={styles.lang_container} onClick={onActivatorClick}>
            <img
              className={styles.flag}
              src={getLocaleIcon(router.locale)}
              alt="rus-language"
            />
            <span className={styles.language}>
              {humanizeLocale(router.locale)}
            </span>
            <span className={styles.btn_select_lang}>
              <img src="/select.svg" alt="select-language" height={5} />
            </span>
            {isDropdownVisible && (
              <div className={styles.select_container}>
                <Link href="/" locale="en-US">
                  <a className={styles.lang}>
                    <img
                      className={styles.flag}
                      src="/gb.svg"
                      alt="eng-language"
                    />
                    Eng
                  </a>
                </Link>
                <Link href="/" locale="ru-RU">
                  <a className={styles.lang}>
                    <img
                      className={styles.flag}
                      src="/ru.svg"
                      alt="rus-language"
                    />
                    Рус
                  </a>
                </Link>
              </div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
