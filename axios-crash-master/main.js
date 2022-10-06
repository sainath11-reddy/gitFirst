// GET REQUEST
async function getTodos() {
  //return a promise
  // let res = await axios({
  //   method:"get",
  //   url:"https://jsonplaceholder.typicode.com/todos",
  //   params:{
  //     _limit:5
  //   }
  // });
  // showOutput(res);

  // An Easier way to for aget request
  let res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5",{timeout:5000});
  showOutput(res);
}

// POST REQUEST
async function addTodo() {
  // let res = await axios({
  //   method:"post",
  //   url:"https://jsonplaceholder.typicode.com/todos",
  //   data:{
  //     title:"My first Post Req",
  //     completed:true
  //   }
  // });
  // showOutput(res);
  // // Easier way to write a post method
  let res = await axios.post("https://jsonplaceholder.typicode.com/todos",{title:"My first Post Req",completed:false});
  showOutput(res);
}

// PUT/PATCH REQUEST
async function  updateTodo() {
  // Put completely replaces the data
  // let res = await axios.put("https://jsonplaceholder.typicode.com/todos/1",{title:"My first Put Req",completed:true});
  //Patch attaches or patches to the data
  let res = await axios.patch("https://jsonplaceholder.typicode.com/todos/1",{title:"My first Put Req",completed:true});

  showOutput(res);

}

// DELETE REQUEST
async function removeTodo() {
  try{
    let res = await axios.delete("https://jsonplaceholder.typicode.com/todos/1");
    showOutput(res);
  }catch(e){
    console.log(e);
  }
}

// SIMULTANEOUS DATA
async function getData() {
  //  let arr = await axios.all([axios.get("https://jsonplaceholder.typicode.com/todos"), 
  //                             axios.get("https://jsonplaceholder.typicode.com/posts")]);
  // console.log(arr[0]);
  // console.log(arr[1]);
  // showOutput(arr[1]); //Better way to name variables 
  axios.all([axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"), 
            axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")])
            .then(axios.spread((todos, posts)=>showOutput(posts)));
}

// CUSTOM HEADERS
async function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  };

  const res= await axios
  .post(
    'https://jsonplaceholder.typicode.com/todos',
    {
      title: 'New Todo',
      completed: false
    },
    config
  )
  showOutput(res)
}


// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };

  axios(options).then(res => showOutput(res));
}


// ERROR HANDLING
function errorHandling() {
  axios
    .get('https://jsonplaceholder.typicode.com/todoss', {
      // validateStatus: function(status) {
      //   return status < 500; // Reject only if status is greater or equal to 500
      // }
    })
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert('Error: Page Not Found');
        }
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    });

  if (true) {
    source.cancel('Request canceled!');
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config=>{
  console.log(`${config.method} request sent to ${config.url} at ${new Date()}`);
  return config;
}, error =>{
  return Promise.reject(error);
})

// AXIOS INSTANCES
const axiosInstance = axios.create({
  // Other custom settings
  baseURL: 'https://jsonplaceholder.typicode.com'
});
// axiosInstance.get('/comments').then(res => showOutput(res));
// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
