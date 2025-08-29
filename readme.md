#  Question and Answer

## Q-1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

### `Answer:`

There are some methods to find or select elements of a HTML file from a JavaScript file. Among them the popular methods are **getElementById, getElementsByClassName, and querySelector or querySelectorAll**. But some methods are used to find element as uniquely and some methods are used to find elements both uniquely and collectively. For example: <br>
- **`getElementById:`** Basically this method is used to find element just as uniquely by using id name of that element. <br>
  - const element = document.getElementById('id_name')<br>
- **`getElementsByClassName:`** This method is used to find elements as both uniquely and collectively by using class name of elements.<br>
  - const list = document.getElementsByClassName('class_name') <br>
  This way provide the elements as collectively whose have the same class_name. That means here 'list' is a NodeList of the selected elements as like as array/list. So we can access the each single element using 0 based index/serial like list[0], list[1] etc.
  - const list = document.getElementsByClassName('class_name')[index_number] <br>
In this way we can directly find the each single element by using index number.

- **`querySelector/querySelectorAll:`** These are almost same as like as **getElementById** and **getElementsByClassName** respectively. And the main difference is **querySelector** is needed hash operator (#) as prefix to id_name and **querySelectorAll** is needed dot opertor(.) as prefix to class_name. Although **querySelector** finds element uniquely, but class can be used and it provide the first element under that class name. And **querySelectorAll** functionally behaves as same as **getElementsByClassName**. <br>
  - document.querySelector('#id_name')
  - document.querySelectorAll('.class_name')
  - document.querySelectorAll('.class_name')[index_number]

---

## Q-2. How do you **create and insert a new element into the DOM**?

### `Answer:`

step-1: crecte element using tagname <br>
- const newElement = document.createElement('p')

step-2: set the value to the element <br>
- newElement.innerText = "New paragraph is added";
- newElement.innerHTML = `HTML CODE`;

step-3: find the container/mother element <br>
- const container = document.getElementById("container-element-id");

step-4: insert/append the newElement into the container <br>
- container.appendChild(newElement);
- container.insertBefore(newElement,container.firstchild);
- container.insertBefore(newElement,any-specific-element);

---

## Q-3. What is **Event Bubbling** and how does it work?

### `Answer:`

Event bubbling is a mechanism in which an event is propagated from the child element to its parent elements. This means that the event is first captured by the child element, and then propagated up to its parent elements.

When an event is captured by an element, it first executes its own event handler, and then checks if it has any parent elements. If it does, it bubbles the event up to the parent element. The event is then captured by the parent element, and so on, until it reaches the window object.

The event.stopPropagation() method can be used to prevent the event from bubbling up to the parent element


## Q-4. What is **Event Delegation** in JavaScript? Why is it useful?

### `Answer:` 

Event delegation is such a technique in DOM where we use event listener with a perent element and by using it we handle the event of child elements. <br>
That means we don't have needed to use event listener for each child element separately. Here we take the advantage of event bubbling, because bubbling is triggered from child to parent element.

- Lets, we have 100 buttons <br>
  if we put event for each button separately:
  ```
  const allBtn = document.querySelectorAll('.btn');
  for(let btn of allBtn)
  {
    btn.addEventListener('click',()=>{
      console.log('button is clicked');
    });
  }
  ```
  Here event listener used for all buttons seperately which make poor performance and less utilization. <br>
  But if we used the event delegation technique, we just used the event with the parent element. And when button is clicked, event is triggered to parent by bubbling. 

- Event delegation also important for handling dynamic elements. <br>
  Suppose, some buttons are added to a page dynamically using JavaScript. <br>
  Now if we put the event separately for each button which make the code so complex . <br>
  But if we use the event delegation technique, parent listener is also worked properly though new buttons are added.
---

## Q-5. What is the difference between **preventDefault() and stopPropagation()** methods?

### `Answer:` 

- **`preventDefault()`** 
  - Prevents the default browser behavior (i.e. auto load) of an event.
  - Stop form submission, block link navigation, disable right-click, etc.

- **`stopPropagation()`** 
  - Stops the event from bubbling up to parent elements.
  - Prevent parent event handlers from running.


---