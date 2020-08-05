1. What's the difference between a DOM object "attribute" and a "property"?
   Attributes are used in HTML and properties in DOM objects. Also types are different: attribute is string, not-case sensitive, while properties can be any value and case sensitive.

2. What are advantages and disadvantages using libraries/frameworks in your project?
   Advantages - frameworks and libraries are used for easier, faster and better quality writing/creating web apps or web sites. When using frameworks some serious security issues can be avoided.
   Disadvantages - if you know the language just a little and learn a framework, chances are that you learned only framework and not the language; frameworks and libraries have limitations; code is public, therefore it can be analysed and used for bad intentions.

3. What is a LocalStorage and SessionStorage? How do they differ?
   LocalStorage - shares info in all browser tabs and windows; data remains even after OS reboot.
   SessionStorage - exists only whithin current browser tab; data remains after page refresh, but not after closing and opening again the same page.

4. What is CDN? Why is it useful?
   Content Delivery Network - is a group of servers distributed in different locations. All servers store duplicated information, so that the user can access the one which is closiest, making the service faster despite the traffic.

5. Waiting for all data to load synchronously before being able to act makes UX (user experience) terrible. What are the main technologies for asynchronous data loading?
   Using promises, async functions, callbacks.

6. What does XHR stand for? Why is it useful (or not)?
   XMLHttpRequests - used to interact with servers. It is useful when part update of page is needed.

7. What are the most common HTTP response codes? Which are related to a success and which are related to a failure?
   Class 1 - information, class 2 - success, class 3 - redirection, class 4 - client error, class 5 - server error.

8. What are promises? How do they differ from callbacks?
   Promises are objects representing success or failure of asynchronous tasks. They include callbacks inside themselves. The main difference is that you can check promise status at any time, promises are chainable, while callbacks need to be nested to achieve that. When you're using only callbacks, you need to know the timeline of when what is happening, while promises allow to do it whenever needed.

9. Not all JS code can run on all browsers. What are polyfills? Can you create your own polyfill?
   Polyfills are pieces of code used to perform modern functionalities on browsers which do not support it. Yes, you can create your own polyfill, but many are already created, so it's easier to reuse it.