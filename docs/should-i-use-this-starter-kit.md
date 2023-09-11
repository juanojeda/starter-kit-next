# Should I use this starter kit?

If you're short on time, jump to the [Limitations](#limitations) section for a TL;DR of why NOT to pick this Starter Kit.

If everything looks good there, this kit might be right for you! Take some time to read through the rest of this document to make sure.

## Purpose of the starter kit

The main purpose of the Everest Engineering Startup Starter Kit is to
> Help startups deliver value ASAP.

Our focus is in three areas:
1. It's made for **startups**
2. It's aimed at keeping you focused on **business value**
3. It's designed to help you **deliver quickly**

If that sounds right up your alley, this could be a good fit for you! Read on to see how this kit might be able to help, as well as some of the decisions we've made and their limitations.

If your focus isn't for startups, or your priorities are in places other than delivering value, and delivering it quickly, you might find yourself opting out of some of your decisions. That's okay, and we've catered for this, however keep in mind that the more customisations you make, the less value you'll get from this kit.

## Objectives & Principles

1. Reduce cognitive load
2. Reduce spin-up time
3. Reduce cost of scaling
4. Reduce cost of context switching

### Reduce cognitive load

#### How are we doing it?
- We've made a lot of technical and design decisions for you, so that you don't have to.
- We pick the "boring path", in the hopes that you and your team are already familiar with the tech, and there are lots of community answers to common issues. The less learning involved, the faster you can deliver value.

#### What does success looks like?
It's easier for you to focus on building the customer's solution instead of choosing between tech frameworks, languages, or service providers.

### Reduce spin-up time

#### How are we doing it?
- Building an end-to-end toolkit that caters to a baseline of startup needs, so hopefully you can build something valuable from week 1.
- We include a low-configuration deployment solution, so you can focus on proving your business value, rather than on implementing infra solutions.

#### What does success look like?
- On week 1, you're delivering meaningful value and insights to your customer
- You are deploying code to a production enviromnent with ease.

### Reduce cost of scaling

#### How are we doing it?
- Making decisions that allow you to move quickly now, but also scale well into the future.
- Making it so that (with very few exceptions) the decisions we've made are easily reversible, and easy to opt out of.

#### What does success look like?
- Reduced friction at the outset, so that you can prove business value from week 1.
- Scaling up with your business' success isn't hampered by our product decisions.
- It's easy for you to opt out of a technical decision if necessary, and replace it with a solution that suits your custom needs.

### Reduce cost of context switching

#### How are we doing it?
- We focus on closing the gap between the developer environment and the production environment.
- We aim to provide sensible configurations and defaults so that all developers have a unified experience, rather than facing "Works On My Machine" issues.

#### What does success look like?
- What you build locally works in production.
- What you're experiencing on your machine will be the same as what your teammate experiences on theirs.

## Tech Stack
Our tech stack is listed below, with links to the reasons behind these decisions.

- React (not optional) - component-driven UI library
- [Next.js](../decision-register/tech-stack/2023-08-16-nextjs.md) (not optional) - React-focused full-stack development framework
- [Typescript](../decision-register/tech-stack/2023-08-16-typescript.md) (strongly recommended) - type-safe programming language
- [Tailwind](../decision-register/tech-stack/2023-08-16-tailwind.md) - Utility-based css framework
- [ShadCN UI](../decision-register/tech-stack/2023-08-23-shadcn-ui.md) - UI component library
- [TRPC](../decision-register/tech-stack/2023-08-16-trpc.md) - type-safe API endpoints and contracts
- [Auth.js](../decision-register/tech-stack/2023-08-16-nextauth.md) (FKA NextAuth) - Authentication library
- [Vercel](../decision-register/tech-stack/2023-08-16-vercel.md) - Low-config deployment platform
- [NPM](../decision-register/tech-stack/2023-08-18-npm.md) - Javascript package manager
- [Eslint](../decision-register/tech-stack/2023-08-16-eslint.md) - configurable rules for code consistency
- [Prettier](../decision-register/tech-stack/2023-08-16-prettier.md) - configurable rules for code formatting
- [Mountebank](../decision-register/tech-stack/2023-08-16-mountebank.md) - dependency mocking library
- [Jest](../decision-register/tech-stack/2023-08-16-jest.md) - Testing framework
- [Husky](../decision-register/tech-stack/2023-08-16-husky.md) - Git hook automation library
- [Github Actions](../decision-register/tech-stack/2023-08-16-github-actions.md) - CI/CD and workflow automation configurations for Github

## Constraints & limitations