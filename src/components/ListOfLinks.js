import React from 'react';

// props expected contents
// array of Objects: items (each object has string displayName and string path)

function ListOfLinks(props) {
    return (
        <>
            <div className="container-fluid mt-3">
            <div className="row">
            <ul className="listoflinks">
                {props.items.map((item, i) =>
                    <li key={i} className="link">
                            {/* <Link to={item.path}>{item.displayName}</Link> */}
                            <div className="col-md-3 col-sm-4">
                                <div className="card border-5 m-2" style={{width:"17rem", height:"9rem"}}>
                                    <a href={item.path}>
                                    <div className="card-img-top" style={{height:"4rem"}}>
                                    <center className='my-1'><i className={"fa ".concat(item.icon)} style={{color:"#222d35",fontSize:"3.5rem"}}></i> </center>

                                    </div>
                                    <div className='card-body'>
                                        <h4 className='card-title'>{item.displayName} </h4>
                                    </div>
                                    </a>
                                </div>
                            </div>
                    </li>
                    
                )}

                
            </ul>

            </div>
</div>
        </>
    );
}

export default ListOfLinks;
