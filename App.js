import React, {useState, useEffect, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Camera, CameraType} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import React, { useState } from 'react';


export default function App() {
  
  const [hasCameraPermission, setHasCameraPermission]= useState(null);
  const [image, setImage]= useState(null);
  const [type, setType]= useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() =>{
    (async () =>{
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    }) ();
  },[])


  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
     >
      <Text>Helllloooo</Text>
      </Camera>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  camera:{
    flex:1,
    borderRadius:20,
  }

});
