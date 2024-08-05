import styles from './FirstSection.module.scss';
import graph from '@img/graph.png';
import logo from '@img/header/GreenEconomy1.png'
import { useState } from 'react';
import { ModalFinancing } from '@components/index';
import { ModalForm } from '@components/ModalWindows/ModalForm/ModalForm';
import { ModalComplate } from '@components/ModalWindows/ModalForm/ModalComplate/ModalComplate';

export const FirstSection = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModalForm, setOpenModalForm] = useState(false);
    const [complate, setComplate] = useState(false);

    const arrTable = [
        {
            id: 1,
            img: logo,
            title: 'Акционерное общество микрокредитная компания «Фонд развития предпринимательства».',
            description: 'Компания является финансово-кредитным учреждением, основной целью деятельности которого является поддержка и развитие сферы малого и среднего предпринимательства Кыргызской Республики, при Министерства финансов Кыргызской Республики.',
            typeFinancing: 'Кредитование'
        },
        {
            id: 2,
            img: logo,
            title: 'Акционерное общество микрокредитная компания «Фонд развития предпринимательства».',
            description: 'Компания является финансово-кредитным учреждением, основной целью деятельности которого является поддержка и развитие сферы малого и среднего предпринимательства Кыргызской Республики, при Министерства финансов Кыргызской Республики.',
            typeFinancing: 'Кредитование'
        },
        {
            id: 3,
            img: logo,
            title: 'Акционерное общество микрокредитная компания «Фонд развития предпринимательства».',
            description: 'Компания является финансово-кредитным учреждением, основной целью деятельности которого является поддержка и развитие сферы малого и среднего предпринимательства Кыргызской Республики, при Министерства финансов Кыргызской Республики.',
            typeFinancing: 'Кредитование'
        },
        {
            id: 4,
            img: logo,
            title: 'Акционерное общество микрокредитная компания «Фонд развития предпринимательства».',
            description: 'Компания является финансово-кредитным учреждением, основной целью деятельности которого является поддержка и развитие сферы малого и среднего предпринимательства Кыргызской Республики, при Министерства финансов Кыргызской Республики.',
            typeFinancing: 'Кредитование'
        },
        {
            id: 5,
            img: logo,
            title: 'Акционерное общество микрокредитная компания «Фонд развития предпринимательства».',
            description: 'Компания является финансово-кредитным учреждением, основной целью деятельности которого является поддержка и развитие сферы малого и среднего предпринимательства Кыргызской Республики, при Министерства финансов Кыргызской Республики.',
            typeFinancing: 'Кредитование'
        }
    ];
    return (
        <section className='container'>
            <div className={styles.container}>
                {/* <img className={styles.imageGraph} src={graph} alt="BgGraph" /> */}
                <div className={styles.logoContainer}>
                    {
                        arrTable?.map(item => (
                            <div onClick={() => setOpenModal(!openModal)} className={styles.logoItem} key={item.id}>
                                <img className={styles.img} src={item.img} alt="logo" />
                                <ModalFinancing setOpenModalForm={setOpenModalForm} item={item} openModal={openModal} setOpenModal={setOpenModal} />
                            </div>

                        ))
                    }
                </div>


                <button onClick={() => setOpenModalForm(!openModalForm)} className={styles.button}>Связаться</button>
                <ModalForm openModalForm={openModalForm} setOpenModalForm={setOpenModalForm} setComplate={setComplate}/>
                <ModalComplate openModalComplate={complate} setOpenModalComplate={setComplate} />
            </div>
        </section>
    );
}
