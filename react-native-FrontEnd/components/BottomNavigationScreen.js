import { View, Text } from 'react-native'
import * as React from 'react'
import LoadCars from '../screens/LoadCars';
import SaveCarScreen from '../screens/SaveCarScreen';
import { BottomNavigation } from 'react-native-paper'
import Account from '../screens/Account';

const LoadCarsRoute = () => <LoadCars />;
const saveCarRoute = () => <SaveCarScreen />;
const accountRoute = (props) => <Account {...props} />;


export default function BottomNavigationScreen(props) {
    React.useEffect(() => {
        console.log(props);
    })
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'load', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'savecar', title: 'Add Car', focusedIcon: 'car', unfocusedIcon: 'car-outline' },
        { key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline', props: {"username":props.route.params.username,"fullName":props.route.params.fullname},navigation:props.navigation }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        load: LoadCarsRoute,
        savecar: saveCarRoute,
        account: accountRoute
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}