import React from 'react';
import { Text, Button, Dimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Form, Input } from 'ui/Form';


const BgImage = styled.ImageBackground`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  zIndex: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LoginView = styled.View`
  align-items: center;
  justify-content: center;
  height: ${Dimensions.get('window').height}px;
`;

const Centered = styled.View`
  flex-basis: auto;
  flex:1;
  align-items:center;
  justify-content: center;
`;

const Welcome = () => {
  const onSubmit = () => {
    alert('submit');
  };

  return (
    <LoginView>
      <Centered>
        <Form
          onSubmit={onSubmit}
          initialValues={{ stooge: 'larry', employed: false }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <>
              <Input placeholder={'Email'} name={'username'} />
              <Input type={'password'} placeholder={'Senha'} name={'username'} />

              <GoToButton type={'submit'} screenName={'Home'}>
                Login
              </GoToButton>
            </>
          )}/>
        <Text>
          Ao se registrar, você automaticamente concorda com os termos
          de serviço e política de privacidade do Scroll.
        </Text>
      </Centered>
    </LoginView>
  );
};


function GoToButton({ screen, children }) {
  const navigation = useNavigation();

  return (
    <Button
      title={children}
      onPress={() => navigation.navigate('App', { screen })}
    />
  );
}
export default () => {
  return (
    <View>
      <Welcome/>
      <BgImage source={require('assets/images/bg/woods.jpg')} />
    </View>
  );
};
