// simpson episodes
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const Simpsons = new Mongo.Collection('simpsons')
const ES = require('elasticsearch')

if (Meteor.isServer) {
    Meteor.publish('simpsons', function simpsonPublication(){
        return Simpsons.find({})
    })

}

Meteor.methods({
    'simpsons.insert'(name, occupation) {
        check(name, String)
        check(occupation, String)

        Simpsons.insert({
            name: name,
            occupation: occupation,
            createAt: new Date()
        })

    },
    async 'simpsons.search'(text) {
        check(text, String)

        const client = new ES.Client({
            host: 'localhost:9200',
            brewapiVersion: '5.0'
        })

        const result = await client.search({q: text.trim()})
        return result.hits.hits.map(doc => doc._source)
    }

})


