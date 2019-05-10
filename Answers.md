# Answers for Sprint Challenge React Smurfs

1.  Explain the differences between `client-side routing` and `server-side routing`.

- [ ]At it's core server-side routing means our app moves to a different location in our website path which generates a request to the server from the document referenced by that path end point and the server delivers a page holding all the content associated with that page to the browser.  Each time there is a request to the server the whole document is sent to the browser causing it to refresh. Because server-side routing was the norm long, search engines are optimized for pages delivered from a server.
 Client-side routing prevents a request sent to a server on every link click.  Instead, the URL will change but the call is to a component or a change of state in our application that will deliver a different view of the webpage. The call could also be to a server from some data, but unlike server-side routing the call will not initiate the delivery of a full document causing a browser refresh. The delivery of some data will merely cause HTML elements in the app to be generated, updated or deleted. When less data is called and processed routing is faster and transitions and animations are easier.  A major consideration is the full site must be downloaded on the first request. We also lose the benefit of search engine optimization. And yes there will be a need to write extra code to create client-side routes.

2. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
- [] POST = Create
 GET = Read
 PUT = Update
 DELETE = Delete

3. Mention three tools we can use to make AJAX requests
- [] Not sure what this is asking.
 Fetch - browser method, not ubiquitous yet.
 Axios - js library
 JQuery - js library