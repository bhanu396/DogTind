import '../App.css';

function Cta(){
    return(
        <div>
            <section className="colored-section" id="cta">

            <div className="container-fluid">

            <h3 className="big-heading">Find the True Love of Your Dog's Life Today.</h3>
            <button className="download-button btn btn-lg btn-dark" type="button"><i className="fab fa-apple"></i> Download</button>
            <button className="download-button btn btn-lg brn-light" type="button"><i className="fab fa-google-play"></i> Download</button>
            </div>
            </section>
        </div>
    );
}

export default Cta;