module.exports = [
  {
    group: {
      prefix: '/auth',
      endpoints: [
        {
          method: 'post',
          path: '/signup',
          handler: 'AuthController.signUp',
          validator: 'AuthValidator.signUp'
        },
        {
          method: 'post',
          path: '/signin',
          handler: 'AuthController.signIn',
          validator: 'AuthValidator.signIn'
        },
        {
          method: 'post',
          path: '/vertification/:token',
          handler: 'AuthController.vertification'
        },
        {
          method: 'get',
          path: '/me',
          handler: 'AuthController.me',
          authenticated: true
        }
      ]
    }
  }
]
