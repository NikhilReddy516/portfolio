import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.jpg';


class App extends Component{

    state = { displayBio : false};
    toggleDisplayBio = () =>{
        this.setState({displayBio : !this.state.displayBio});
    }

    render(){
        return (
            <div>
                
                <img src={profile} alt='profile' className="profile" />
                <h1>Hello</h1>
                <p>This is Nikhl</p>
                <Title />
                <p>I love full stack development.</p>
                {this.state.displayBio ? (
                    <div>
                        <p>I live in Banglore and code every day</p>
                        <p>I enjoy writing javascript</p>
                        <p>I often listen music</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                ): (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                )}

                <hr />
                <Projects />
                
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}


export default App;