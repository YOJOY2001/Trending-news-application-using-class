import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor() {
        super();
        console.log("Hello i am constructor from news component");
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1b968a82d05d483eaa304af0f31e2c7a";
        let data=await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles : parseData.articles})
    }
    render() {
        console.log("render");
        return (
            <div className='container my-3'>
                <h2>NewDaily - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((item, index) => {
                        return <div className="col-md-4" key={index}>
                            <NewsItem title={item.title?item.title.slice(0, 45):""} description={item.description?item.description.slice(0, 88):""} imageUrl={item.urlToImage} newsUrl={item.url} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                <button type="button" className="btn btn-dark"  onClick={handlePreviousClick}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
