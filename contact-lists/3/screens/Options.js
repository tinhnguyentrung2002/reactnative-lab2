import React, {useEffect, useState} from "react"
import{StyleSheet, Text, View} from 'react-native'
import DetailListItem from "../../../components/DetailListItem"

const Options = () =>{
     return(
          <View style={styles.container}>
               <DetailListItem title={"Cập nhật thông tin"}/>
               <DetailListItem title={"Chọn ngôn ngữ"}/>
               <DetailListItem title={"Đăng xuất"}/>
          </View>
     )
}
const styles = StyleSheet.create({
     container:{
          flex:1,
          backgroundColor: 'white'
     }
})
export default Options