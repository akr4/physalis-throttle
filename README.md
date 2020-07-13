# physalis-throttle

Do tasks by throttling.

## Installation 

Add the following line to the `.npmrc` in your project root.

```
@akr4:registry=https://npm.pkg.github.com/akr4
```

Then, install the package.

```
npm install @akr4/physalis-throttle
```

## Usage

```typescript
import { makeThrottle } from '@akr4/physalis-throttle';

const throttle = makeThrottle(1000);

// push tasks
throttle.push(() => { console.log(1) });
throttle.push(() => { console.log(2) });
throttle.push(() => { console.log(3) });
// >> 3

throttle.push(() => { console.log(1) });
throttle.flush();
// >> 1

throttle.push(() => { console.log(2) });
throttle.flush();
// >> 2

throttle.push(() => { console.log(3) });
// >> 3
```
