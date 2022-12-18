import { Button, Card, Container, Grid, Image } from "semantic-ui-react";

const HomePage = ( { tasks }) => { // importamos desde el back las "tasks" en el front como props
  //console.log("Frontend");
  //console.log("tasks");

  if (tasks.length === 0) 
  return (
    <Grid centered verticalAlign="middle" columns="1" styles={{height: "80vh"}}>
      <Grid.Row>
        <Grid.Column textAlign="center">
        <h1>There are no tasks yet</h1>
        <img src="https://icon-library.com/images/no-data-icon/no-data-icon-20.jpg" alt="No tasks yet"/>
        <div>
           <Button primary>Create a Taks</Button>
        </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        { 
          tasks.map(task => (
            <Card key={task._id}>
              <Card.Content>
                <Card.Header>{task.title}</Card.Header>
                <p>{task.description}</p>
              </Card.Content>
              <Card.Content extra>
                <Button primary>View</Button>
                <Button primary>Edit</Button>
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>
    </Container>
  );
};
export default HomePage;

export const getServerSideProps = async (ctx) => {   // funcion para renderizar desde el servidor
  //console.log("Backend");

  const res = await fetch("http://localhost:3000/api/tasks");   // Hacemos fetch a nuestra api
  const tasks = await res.json();
  return {
    props: {
      tasks,   // Estas tareas son las que tenemos en api/tasks
    },
  };
};
