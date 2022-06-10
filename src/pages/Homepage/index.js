import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'
import LeftOutlined from ''

export default function Homepage() {
  return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <LeftOutlined />
            <Text style={styles.title}>Olá, Jorge Henrique</Text>
        </Animatable.View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },

    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },

    title: {
        fontSize: 28,
        color: "#fff"
    }
})