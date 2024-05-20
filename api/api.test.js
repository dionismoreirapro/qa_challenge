const axios = require('axios');
const Ajv = require('ajv');

const ajv = new Ajv();

// Definindo o schema esperado para os usuários
const userSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    username: { type: 'string' },
    email: { type: 'string' },
    address: {
      type: 'object',
      properties: {
        street: { type: 'string' },
        suite: { type: 'string' },
        city: { type: 'string' },
        zipcode: { type: 'string' },
        geo: {
          type: 'object',
          properties: {
            lat: { type: 'string' },
            lng: { type: 'string' },
          },
          required: ['lat', 'lng']
        }
      },
      required: ['street', 'suite', 'city', 'zipcode', 'geo']
    },
    phone: { type: 'string' },
    website: { type: 'string' },
    company: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        catchPhrase: { type: 'string' },
        bs: { type: 'string' },
      },
      required: ['name', 'catchPhrase', 'bs']
    }
  },
  required: ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company']
};

// Função auxiliar para validar schema
function validateSchema(schema, data) {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.error(validate.errors);
  }
  return valid;
}

// Testes
describe('API Tests', () => {
  let userId;

  test('GET /users', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    response.data.forEach(user => {
      expect(validateSchema(userSchema, user)).toBe(true);
    });
  });

  test('POST /users', async () => {
    const newUser = {
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      address: {
        street: '123 Main St',
        suite: 'Apt. 1',
        city: 'Anytown',
        zipcode: '12345',
        geo: {
          lat: '0.0000',
          lng: '0.0000'
        }
      },
      phone: '123-456-7890',
      website: 'johndoe.com',
      company: {
        name: 'Doe Inc.',
        catchPhrase: 'We do it all',
        bs: 'business solutions'
      }
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
    expect(response.status).toBe(201);
    expect(validateSchema(userSchema, response.data)).toBe(true);

    userId = response.data.id;
  });

  test('PUT /users/:id', async () => {
    const updatedUser = {
      name: 'Jane Doe',
      username: 'janedoe',
      email: 'janedoe@example.com',
      address: {
        street: '123 Main St',
        suite: 'Apt. 1',
        city: 'Anytown',
        zipcode: '12345',
        geo: {
          lat: '0.0000',
          lng: '0.0000'
        }
      },
      phone: '123-456-7890',
      website: 'janedoe.com',
      company: {
        name: 'Doe Inc.',
        catchPhrase: 'We do it all',
        bs: 'business solutions'
      }
    };

    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updatedUser);
    expect(response.status).toBe(200);
    expect(validateSchema(userSchema, response.data)).toBe(true);
  });

  test('DELETE /users/:id', async () => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.data).toEqual({});
  });
});
