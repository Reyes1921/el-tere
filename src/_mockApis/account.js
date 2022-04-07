import services from 'utils/mockAdapter';

// third-party
import jwt from 'jsonwebtoken';

// project imports
import config from 'config';

// constant
const JWT_SECRET = config.jwt.secret;
const JWT_EXPIRES_TIME = config.jwt.timeout;

const nodeURL = process.env.REACT_APP_STRAPI_URL || null;

const delay = (timeout) => new Promise((res) => setTimeout(res, timeout));

const users = [
    {
        id: '5e86809283e28b96d2d38537',
        email: 'info@pch.com',
        password: '123456'
    },
    {
        id: '5e86809283e28b96d2d38538',
        email: 'admin@pch.com',
        password: '12345678'
    }
];

// ===========================|| MOCK SERVICES ||=========================== //

services.onPost(`${nodeURL}/auth/local`).reply(async (data) => {
    try {
        await delay(500);

        const { email, password } = JSON.parse(request.data);
        const user = users.find((_user) => _user.email == email);

        if (!user) {
            return [400, { message: 'Verifique su correo electrónico y contraseña' }];
        }

        if (user.password !== password) {
            return [400, { message: 'Contraseña inválida' }];
        }

        const serviceToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_TIME });

        return [
            200,
            {
                serviceToken,
                user: {
                    id: user.id,
                    email: user.email
                }
            }
        ];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Server Error' }];
    }
});

services.onGet(`${nodeURL}/auth/local`).reply((request) => {
    try {
        const { Authorization } = request.headers;

        if (!Authorization) {
            return [401, { message: 'Token Missing' }];
        }

        const serviceToken = Authorization.split(' ')[1];
        const { userId } = jwt.verify(serviceToken, JWT_SECRET);
        const user = users.find((_user) => _user.id === userId);

        if (!user) {
            return [401, { message: 'Invalid Token' }];
        }

        return [
            200,
            {
                user: {
                    id: user.id,
                    email: user.email
                }
            }
        ];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});
