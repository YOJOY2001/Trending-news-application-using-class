import React, { Component } from 'react'

export class NewsItem extends Component {   
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imageUrl?"https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29vZ2xlJTIwb2ZmaWNlfGVufDB8fDB8fHww":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
