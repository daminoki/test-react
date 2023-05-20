import { useSnackbar } from './hooks/useAlert';

import PostEditor from './features/post/PostEditor';
import PostPreview from './features/post/PostPreview';
import Snackbar from './components/Snackbar';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const { isActive, message, openSnackbar } = useSnackbar();

  const handleSaveBtn = () => {
    openSnackbar("Post saved");
  }

  return (
      <Container fluid style={{padding:'0', overflow:'hidden'}}>
        <Row>
          <Col style={{padding:'0'}}>
            <PostEditor handleSaveBtn={handleSaveBtn} />
          </Col>
          <Col style={{padding:'0'}}>
            <PostPreview />
          </Col>
        </Row>
        <Snackbar isActive={isActive} message={message} />
      </Container>
  );
}

export default App;
