1. What is a DOCTYPE?
- DOCTYPE is a declaration, which "informs" the browser what type of document it should expect.
2. How does the web work? (https://github.com/vasanthk/how-web-works)
- When you type in a domain to the browser, during DNS resolving, an address of that specific domain is retrieved.
When the address is retrieved, the browser sends HTTP request to receive a copy of the website and after the "OK" message is received,
the server starts sending small batches of the webpage (this is because many clients would be able to access the webpage at the same time) to your browser.
When all the packages are received to you browser, it starts assembling the webpage and shows it to you. 
3. Do older html files work on newer browsers?
- Yes, most browsers are complient with older versions, although some features might be not working.
4. What are the differences between different DOCTYPES (xHTML, HTML 4.01, HTML5)?
- HTML 4.01 has a loose syntax, which can result in different understanding in different browser. It also does not require close tags in most cases.
- XHTML has more restrictions for tags opening and closing, also netting.
- HTML5 is still under development, but it takes HTML4 as a basis and adds some extra tags, such as geolocation, video and canva.
5. Do all HTML tags come in pairs?
- No, for example: <br/>, <img/>, <hr/>.
6. Why should you use different HTML5 elements in your page? What is semantic HTML? (https://www.internetingishard.com/html-and-css/semantic-html/)
- Because it is easier to search engines, screen readers and other devices to find needed places.
Semantic HTML introduces a webpage meaning, rather than just a presentation of it.
7. Why is SEO important? What ways are there to utilize it?
- SEO helps to increase the quantity and quality of your webpage traffic, as well as brings "organic" users.
The basic ways to utilize it is to approach correct keywords, optimize the navigation in the webpage, increase a loading speed, use SSL, add meta-information, etc.
8. Should you put quotes around attribute values? Why?
- It is recommended to do so, since if the attribute will consists of space, quotation/double quotation marks, <, > or =, it can be recognized as a part of the whole code and not the attribute.
9. How do you insert a text comment in html code?
- <!--My comment is here-->
10. What does CSS stand for?
- Cascading Style Sheet
11. What are style sheets?
- Style sheets describe how the webpage should be formatted. 
12. What is CSS positioning? What are the differences between them?
- It describes how the element should be positioned - sticky (element is positioned based on user's scroll position), static (positioned in a normal webpage flow), relative (can be relatively positioned to top, left, bottom or right), fixed (element stays in one place, even when the page is scrolled down), absolute (element is positioned according to the neariest positioned element (except static)). 
13. What are CSS vendor prefixes? Why are they used?
- It is a way to enable new CSS features, before they are supported in all browsers. They are used in a test phase for browsers to check new properties before their implementation. 
14. What is the range for font-weight value?
- 1-1000
15. Can several selectors with class names be grouped together?
- Yes, few classes of few IDs can be selected at the same time.
16. What is responsive web design and why it’s important today?
- Responsive design adapts to all screen sizes. It's important today, because there are many different devices on which you can access the webpage, as well as their screens are different size.
17. What are different units for CSS size properties?
- It can be absolute (cm, mm, in, px, pt, pc) or relative (em, rem, %, vmin, vmax, etc.)