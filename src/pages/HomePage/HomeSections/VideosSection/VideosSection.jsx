import styles from './VideosSection.module.scss';
import YouTubePlayer from './YouTubePlayer/YouTubePlayer';
import border1 from '@img/videoSec1.svg'
import border2 from '@img/videoSec2.svg'
import border3 from '@img/videoSec3.svg'
import border_response1 from '@img/border_response.svg'
import border_response_mobile1 from '@img/border_response_mobile.svg'
export const VideosSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.whiteBlock}>
                <div className={'container'+' '+styles.center}style={{position:'relative'}}>
<img src={border1} alt="" className={styles.border1} />
<img src={border2} alt="" className={styles.border2} />
<img src={border3} alt="" className={styles.border3} />
<img src={border_response1} alt="" className={styles.border_response} />
<img src={border_response_mobile1} alt="" className={styles.border_response_mobile} />
                    <div className={styles.blockVideo}>
                        <div className={styles.text}>
                            <h2>BIF 2022</h2>
                            <p>
                                <p>20 ноября состоялся Бишкекский Инвестиционный форум BIF 2022, одно из крупнейших бизнес мероприятий в Центральной Азии. </p>
                                <p>BIF 2022 — это:</p>
                                <ul>
                                    <li>500 потенциальных инвесторов;</li>
                                    <li>2,5 млн привлеченных инвестиций;</li>
                                    <li>10 международных бизнес-делегаций;</li>
                                    <li>2500 участников.</li>
                                </ul>
                            </p>
                        </div>
                        <YouTubePlayer videoId={'https://www.youtube.com/embed/4UPVSX9ymyg?si=fthGnXJ8Wk9pBaJF'}/>

                        {/* <div className={styles.video}>
                            <iframe src="https://www.youtube.com/embed/4eKREu1wceI?si=PEQZzxAoyNYwH1cX" frameborder="0" title="YouTube video player" ></iframe>
                        </div> */}
                    </div>

                    <div className={styles.blockVideo}>
                        <YouTubePlayer videoId={'https://www.youtube.com/embed/yBJ3AlRBAw8?si=5EDalI1zrIs-m9Vg'}/>
                        {/* <div className={styles.video}>
                            <iframe src="https://www.youtube.com/embed/4eKREu1wceI?si=PEQZzxAoyNYwH1cX" frameborder="0" title="YouTube video player" ></iframe>
                        </div> */}
                        <div className={styles.text}>
                            <h2>Green Economy 2022</h2>
                            <p>
                            11 ноября прошел форум «Зеленая Экономика - 2022», который был посвящен вопросам развития зеленой экономики в Центральной Азии.
                            </p>
                            <p>
                            Главные задачи форума «Зеленая Экономика - 2022» — налаживание и повышение потенциала деловых связей, обмен опытом и выработка единых позиций по продвижению региона Центральной Азии в качестве.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    );
}

