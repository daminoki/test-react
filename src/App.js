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
        <Row style={{height:'100vh'}}>
          <Col style={{padding:'0', height:'100vh'}}>
            <PostEditor handleSaveBtn={handleSaveBtn} />
          </Col>
          <Col style={{padding:'0', height:'100vh'}}>
            <PostPreview />
          </Col>
        </Row>
        <Snackbar isActive={isActive} message={message} />
      </Container>
  );
}

export default App;
