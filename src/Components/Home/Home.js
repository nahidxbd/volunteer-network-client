import { Container, Grid } from '@material-ui/core';
import React from 'react';
// import volunteerImages from '../../fakeData/fakeData';

import { useEffect,useState } from 'react';


import EventCard from '../EventCard/EventCard';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {

    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/volunteersEvents')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])
    return (
        <div>
            <Container>
                <Header></Header>
                <div className="mt-5">
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                        <input className='input' type="text" placeholder="Search..." />
                        <button style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}
                            className='search-button' type="submit">Search</button>
                    </div>
                </div>
                <div style={{ marginTop: '50px' }}>
                    <Grid container item xs={12} spacing='5' justify='center' style={{ textAlign: 'center', margin: 'auto' }}>

                        {
                            volunteers.map(eventCard =>

                                <Grid item >
                                    <EventCard eventCard={eventCard} key={Math.random()}></EventCard>
                                </Grid>)
                        }

                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Home;