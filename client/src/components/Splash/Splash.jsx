import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../actions/session_actions'
import SplashTitle from './SplashTitle'
import '../../stylesheets/splash.css'

class Splash extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        // If user is logged in to session, redirect to home
        if (this.props.currentUser) {
            return <Redirect to="/" />
        }

        return (
            <div className="splash-container gradient-warm">
                <SplashTitle />
                <Link to="/login"><button>Log in</button></Link>
                <Link to="/signup"><button>Register</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
