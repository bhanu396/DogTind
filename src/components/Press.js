import '../App.css'
import techcrunch from "../images/TechCrunch.png"
import tnw  from "../images/tnw.png"
import bizinsider from '../images/bizinsider.png'
import mashable from '../images/mashable.png'

function Press(){
    return(
        <div>
            <section className="colored-section" id="press">
                <img className="press-logo" src={techcrunch} alt="tc-logo"/>
                <img className="press-logo" src={tnw} alt="tnw-logo"/>
                <img className="press-logo" src={bizinsider} alt="biz-insider-logo"/>
                <img className="press-logo" src={mashable} alt="mashable-logo"/>

            </section>
        </div>
    );
}

export default Press;