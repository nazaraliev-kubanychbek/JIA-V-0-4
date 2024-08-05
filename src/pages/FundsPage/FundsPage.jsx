import { DescriptionSection } from "@components/index";
import { FirstSection } from "./FundsSections";
import linesBg from '@img/abstraklines.svg'
import classes from './FundPage.module.scss'
export const FundsPage = () => {
    return (
        <div style={{minHeight: '100vh'}} className={classes.fund}> 
            {/* <DescriptionSection text={'источники финансирования'} /> */}
            <section className={classes.section}>
            <h1 className={classes.title_page}>
            источники <br /> финансирования
            </h1>
            </section>

            <FirstSection />
        </div>
    );
}

