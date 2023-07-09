import React from 'react'

const HeaderItems = (props) => {
    return (
        <div className="card py-3 col-md-4 inline-block">
            <div className="row">
                <div className="col-4 col-md-4 d-flex align-items-center">
                    <img src={props.thumbImg} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-md-8 d-flex">
                    <div className="card-body d-flex align-items-center">
                        <div>
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderItems
