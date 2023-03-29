import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ModelView from 'react-native-3d-model-view';

const ModelViewer = () => {
  const [modelUrl, setModelUrl] = useState('');

  useEffect(() => {
    // aqui você pode fazer a chamada API para obter o URL do modelo
    setModelUrl('../../assets/Lower_canines.obj');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ModelView
        source={{ uri: modelUrl }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default ModelViewer;
