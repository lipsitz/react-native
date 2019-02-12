import React from 'react'
import { TouchableHightLigh, View, Text, FlatList, StyleSheet } from 'react-native'
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button'

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3',
        flexWrap: 'wrap'
    },
})
class EventList extends React.Component {
    state = {
        events: [
            {
                "date": "2020-06-29T13:45:50.000Z",
                "id": "001c9b6d-00a9-465c-a2d3-assfb7176a0a87"
            },
            {
                "date": "2020-06-29T13:45:50.000Z",
                "id": "001c9b6d-00a9-465c-a2d3-afb7176a0a87"
            },
        ]
    }

    componentDidMount() {
        this.state.events.push(this.props.navigation.state.params)
        setTimeout(() => {
            let d = new Date();
            const time =
            {
                "date": new Date(d).toUTCString(),
                "id": d.getTime(),

            }
            this.state.events.push(time)
        }, 1000)
    }


    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.state.events}
                renderItem={({ item }) => <EventCard event={item} />}
                keyExtractor={item => item.id}
            />


        )
    }
}

export default EventList;