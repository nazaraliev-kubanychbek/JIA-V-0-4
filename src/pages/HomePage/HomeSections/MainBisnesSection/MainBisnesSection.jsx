import styles from './MainBisnesSection.module.scss';
import firstMan from '@img/homepageImg/Component3.png';
import secondMan from '@img/homepageImg/Rectangle4383.jpg';
import thirdMan from '@img/homepageImg/Rectangle4384.jpg';
import fourthMan from '@img/homepageImg/Rectangle4385.jpg';
import presentImage1 from '@img/present1.png'
import presentLeftBorder from '@img/presentLeftBorder.svg'
import presentRightBorder from '@img/presentRightBorder.svg'
export const MainBisnesSection = () => {
    return (
        <section className='container'>
            <div className={styles.container}>
                <h2>Что вас будет ждать на главном бизнес событии года?</h2>

{/* 
                <div className={styles.flexItem}>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>
                            <img src={firstMan} alt="" />
                        </div>
                        <p>Выставка</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>

                            <img src={secondMan} alt="" />
                        </div>

                        <p>Презентации инвест-проектов</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>

                            <img src={thirdMan} alt="" />
                        </div>
                        
                        <p>Мастер-классы</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>
                            <img src={fourthMan} alt="" />
                        </div>
                        <p>Панельные сессии</p>
                    </div>
                </div> */}


                <div className={styles.presents}>
                    <img  alt="" className={styles.present_left_border} src={presentLeftBorder} />
                    <img  alt="" className={styles.present_right_border }src={presentRightBorder} />
                    <div className={styles.present}><img src={presentImage1} alt="" /><p className={styles.present_desc}>Выставка</p></div>
                    <div className={styles.present}><img src={presentImage1} alt="" /><p className={styles.present_desc}>Презентация инвестиционных проектов</p></div>
                    <div className={styles.present}><img src={presentImage1} alt="" /><p className={styles.present_desc}>Мастер-классы</p></div>
                    <div className={styles.present}><img src={presentImage1} alt="" /><p className={styles.present_desc}>Панельные сессии</p></div>
                    <div className={styles.present}><img src={presentImage1} alt="" /><p className={styles.present_desc}>B2B встречи</p></div>
                </div>
            </div>

            
        </section>
    );
}

