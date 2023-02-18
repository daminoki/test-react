import { useSnackbar } from './hooks/useAlert';

import './App.css';

import PostEditor from './components/PostEditor';
import PostPreview from './components/PostPreview';
import Snackbar from './components/Snackbar';

function App() {
  const { isActive, message, openSnackbar } = useSnackbar();

  const handleSaveBtn = () => {
    openSnackbar("Post saved");
  }

  return (
      <div className="container">
        <PostEditor handleSaveBtn={handleSaveBtn} />
        <PostPreview />
        <Snackbar isActive={isActive} message={message} />
      </div>
  );
}

export default App;
