
import React, { Component } from 'react';
import { Simpsons } from '../api/simpsons'
import { withTracker } from 'meteor/react-meteor-data'


const SimpsonsChapters = (props) => console.log('simpson chapters', props) ||
<div>
    <header className='simpson_header'>
        <h1 className='simpson_font'>The Simpsons</h1>
    </header>
    {
        props.simpsons.map(c => {
            return (
                <div key={c._id} className="card_simpson">
                    <div className='title'>
                        <span className='simpson_font'>{c.name}</span> <span>{c.occupation}</span>
                    </div>
                    <div className="card__body">
                        <img src={c.img_url} />
                        <p>{c.detail}</p>
                    </div>
                </div>
            )
        })
    }
</div>

export default withTracker(() => {
    Meteor.subscribe('simpsons')

    return {
        simpsons: Simpsons.find({}).fetch()
    }
})(SimpsonsChapters);
