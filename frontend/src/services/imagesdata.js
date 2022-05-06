const API_HOST = 'http://localhost:8000/api';
let _csrfToken = null;

async function generateForm(data) {
  const formData = new FormData();
  for(const name in data) {
      formData.append(name, data[name]);
  }
  return formData
}

async function getCsrfToken() {
  if (_csrfToken === null) {
    const response = await fetch(`${API_HOST}/csrf`, {
      credentials: 'include',
    });
    const data = await response.json();
    _csrfToken = data.csrfToken;
  }
  return _csrfToken;
}


export async function upload(data) {

    let formData = await generateForm(data)

    
    const response = await fetch(`${API_HOST}/upload`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'X-CSRFToken': await getCsrfToken()
        },
        body: formData
    });
    const r = await response.json();
    return response.ok;
}

export async function list(data) {

  const response = await fetch(`${API_HOST}/list`, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
  });
  const r = await response.json();
  return r;
}