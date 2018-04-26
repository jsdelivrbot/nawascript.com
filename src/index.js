import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyB2tAzw4zjNOY0LBfL_PpqPgariWzZJFhE";
const base_url = 'https://od-api.oxforddictionaries.com/api/v1';
const app_id = '4b0a4c11';
const app_keys = 'bbe830e2e1343fab34e3426d54422a1f';

console.log({base_url})

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };
    this.videoSearch('cryptocurrency');
  }
  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {

    return (
     <div>
      <SearchBar onSearchTermChange={this.videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
     </div>
  );
 }
}

// Take this component's generated HTML and put it
// on the page in the DOM

ReactDOM.render(<App />, document.querySelector('.container'))
