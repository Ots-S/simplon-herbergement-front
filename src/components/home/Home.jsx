import { Container, Grid } from '@material-ui/core';
import ProjectTable from '../projects/projectTable/ProjectTable';

export default function Home() {
  return (
    <Container>
      <Grid container direction="column" justify="flex-start">
        <ProjectTable />
      </Grid>
    </Container>
  );
}
