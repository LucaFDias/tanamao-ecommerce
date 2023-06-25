import { StatusBar, View } from 'react-native';
import { Routes } from './src/routes';
import React from 'react';


export default function App() {
  return (
    <View 
    style={{flex: 1}}>
      <StatusBar />
        <Routes/>
    </View>
  );
};