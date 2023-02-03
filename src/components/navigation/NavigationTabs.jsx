import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviePage from '../../pages/MoviesPage';
import SearchResults from '../../pages/SearchResults';
import TVShows from '../../pages/TVShows';
import Test from '../testComponent/Test';

const Tab = createMaterialTopTabNavigator();

export default function NavigationTabs () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MoviePage} />
      <Tab.Screen name="Search Results" component={SearchResults} />
      <Tab.Screen name="TV Shows" component={TVShows} />
    </Tab.Navigator>
  );
}
