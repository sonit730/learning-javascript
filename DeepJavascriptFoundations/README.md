# Deep JavaScript Foundations, v3 - Kyle Simpson
[Link Course](https://frontendmasters.com/courses/deep-javascript-v3/)

***

## Closure

## Module Pattern

- This is Namespace, Not a module:

```js
var workshop ={
    teacher:'Kyle',
    ask(question){
        console.log(this.teacher,question);
    },
};

workshop.ask("Is this a module ?");
// Kyle Is this a module ?
```

- Modules enscapsulate data and behavior(methods) together. The state (data) of module is held by its methods via closure.

📝[Ref](./Closure.js)

## Objects

### Implicit & Explicit Binding

- this: implicit binding

```js
var workshop = {
    teacher: "Kyle",
    ask (question) {
        console.log(this.teacher, question);
    },
};

workshop.ask("What is implicit binding?")
// Kyle What is implicit binding?
```

- this: dynamic binding -> sharing

```js
function ask (question) {
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "Kyle",
    ask: ask,
}

var workshop2 = {
    teacher: "Suzy",
    ask: ask,
}

workshop1.ask("How do I share a method ?");
// Kyle How do I share a method ?
```

- this: explicit binding

```js
function ask (question) {
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "Kyle",
}

var workshop2 = {
    teacher: "Suzy",
}

ask.call(workshop1, 'Can I  explicitly set context ?');
// Kyle Can I explicity set context ?

ask.call(workshop2, 'Can I  explicitly set context ?');
// Suzy Can I explicity set context ?
```

- this: hard binding

```js
var workshop = {
    teacher:"Kyle",
    ask(question){
        console.log(this.teacher,question);
    }
}

setTimeout(workshop.ask,10,"Lost this")
//undefinded Lost this?

setTimeout(workshop.ask.bind(workshop),10,"Hard bound this ?");
// Kyle Hard bound this ?
```

### The new Keyword

1. Create a brand new empty object

2. Link that object to another object

3. Call function with ***this*** set to the new object

4. If function does not return an object assume return of ***this***

### Binding Precedence

1. Is the function called by ***new***

2. Is the function called by ***call()*** or ***apply()***?

    Note: ***bind()*** effectively uses ***apply()***

3. Is the function called on a context object?

4. DEFAULT: global object (except strict mode)


