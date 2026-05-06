import virat from './assets/virat.jpg'
function Playercard(){

    return(
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                <img src={virat} className='card-img-top'></img>

                </div>
                <div className="card-body px-3 py-5 text-center">
                    <h1 className="">VIRAT</h1>
                    <p className="card-text">Greatest of all time , greatest indian test captain. Face of cricket</p>
                </div>
            </div>
        </div>
    )
}
export default Playercard;