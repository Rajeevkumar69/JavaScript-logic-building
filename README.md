````md
# JavaScript Array HOF

```js
const users = [
  { name: 'A', age: 24, role: 'admin' },
  { name: 'B', age: 20, role: 'user' },
  { name: 'A', age: 30, role: 'user' }
];
````

## 1. filter():- Returns: Array , many data

**Q. :** “Give me ALL matching items”

```js
const result = users.filter(user => user.name === 'A');
```

## 2. find():- One object OR undefined

**Q. :** “Give me FIRST matching item”

```js
const result = users.find(user => user.name === 'A');
```

---

forEach is NOT for data transformation.
forEach is for SIDE EFFECTS.
forEach → change EXISTING data
map → create NEW data

---

## 3. map():- Array

**Q. :** “Change data, same length”

```js
const result = users.map(user => user.name = 'ChangeName');
```

## 4. forEach():- Nothing

**Q. :** “Just do something, don’t return”

```js
const names = [];
users.forEach(user => {
  names.push(user.name);
});
```

```js
users.forEach(user => {
  user.isActive = true;
});
```

## 5. some():- boolean

**Q. :** “Is there AT LEAST ONE?”

```js
const result = users.some(user => user.age > 25);
```

## 6. every(): boolean

**Q. :** “Are ALL matching?”

```js
const result = users.every(user => user.age > 18);
```

## 7. reduce():- Anything

**Returns:**
**Q. :** “Combine everything into one”

```js
const totalAge = users.reduce((sum, user) => {
  return sum + user.age;
}, 0);
```

## 8. sort():- Array (same one, modified)

**Q. :** “Order the data”

```js
users.sort((a, b) => a.age - b.age);
```

---

## Super Easy Memory Line (Read Daily)

```
filter → many  
find → one  
map → change  
forEach → nothing  
some → any  
every → all  
reduce → combine  
sort → order
```

```
```
