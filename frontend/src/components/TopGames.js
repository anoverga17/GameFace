import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBase,
        Grid }
        from '@material-ui/core'
import './topGames.css'
import { Link } from 'react-router-dom'

export default class TopGames extends Component {
  static propTypes = {
    name: PropTypes.string,
    imgSrc: PropTypes.string,
    link: PropTypes.string
  }

  render() {
    const {name, imgSrc, link} = this.props
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Link to={`/games/${link}`}>
          <ButtonBase
            focusRipple
            key={name}
          >
            <img 
              className="image" 
              src={process.env.PUBLIC_URL + imgSrc}
              alt={name + "'s Image Button"} 
              />
            <div 
              className="title-container"
              alignCenter
            >
              {name}
            </div>
          </ButtonBase>
        </Link>
      </Grid>
    )
  }
}