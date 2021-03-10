import { Container, CssBaseline } from '@material-ui/core'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import PersonalPage from './pages/PersonalPage'
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './theme'
import Navbar from './components/global/header/Navbar';
import Footer from './components/global/footer/Footer';
import './App.css'


export class App extends Component {
  state = {
    darkMode: true,
    adminLogin: true,
    userLogin: false
  }

  toggleTheme = () => {
    this.setState({
      darkMode: !this.state.darkMode
    })
    console.log(this.state.darkMode)
  }

  login = (username, password) => {
    if (username === 'admin' && password === 'password')
      this.setState({
        adminLogin: true
      })
    else if (username === 'user' && password === 'password')
      this.setState({
        userLogin: true
      })
  }

  logout = () => {
    this.setState({
      userLogin: false,
      adminLogin: false
    })
    console.log(this.state.userLogin, this.state.adminLogin)
  }

  render() {
    const { darkMode, adminLogin, userLogin } = this.state

    return (
      <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
        <CssBaseline>
          <Navbar 
            adminLogin={ adminLogin }
            userLogin={ userLogin }
            currentTheme={ darkMode } 
            toggleTheme={ this.toggleTheme } />
            <Container>
              <Switch>
                <Route exact path='/games/nba2k22' render={ () => <Game userLoggedIn={this.state.userLogin}  
                                                                        gameAdminLoggedIn={this.state.adminLogin} 
                                                                        siteAdminLoggedIn={this.state.adminLogin}/> } />
                <Route exact path='/' render={ () => <Home /> } />
                <Route exact path='/login' render={ () => <LoginPage 
                                                            login={ this.login }
                                                             /> } />
                <Route exact path='/signup' render={ () => <SignUpPage /> } />
                <Route exact path='/personal' render={ () => <PersonalPage logout={ this.logout } /> } />
              </Switch>
            </Container>
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    )
  }
}

export default App;
