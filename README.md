# CORS

A resource makes a cross-origin HTTP request  → when it requests a resource from a different domain than the one which served itself. 

For example, an HTML page served from http://domain-1.com makes an <img> src request for http://domain-2.com/image.jpg. Many pages on the web today load resources like CSS stylesheets, images and scripts from separate domains which is not a problem.
For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts.  For example, XMLHttpRequest follows the same-origin policy. →  So, a web application using XMLHttpRequest could only make HTTP requests to its own domain.On webdevelopers request to browser vendors to allow XMLHttpRequest to make cross-domain requests.


Sample example to demonstrate the Cors Issue

For example, suppose web content on domain http://foo.example → wishes to invoke content on domain → http://bar.other.  Code of this sort might be used within JavaScript deployed on foo.example:
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/public-data/';
   
```js
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}
```


Let us look at what the browser will send the server in this case, and let's see how the server responds:

**Request**
```js
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/access-control/simpleXSInvocation.html
Origin: http://foo.example
```

**Response**
```HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2.0.61 
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml
```
[XML Data]

  Note that the main HTTP request header of note here is the Origin: header, which shows that the invocation is coming from content on the the domain http://foo.example.
HTTP response from the server on domain http://bar.other.  In response, the server sends back an **Access-Control-Allow-Origin: header.**
  The use of the Origin: header and of Access-Control-Allow-Origin: show the access control protocol in its simplest use.  In this case, the server responds with a Access-Control-Allow-Origin: * which means that the resource can be accessed by any domain in a cross-site manner.  If the resource owners at http://bar.other wished to restrict access to the resource to be only from http://foo.example, they would send back:
Access-Control-Allow-Origin: http://foo.example
Note that now, no domain other than http://foo.example (identified by the ORIGIN: header in the request, as in line 10 above) can access the resource(bar.other)  in a cross-site manner.  The Access-Control-Allow-Origin header should contain the value that was sent in the request's Originheader. 
