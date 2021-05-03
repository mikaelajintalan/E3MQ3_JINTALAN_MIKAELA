import React from 'react';

const About = () => {
    return (
        <div className="about"
            style={{
                display: 'flex',
                justifyContent: 'Center',
                alignItems: 'Center',
                height: '100%',
                fontSize: 25,
                marginTop: '100px',
                lineHeight: 1.5
            }}
        >
            <p >
                <em>"I am aspirant of the Daughters of St. Joseph of Caburlotto."</em> <br />
                <strong>Nickname:</strong> Mika <br />
                <strong>Age:</strong> 20 <br />
                <strong>Address:</strong> 1773 Tunasan, Muntinlupa City <br />
                <strong>Email:</strong> mikaela.jintalan@gmail.com <br />
                <strong>Motto:</strong> Don't problem the problem, let the problem problem you.
            </p>    
        </div>
    );
};

export default About;