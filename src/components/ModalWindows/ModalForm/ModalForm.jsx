import { useEffect, useState } from "react";
import styles from "./ModalForm.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@hooks/usemedia/useMedia";
import { Value } from "sass";

export const ModalForm = ({ openModalForm, setOpenModalForm, setComplate }) => {
  const [isLegalVisible, setLegalVisible] = useState(false);
  const [isSectorVisible, setSectorVisible] = useState(false);
  const [legalChoice, setLegalChoice] = useState("");
  const [sectorChoice, setSectorChoice] = useState("");
  const [sendData, setSendData] = useState({
    full_name: "",
    name_company: "",
    legal_name: "",
    brief_description: "",
    sector: "",
  });
  const hundlerLegalVisible = () => {
    setLegalVisible(!isLegalVisible);
  };
  const changeSendData = (value, target) => {
    setSendData((prew) => {
      prew[target] = value;
      console.log("prew", prew);
      return prew;
    });
  };

  const hundlerSectorVisible = () => {
    setSectorVisible(!isSectorVisible);
  };

  const submitForm = async (event) => {
    event.stopPropagation();
    const check =
      sendData.full_name.length &&
      sendData.name_company.length &&
      sendData.legal_name.length &&
      sendData.brief_description.length &&
      sendData.sector.length;
    console.log(check);
    if (!check) {
      alert("Вы не заполнили все поля !");
      return;
    }
    try {
      const params = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(sendData),
      };
      const res = await fetch(
        "https://bif.webtm.ru/ru/api/v1/financing/reach/",
        params
      );
      const data = res.json();
      console.log(data);
    } catch {
      alert("Проблемы с сетью !");
    }
  };
  useEffect(() => {}, []);

  const w = useMediaQuery("(max-width: 700px)");
  const widthIcon = w ? "10" : "18";
  const heightIcon = w ? "26" : "34";

  if (!openModalForm) {
    return null;
  }
  console.log(sendData);
  return (
    <div
      onClick={() => setOpenModalForm(!openModalForm)}
      className={styles.open}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.block}
      >
        <div className={styles.container}>
          <form action="" className={styles.form}>
            <input
              type="text"
              placeholder="ФИО"
              onChange={(e) => changeSendData(e.target.value, "full_name")}
            />
            <input
              type="text"
              placeholder="Название вашей компании"
              onChange={(e) => changeSendData(e.target.value, "name_company")}
            />
            <textarea
              rows={2}
              type="textArea"
              placeholder="Краткое описание деятельности вашей компании"
              className={styles.textarea_modal}
              onChange={(e) =>
                changeSendData(e.target.value, "brief_description")
              }
            />

            <div onClick={hundlerLegalVisible} className={styles.select}>
              {legalChoice.length ? legalChoice : "Юридическое название"}
              <span
                style={
                  isLegalVisible
                    ? { transform: "rotate(-180deg)", transition: ".3s" }
                    : { transition: ".3s" }
                }
              >
                <svg
                  width={widthIcon}
                  height={heightIcon}
                  viewBox="0 0 18 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>

            <AnimatePresence>
              {isLegalVisible && (
                <motion.div
                  className={styles.listItem}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >
                  <p
                    onClick={() => {
                      setLegalChoice("ОсОО");
                      hundlerLegalVisible();
                      changeSendData("OcOO", "legal_name");
                    }}
                  >
                    ОсОО
                  </p>
                  <p
                    onClick={() => {
                      setLegalChoice("АО");
                      hundlerLegalVisible();
                      changeSendData("АО", "legal_name");
                    }}
                  >
                    АО
                  </p>
                  <p
                    onClick={() => {
                      setLegalChoice("ЗАО");
                      hundlerLegalVisible();
                      changeSendData("ЗАО", "legal_name");
                    }}
                  >
                    ЗАО
                  </p>
                  <p
                    onClick={() => {
                      setLegalChoice("КХ");
                      hundlerLegalVisible();
                      changeSendData("КХ", "legal_name");
                    }}
                  >
                    КХ
                  </p>
                  <p
                    onClick={() => {
                      setLegalChoice("ИП");
                      hundlerLegalVisible();
                      changeSendData("ИП", "legal_name");
                    }}
                  >
                    ИП
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div onClick={hundlerSectorVisible} className={styles.select}>
              {sectorChoice.length ? sectorChoice : "Укажите сектор"}
              <span
                style={
                  isSectorVisible
                    ? { transform: "rotate(-180deg)", transition: ".3s" }
                    : { transition: ".3s" }
                }
              >
                <svg
                  width={widthIcon}
                  height={heightIcon}
                  viewBox="0 0 18 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>
            <AnimatePresence>
              {isSectorVisible && (
                <motion.div
                  className={styles.listItem}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >
                  <p
                    onClick={() => {
                      setSectorChoice(
                        "Сельское хозяйство: растениеводство, животноводство, рыбоводство, птицеводство."
                      );
                      hundlerSectorVisible();
                      changeSendData(
                        "Сельское хозяйство: растениеводство, животноводство, рыбоводство, птицеводство.",
                        "sector"
                      );
                    }}
                  >
                    Сельское хозяйство: растениеводство, животноводство,
                    рыбоводство, птицеводство.
                  </p>
                  <p
                    onClick={() => {
                      setSectorChoice(
                        "Промышленность: пр-во товаров и продуктов, обрабатывающая и добывающая пр-сть."
                      );
                      hundlerSectorVisible();
                      changeSendData(
                        "Промышленность: пр-во товаров и продуктов, обрабатывающая и добывающая пр-сть.",
                        "sector"
                      );
                    }}
                  >
                    Промышленность: пр-во товаров и продуктов, обрабатывающая и
                    добывающая пр-сть.
                  </p>
                  <p
                    onClick={() => {
                      setSectorChoice("Строительство");
                      hundlerSectorVisible();
                      changeSendData("Строительство", "sector");
                    }}
                  >
                    Строительство
                  </p>
                  <p
                    onClick={() => {
                      setSectorChoice("Транспорт и Логистика");
                      hundlerSectorVisible();
                      changeSendData("Транспорт и Логистика", "sector");
                    }}
                  >
                    Транспорт и Логистика
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
      <div className={styles.button}>
        <button onClick={submitForm} className={styles.callButton}>
          Связаться
        </button>
      </div>
    </div>
  );
};
