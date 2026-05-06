import image from './assets/virat.jpg'
function Herosection()
{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                       <img src={image} className='img-fluid mt-5 w-100' />
                </div>

                <div className="col-6 text-center py-5 ">
                    <h3 className='display-4'>This is a hero section</h3>
                    <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, distinctio. Reiciendis eaque, similique non veritatis dignissimos nesciunt, dicta molestiae, quis eos harum assumenda provident vitae possimus tempore iure. Aspernatur, quae.</p>
                    <a  className="btn btn-success">Know more</a>
                        
                </div>
            </div>
         
        </div>
    )
}
export default Herosection;