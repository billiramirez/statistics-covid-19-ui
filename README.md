# Statistic Information about Covid-19 using a Rapid API

## This UI will consume the endpoints for Covid-19 Status created before.

## Stack for this API

#### Programming Language

- Javascript and [Typescript](https://www.typescriptlang.org/)

#### UI Library and Framework

- [ReactJS](https://reactjs.org/)
- [Nextjs](https://nextjs.org/)

#### UI Design

- [Ant Design](https://ant.design/)

#### Authentication

- [JWT](https://jwt.io/)

#### Deployment

- [Netlify](https://www.netlify.com/)

## Run this Project Locally

1. Clone the repo on your computer, please make sure you have installed Nodejs, Yarn and Git on your machine.

```bash
https://github.com/billiramirez/statistics-covid-19-ui.git
```

2. Install Dependencies

```bash
yarn install
```

3. Create a `.env.local` file in the root of your project, you'll find a `.env.example` that will looks this:

```
API_URL=https://covid-statistics-prod.herokuapp.com/v1
NEXT_PUBLIC_API_URL=https://covid-statistics-prod.herokuapp.com/v1
```

4. Run the Project

```bash
  yarn dev
```

You are able to use the application once you're logged in, so please create an account in the signup page `http://localhost:3000/signup` or if you're logged in: `http://localhost:3000/login`

You can also test this app in production, [in netlify](https://statistics-covid-19-consumer.netlify.app/country)

#### Testing

You can run the tests by running:

```bash
yarn test
```

### Screenshots

#### Login Page

![Login Page](https://res.cloudinary.com/billiramirez/image/upload/v1630656296/Screenshot_at_Sep_03_04-01-08_jz2fne.png)

#### Country Page

![Country Page](https://res.cloudinary.com/billiramirez/image/upload/v1630656296/Screenshot_at_Sep_03_04-03-07_apnwyr.png)

#### Country Detail Page

![Country Detail Page](https://res.cloudinary.com/billiramirez/image/upload/v1630656296/Screenshot_at_Sep_03_04-03-47_y7bnaj.png)

#### Country Add Data

![Country Add Data](https://res.cloudinary.com/billiramirez/image/upload/v1630656296/Screenshot_at_Sep_03_04-04-07_rlsamp.png)

#### Country Search

![Country Search](https://res.cloudinary.com/billiramirez/image/upload/v1630656296/Screenshot_at_Sep_03_04-03-28_sohhhw.png)
