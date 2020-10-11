import { Grid } from '@material-ui/core';
import taskImage from '../../images/extraVolunteer.png';
import React, { useState } from 'react';
import './Task.css';
import { Container } from 'react-bootstrap';

const Task = (props) => {

    const { date, event, _id } = props.eventData;
    const handleClick = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("delete successfully")
                    props.handleDelete()
                }
            })
    }
    return (
        <div>

            <Container>
                <Grid container item xs={11} spacing='3' style={{ margin: 'auto', marginTop: '5px' }}>
                    <Grid container item xs={10} sm={5} justify='space-around'
                        style={{ boxShadow: '2px 3px 6px Gray', borderRadius: '5px', margin: '8px' }}>
                        <Grid item xs={12} md={5} style={{ width: '50%' }}>
                            <img style={{ width: '100%', height: '180px' }} src={taskImage} alt="" />
                        </Grid>
                        <Grid item xs={10} md={5} style={{ width: '50%', marginLeft: '15px' }}>
                            <h4>{event}</h4>
                            <h5>{date}</h5>
                            <div style={{ textAlign: 'right', marginTop: '70px' }}>
                                <button onClick={() => handleClick(_id)} className='cancel-btn'>
                                    cancel
                                    </button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Task;