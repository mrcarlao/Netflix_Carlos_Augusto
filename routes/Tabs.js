import React from "react";
import Home from '../screen/Home';
import More from '../screen/More';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screen/Search';
import Downloads from "../screen/Downloads";
import Upcoming from "../screen/UpComing";
import { translate } from "../languages/utils";

const Tab = createBottomTabNavigator();

export default class Tabs extends React.Component {

    render() {
        return (<Tab.Navigator
            tabBarOptions={{
                backgroundColor: 'black',
                activeTintColor: 'white',
                style: {
                    backgroundColor: '#1a1718',
                    borderColor: 'transparent',
                },
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: translate('Home'),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Entypo name="home" size={size} color={color} />
                    }
                }} />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarLabel: translate("Search"),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Feather name="search" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Soon" component={Upcoming}
                options={{
                    tabBarLabel: translate('Soon'),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <MaterialCommunityIcons name="folder-multiple-image" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Downloads" component={Downloads}
                options={{
                    tabBarLabel: translate('Downloads'),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Feather name="download" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen name="More" component={More}
                options={{
                    tabBarLabel: translate('More'),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Feather name="menu" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>)
    };
}