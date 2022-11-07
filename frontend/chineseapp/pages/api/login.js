import cookie from 'cookie';
import axios from 'axios';
import config from '../../utils/fetchUrl';

export default function handler(req, res) {
    const access = req['body']['access'];
    const refresh = req['body']['refresh'];

    const dict = {'access':access, 'refresh':refresh};
    res.setHeader('Set-Cookie', [cookie.serialize('access-token', access, {
                                    httpOnly: true,
                                    secure: process.env.NODE_ENV !== 'development',
                                    maxAge: 60 * 60,
                                    sameSite: 'strict',
                                    path: '/',
                                    }),
                                cookie.serialize('refresh-token', refresh, {
                                    httpOnly: true,
                                    secure: process.env.NODE_ENV !== 'development',
                                    maxAge: 60 * 60 * 60,
                                    sameSite: 'strict',
                                    path: '/',
                                    })]
    );
    res.status(200).json({ text: 'Success!'});
  }