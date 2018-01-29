/*
* This search component works with ElasticSearch and it uses a simpson Index.
*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'


const SimpsonRecord = (props) =>
<div className="result_row" key={props.id}>
    <div className="details">
        <div><span className="simpson_font">{props.title}</span></div>
        <div>Release Date: <span>{props.original_air_date}</span></div>
        <div>Season: <span>{props.season}</span></div>
        <div>US Views: <span>{props.us_viewers_in_millions}</span></div>
        <div>IMDB: <span>⭐️ {props.imdb_rating} </span></div>
        <div>Votes: <span>{props.imdb_votes}</span></div>
    </div>
    <div className="watch_online">
            <div className="tab">
                <a href={props.video_url} target='_blank'><span className="simpson_font">Watch online</span></a>
                <small>* Only USA (subscription required)</small>
            </div>
            <div className="tab">
                <a href={`https://www.youtube.com/results?search_query=the+simpsons+${props.title.replace(/\s/g, '+')}&sp=EgIYAg%253D%253D`} target='blank'>
                <span className="simpson_font">Search on yotube</span></a>
            </div>
        </div>
    <img src={props.image_url} alt={`Opps! not found image for ${props.title}`} />
</div>

const Results = (props) => console.log('results', props) ||
<div className='results' >
    {props.results.map(r => <SimpsonRecord key={r.id} {...r} />)}
</div>


class SearchElastiSearch extends Component {

    state = {
        results: []
    }

    handleSubmit(e) {
        e.preventDefault()
        const searchTerm = ReactDOM.findDOMNode(this.refs.global_search).value.trim()
        Meteor.call('simpsons.search', searchTerm, (err, res) => {
            if (err) {
                throw err;
            }
            this.setState({
                results: res
            })
        })

        ReactDOM.findDOMNode(this.refs.global_search).value = '';
    }

    render() {
        return (
            <div>
                <form className='main_search' onSubmit={this.handleSubmit.bind(this)}>
                    <input placeholder="🔎 Powered by Elastic Search." type='search' ref='global_search' />
                </form>
                {this.state.results.length > 0 ? <Results {...this.state} /> : null}
            </div>
        )
    }

}

export default SearchElastiSearch
