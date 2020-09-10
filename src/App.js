import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import logo from './logo.svg';
import './App.css';

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate();


function App() {
	const [value, setValue] = React.useState(0);
	
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
		<BottomNavigation
		  value={value}
		  onChange={(event, newValue) => {
			  setValue(newValue);
			newValue==1?translateToEng():translateToChi();
		  }}
		  showLabels>
		 
		  <BottomNavigationAction label="To Chinese" />
		  <BottomNavigationAction label="To English" />
		</BottomNavigation>
		<div style={{ width: '100%'}}>
			<TextField
			  id="chinese"
			  label="Chinese"
			  multiline
			  rows={8}
			  defaultValue="測試"
			  variant="outlined"
			  style={{ width: '50%'}}
			/>
			<TextField
			  id="english"
			  label="English"
			  multiline
			  rows={8}
			  defaultValue="Test"
			  variant="outlined"
			  style={{ width: '50%'}}
			/>
		</div>

      </Container>
    </React.Fragment>
  );
}

async function translateToEng() {
	const srcText = document.getElementById('chinese').value;
	document.getElementById('english').value = translateWords(srcText, 'en');
}

async function translateToChi() {
	const srcText = document.getElementById('english').value;
	document.getElementById('chinese').value = translateWords(srcText, 'zh-TW');
}

async function translateWords(text, targetLang) {
	let [translations] = await translate.translate(text, targetLang);
	translations = Array.isArray(translations) ? translations : [translations];
	return translations[0];
}

export default App;
