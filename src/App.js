import './App.css';

import PostEditor from './components/PostEditor';
import PostPreview from './components/PostPreview';

function App() {
  return (
    <div className="container">
      <PostEditor />
      <PostPreview />
    </div>
  );
}

export default App;
