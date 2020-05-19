// interface Client {
//   label: string;
// }

// function printClient(labeledClient: Client){
//   console.log(labeledClient.label);
// }

// const myObj = {name: 'j', label: "name is j"};
// printClient(myObj);

// const Client: Client = {
//   id: '1',
//   first: 'John',
//   last: 'Wick'
// }

// const clients: Client[] = [
//   client,
//   {
//     id: '2',
//     first: 'James',
//     last: 'yamagata'
//   }
// ]

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   completed: boolean;
// }
// interface ProjectState {
//   projects: Project[];
//   currentProject: Project;
// }
// const project: Project = {
//   id: '1',
//   title: 'this is a project'
// }
class Store {
  state: ClientsState;
  reducer;

  constructor(state){
    this.state = state;
    this.reducer = reducer;
  }
  getState(){
    return this.state
  }
  select(key){

  }
}


interface ClientsState {
  clients: client[],
  currentClient: //   
}

const client: Client = {
  id: '1',
  first: 'John',
  last: 'Wick'
}
const clients: Client[] = [
  client,
  {
    id: '2',
    first: 'j',
    last: 'w'
  }
]
const newClient = { id: '', first: '', last: ''};

const initialClientsState: ClientsState = {
  clients,
  currentClient: newClient
}
class Store {
  state: ClientsState;

  constructor(state) {
    this.state = state;
  }
  getState(){
    return this.state;
  }
  select(key){
    return this.state[key];
  }
}
const clientsStore = new Store(initialClientsState);
const currentClient = clientsStore.select('currentClient');

interface Action {
  type: string;
  payload?: any;
}

const loadClients = (state, payload) => {
  return {
    clients: payload,
    currentClient: state.currentClient
  }
}
const selectClient = (state, payload) => {
  return {
    clients: state.clients,
    currentClient: payload
  }
}
const createClient = (state, payload): ClientsState => {
  return {
    clients: [...state.clients, payload],
    currentClient: state.currentClient
  }
}
const updateClient = (state, payload): ClientsState => {
  return {
    clients: state.clients.map(client => {
      return (client.id === payload.id) ? Object.assign({}, client, payload) : client;
    }),
    currentClient: state.currentClient
  }
}
const deleteClient = (state, payload) => {
  return {
    clients: state.clients.filter(client => client.id === payload.id),
    currentClient: state.currentClient
  }
}

const CLIENTS_LOAD = '[CLIENT] Load Clients';
const CLIENTS_SELECT = '[CLIENT] SELECT Clients';
const CLIENTS_CREATE = '[CLIENT] CREATE Clients';
const CLIENTS_UPDATE = '[CLIENT] UPDATE Clients';
const CLIENTS_DELETE = '[CLIENT] DELETE Clients';

const reducer = (state: ClientsState, action: Action): ClientsState => {
  switch(action.type){
    case CLIENTS_LOAD:
      return loadClients(state, action.payload);
    case CLIENTS_SELECT:
      return selectClient(state, action.payload);
    case CLIENTS_CREATE:
      return createClient(state, action.payload);
    case CLIENTS_UPDATE:
      return updateClient(state, action.payload);
    case CLIENTS_DELETE:
      return deleteClient(state, action.payload);
    default: 
      return state; 
  }
}

const loadProject = (state, action) => {
  console.log('loading project');
  return state;
}
const readProject = (state, action) => {
  console.log('read project');
  return state;
}
const createProject = (state, action) => {
  console.log('create project');
  return state;
}
const updateProject = (state, action) => {
  console.log('update Project');
  return state;
}
const deleteProject= (state, action) => {
  console.log('delete prokject');
  return state;
}

const PROJECT_LOAD = '[Project] Load';
const PROJECT_READ = '[PROJECT] Read';
const PROJECT_CREATE = '[Project] CREATE';
const PROJECT_UPDATE = '[Project] UPDATE';
const PROJECT_DELETE = '[Project] DELETE';

const reducerProjects = (state, action) => {
  switch(action.type){
    case PROJECT_LOAD:
      return loadProject(state, action.payload);
    case PROJECT_READ:
      return readProject(state, action.payload);
    case PROJECT_CREATE:
      return createProject(state, action.payload);
    case PROJECT_UPDATE:
      return updateProject(state, action.payload);
    case PROJECT_DELETE:
      return deleteProject(state, action.payload); 
  }
} 

const clientsStore = new Store(initialClientsState, reducer);
const currentClient = clientsStore.select("currentClient");
clientsStore.dispatch({type: CLIENTS_SELECT, payload: johnWick});
const newCurrent = clientsStore.select('currentClient');
const janeSmith = { id: '10', first: 'Jane', last: "Smith"};
clientsStore.dispatch({type: CLIENTS_CREATE, payload: janeSmith});
const updatedClients = clientsStore.select('clients');


const result = reducer(initialClientsState, { type: CLIENTS_SELECT, payload: {}});

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<pre>${JSON.stringify(clientsStore.select('currentClient'), null, 2)}</pre>`;

// const add = (a,b) => a+b;
// const subtract = (a,b) => a-b;
// const multiply = (a,b) => a*b;
// const divide = (a,b) => a/b;

