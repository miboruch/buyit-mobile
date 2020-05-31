import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import Screen from './Screen';
import Button from '../components/Button';
import Input from '../components/Input';
import { addProductArray } from '../utils/contentArrays';
import { AddProductSchema } from '../utils/schemaValidation';

const AddProductScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const chooseFile = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImage({ uri: response.uri });
      }
    });
  };

  return (
    <Screen navigation={navigation} theme={'light'}>
      <View style={styles.bottomView}>
        <Text style={styles.heading}>Add product</Text>
        <Formik
          initialValues={{ name: '', description: '', price: null, category: 'all' }}
          onSubmit={({ name, description, price, category }, { resetForm }) => {
            console.log(name, description, price, category);
            resetForm();
            setImage(null);
          }}
          validationSchema={AddProductSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => {
            const addProductContentArray = addProductArray(values, errors);
            return (
              <>
                <Button text={'Open gallery'} onPress={() => chooseFile()} isButtonDark={true} />
                {addProductContentArray.map((item) => (
                  <Input
                    labelText={item.labelText}
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    value={item.value}
                    key={item.name}
                  />
                ))}
                <Button
                  text={'Submit'}
                  isButtonDark={true}
                  onPress={handleSubmit}
                  disabled={image === null}
                />
              </>
            );
          }}
        </Formik>
        {image && <Image source={image} style={styles.image} />}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#2d2d2d',
    fontFamily: 'Futura',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20
  },
  bottomView: {
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10
  }
});

const mapStateToProps = ({
  authenticationReducer: { isLoggedIn, userInfo },
  cartReducer: { cart, totalPrice }
}) => {
  return { isLoggedIn, userInfo, cart, totalPrice };
};

export default connect(mapStateToProps)(AddProductScreen);
