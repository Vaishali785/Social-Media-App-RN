import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';
import userStories from './assets/data/userStories';
import userPosts from './assets/data/userPosts';

function App() {
  const userStoryPageSize = 4;
  const [userStoryCurrentPage, setUserStoryCurrentPage] = useState(1);
  const [userStoryRenderedData, setUserStoryRenderedData] = useState([]);
  const [userStoryIsLoading, setUserStoryIsLoading] = useState(false);

  const userPostPageSize = 2;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRenderedData] = useState([]);
  const [userPostIsLoading, setUserPostIsLoading] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };
  useEffect(() => {
    setUserStoryIsLoading(true);
    const intialData = pagination(
      userStories,
      userStoryCurrentPage,
      userStoryPageSize,
    );
    setUserStoryRenderedData(intialData);
    setUserStoryIsLoading(false);

    setUserPostIsLoading(true);
    const intialDataPosts = pagination(
      userPosts,
      userPostCurrentPage,
      userPostPageSize,
    );
    setUserPostRenderedData(intialDataPosts);
    setUserPostIsLoading(false);
  }, []);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title="Let's Explore" />
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={20}
                    color="#898dae"
                  />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (userStoryIsLoading) return;
                    setUserStoryIsLoading(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoryCurrentPage + 1,
                      userStoryPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoryCurrentPage(userStoryCurrentPage + 1);
                      setUserStoryRenderedData(prevState => [
                        ...prevState,
                        ...contentToAppend,
                      ]);
                      setUserStoryIsLoading(false);
                    }
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoryRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (userStoryIsLoading) return;
            setUserPostIsLoading(true);
            const contentToAppend = pagination(
              userPosts,
              userPostCurrentPage + 1,
              userPostPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostCurrentPage(userPostCurrentPage + 1);
              setUserPostRenderedData(prevState => [
                ...prevState,
                ...contentToAppend,
              ]);
              setUserPostIsLoading(false);
            }
          }}
          showsVerticalScrollIndicator={false}
          data={userPostRenderedData}
          renderItem={({item}) => (
            <View style={globalStyle.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                image={item.image}
                profileImage={item.profileImage}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
