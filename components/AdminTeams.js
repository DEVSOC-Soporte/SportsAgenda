import React,{Component} from 'react'
import {View,FlatList,TouchableOpacity} from 'react-native';
import {DefaultTheme, Button,Appbar,Text,Avatar,ActivityIndicator,Portal,Dialog} from 'react-native-paper';

export default (props)=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-evenly',flex:1}}>
            <FlatList
            data={props.equipos}
            renderItem={({item})=>(
                <View style={{flex:1}}>
                    <TouchableOpacity>
                        <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-evenly'}}>
                        <View style={{flex:1,padding:20,alignItems:'center',flexDirection:'row'}}>
                            <Avatar.Icon color="white" size={60} icon="security"/>
                            <Text style={{paddingLeft:20,fontSize:18}} theme={theme}>{item.nombreEquipo}</Text>
                        </View>
                        <View style={{alignItems:'center',paddingRight:20}}>
                            <Text theme={theme}>Por pagar:</Text>
                            <Text style={{fontSize:16}} theme={theme}>$60</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            onRefresh={props.handleRefresh}
            refreshing={props.refreshing}>
            </FlatList>

            <Portal>
                <Dialog
                visible={props.visible}
                onDismiss={()=>props.hideDialog()}
                theme={theme2}>
                <Dialog.Title>Registrar pago</Dialog.Title>

                </Dialog>
            </Portal>
        </View>
    )
}

const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
      ...DefaultTheme.colors,
      primary: '#47C9C6',
      accent: '#47C9C6',
      background: '#3B4B61',
      text:'#1E1E1E',
      placeholder: '#FAFAFA',
      surface: '#3B4B61',
      disabled: 'white'
    }
  };

  
  const theme2 = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
      ...DefaultTheme.colors,
      primary: '#47C9C6',
      accent: '#47C9C6',
      background: '#3B4B61',
      text:'white',
      placeholder: '#FAFAFA',
      surface: '#3B4B61',
      disabled: 'white'
    }
  };