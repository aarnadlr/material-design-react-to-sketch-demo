import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import { Button, ButtonIcon } from 'rmwc/Button';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { Icon } from 'rmwc/Icon';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="wrapper" style={{margin:'0 auto'}}>
          <Button style={{display:'block', marginTop:'25px'}} data-sketch-symbol="3" raised>
            Raised
          </Button>
          <Button style={{display:'block', marginTop:'25px'}} data-sketch-symbol="4" dense>
            Dense
          </Button>
          <Button style={{display:'block', marginTop:'25px'}} data-sketch-symbol="5" unelevated>
            Unelevated
          </Button>
          <Button style={{display:'block', marginTop:'25px'}} data-sketch-symbol="6" outlined>
            Outlined
          </Button>
          <Button style={{display:'block', marginTop:'25px'}} data-sketch-symbol="7" raised theme="secondary-bg on-secondary">
            With Theme
          </Button>

          <br />
          <br />
          <br />

          <Card data-sketch-symbol="8" style={{ width: "21rem"}}>
            <CardPrimaryAction>
              <CardMedia sixteenByNine style={{ backgroundImage: "url(https://material-components-web.appspot.com/images/16-9.jpg)" }} />
              <div style={{ padding: "0 1rem 1rem 1rem" }}>
                <Typography use="headline6" tag="h2">
                  Our Changing Planet
                </Typography>
                <Typography use="subtitle2" tag="h3" theme="text-secondary-on-background" style={{ marginTop: "-1rem" }}>
                  by Kurt Wagner
                </Typography>
                <Typography use="body1" tag="div" theme="text-secondary-on-background">
                  Visit ten places on our planet that are undergoing the biggest changes today.
                </Typography>
              </div>
            </CardPrimaryAction>
            <CardActions>
              
              <CardActionButtons>
                <CardAction>Read</CardAction>
                <CardAction>Bookmark</CardAction>
              </CardActionButtons>
              <CardActionIcons>
                <CardAction
                  iconToggle
                  on={{ label: 'Remove from favorites', content: 'favorite' }}
                  off={{ label: 'Add to favorites', content: 'favorite_border' }}
                />
                <CardAction icon use="bookmark_border" />
                <CardAction icon use="share" />
              </CardActionIcons>
              
            </CardActions>
          </Card>

          <div style={{textAlign:'left', marginTop:'100px', marginBottom:'150px'}}>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='a1' use="headline1">headline1</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='a2' use="headline2">headline2</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='a3' use="headline3">headline3</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='a4' use="headline4">headline4</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='a5' use="headline5">headline5</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='a6' use="headline6">headline6</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='a7' use="subtitle1">subtitle1</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='a8' use="subtitle2">subtitle2</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='a9' use="body1">body1</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='10' use="body2">body2</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='11' use="caption">caption</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='12' use="button">button</Typography>
            <Typography style={{display:'block', marginBottom:'50px'}} data-sketch-symbol='13' use="overline">overline</Typography>
          </div>

        </div>
      </div>;
  }
}

export default App;
