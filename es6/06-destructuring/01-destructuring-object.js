let data = {
  name: 'mario',
  surname: 'Rodeghiero',
  age: '30',
  blog: 'https://mariorodeghiero.com/',
  social: {
    twitter: '@rodeghiero_',
    facebook: '/mariorodeghiero'
  }
};

const {
  name,
  surname
} = data;

console.log(name);
console.log(surname);

const {
  facebook,
  twitter
} = data.social;

console.log(facebook);
console.log(twitter);
