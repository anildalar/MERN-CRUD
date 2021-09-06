import AddPost from './AddPost';
import AddPost2 from './AddPost2';
import PostList from './PostList';
import EditPost from './EditPost';
import DeletePost from './DeletePost';

import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  return (
   <Router>
      <Route path="/" exact component={ PostList } />
      <Route path="/savepost" component={ AddPost } />
      <Route path="/savepost2" component={ AddPost2 } />
      <Route path="/editpost/:post_id" component={ EditPost } />
      <Route path="/deletepost/:post_id" component={ DeletePost } />
   </Router>
  );
}

export default App;
