import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

interface TabItem {
    name: string;
    component: React.ComponentType<any>;
}

interface TabBarProps {
    tabs: TabItem[];
}

const TabBar: React.FC<TabBarProps> = ({ tabs }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: '500',
                },
                tabBarActiveTintColor: '#00CCA7',
                tabBarInactiveTintColor: '#333',
                tabBarIndicatorStyle: {
                    backgroundColor: '#00CCA7',
                    height: 1,
                },
                tabBarContentContainerStyle: {
                    paddingHorizontal: 10,
                }
            }}
        >
            {tabs.map((tab) => (
                <Tab.Screen 
                    key={tab.name} 
                    name={tab.name} 
                    component={tab.component} 
                />
            ))}
        </Tab.Navigator>
    );
};

export default TabBar;