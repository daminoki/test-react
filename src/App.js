import { useDispatch } from 'react-redux';

import './App.css';

import PostEditor from './components/PostEditor';
import PostPreview from './components/PostPreview';

function App() {
  const dispatch = useDispatch();

  const changeInputTitleField = (e) => {
    dispatch({type: 'INPUT_TITLE_CHANGE', payload: e.target.value})
  }

  const changeInputDescriptionField = (e) => {
      dispatch({type: 'INPUT_DESCRIPTION_CHANGE', payload: e.target.value})
  }

  return (
      <div className="container">
        <PostEditor changeInputTitleField={changeInputTitleField} changeInputDescriptionField={changeInputDescriptionField} />
        <PostPreview />
      </div>
  );
}

export default App;
