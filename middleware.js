export const config = {
  // Применять middleware ко всем путям
  matcher: '/(.*)',
};

export default function middleware(request) {
  const authorizationHeader = request.headers.get('authorization');

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(' ')[1];
    const [user, password] = atob(basicAuth).split(':');

    // Имя пользователя и пароль берутся из переменных окружения (Environment Variables) в Vercel
    // Если они не заданы в Vercel, используются значения по умолчанию: admin / smm2026
    const expectedUser = process.env.BASIC_AUTH_USER || 'admin';
    const expectedPassword = process.env.BASIC_AUTH_PASSWORD || 'smm2026';

    if (user === expectedUser && password === expectedPassword) {
      // Разрешить запрос, продолжаем загрузку статики
      return new Response(null, {
        headers: {
          'x-middleware-next': '1'
        }
      });
    }
  }

  // Возвращаем заголовок для вызова стандартного окна ввода пароля браузера
  return new Response('Доступ запрещен. Введите логин и пароль.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
