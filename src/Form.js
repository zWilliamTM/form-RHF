import React from 'react';
import {useController, useForm} from 'react-hook-form';
import {Alert, Button, TextInput, View} from 'react-native';

const EInput = ({control, name}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <TextInput
      placeholder={name}
      value={field.value}
      onChangeText={field.onChange}
    />
  );
};

const Form = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = data => {
    Alert.alert('', JSON.stringify(data));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <EInput name="User" control={control} />
      <EInput name="Password" control={control} />
      <Button title="SEND" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Form;
