import Help from '../../components/faq/help/Help'
import Categories from '../../components/faq/categories/Categories'
import FaqQuestions from '../../components/faq/faq-questions/FaqQuestions'
import { Helmet } from 'react-helmet'
import React, {useEffect} from 'react'

function Faq (){
    useEffect(() => {
        const changePage = () => {
          window.scrollTo({top: 0});
        };
        changePage()
      }, []);
    return (
        <main id="faq">
            <Helmet>
                <title>FAQ | Clother</title>
            </Helmet>
            <Help />
            <Categories />
            <FaqQuestions />
        </main>
    )
}

export default Faq