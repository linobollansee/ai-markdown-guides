# HTTP Technology: A Comprehensive Guide

## Table of Contents

1. [Introduction](#introduction)
2. [What is HTTP?](#what-is-http)
3. [History and Evolution](#history-and-evolution)
4. [HTTP Fundamentals](#http-fundamentals)
5. [HTTP Architecture](#http-architecture)
6. [HTTP Request Methods](#http-request-methods)
7. [HTTP Status Codes](#http-status-codes)
8. [HTTP Headers](#http-headers)
9. [HTTP Messages](#http-messages)
10. [HTTP Connections](#http-connections)
11. [HTTP Caching](#http-caching)
12. [HTTP Cookies](#http-cookies)
13. [HTTP Authentication](#http-authentication)
14. [HTTPS and Security](#https-and-security)
15. [HTTP/2 and HTTP/3](#http2-and-http3)
16. [REST and HTTP](#rest-and-http)
17. [Common HTTP Scenarios](#common-http-scenarios)
18. [Best Practices](#best-practices)

---

## Introduction

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. Understanding HTTP is essential for anyone working with web technologies, APIs, or network communications.

---

## What is HTTP?

**HTTP** is an application-layer protocol designed for distributed, collaborative, hypermedia information systems. It is the protocol used to transfer hypertext requests and information between servers and browsers.

### Key Characteristics:

- **Stateless**: Each request is independent; the server doesn't retain information about previous requests
- **Client-Server Model**: Communication occurs between a client (usually a web browser) and a server
- **Request-Response Protocol**: Client sends a request, server sends back a response
- **Text-Based**: HTTP messages are human-readable (though binary data can be transmitted)
- **Extensible**: New headers and methods can be added
- **Application Layer**: Operates at Layer 7 of the OSI model

---

## History and Evolution

### HTTP/0.9 (1991)

- The original version, extremely simple
- Only supported GET method
- No headers, status codes, or error handling
- Single-line protocol

```
GET /index.html
```

### HTTP/1.0 (1996)

- RFC 1945
- Added request methods: HEAD, POST
- Introduced HTTP headers
- Added status codes
- Supported different content types (not just HTML)
- Each request required a new TCP connection

### HTTP/1.1 (1997)

- RFC 2068, later refined in RFC 2616 (1999) and RFC 7230-7235 (2014)
- Persistent connections (keep-alive)
- Pipelining support
- Chunked transfer encoding
- Additional methods: PUT, DELETE, TRACE, OPTIONS, CONNECT
- Host header (required)
- Better caching mechanisms

### HTTP/2 (2015)

- RFC 7540
- Binary protocol instead of textual
- Multiplexing (multiple requests over single connection)
- Header compression (HPACK)
- Server push capability
- Stream prioritization

### HTTP/3 (2022)

- RFC 9114
- Uses QUIC instead of TCP
- Built on UDP
- Improved performance and security
- Better handling of packet loss
- Reduced latency

---

## HTTP Fundamentals

### URL Structure

A complete HTTP URL consists of:

```
scheme://host:port/path?query#fragment
```

**Example:**

```
https://www.example.com:443/products/search?q=laptop&sort=price#results
```

- **scheme**: `https` (protocol)
- **host**: `www.example.com` (domain name)
- **port**: `443` (default for HTTPS)
- **path**: `/products/search`
- **query**: `?q=laptop&sort=price`
- **fragment**: `#results` (client-side only, not sent to server)

### DNS Resolution

Before HTTP communication:

1. Browser checks cache for IP address
2. If not found, queries DNS server
3. DNS returns IP address
4. Browser establishes TCP connection

### TCP Three-Way Handshake

HTTP (over TCP) requires connection establishment:

1. **SYN**: Client sends synchronization packet
2. **SYN-ACK**: Server acknowledges and sends its own SYN
3. **ACK**: Client acknowledges server's SYN

---

## HTTP Architecture

### Client-Server Model

```
┌──────────┐         HTTP Request          ┌──────────┐
│          │ ──────────────────────────▶   │          │
│  Client  │                                │  Server  │
│          │ ◀──────────────────────────   │          │
└──────────┘         HTTP Response         └──────────┘
```

### Components

**Client (User Agent)**

- Web browsers (Chrome, Firefox, Safari)
- Mobile apps
- Command-line tools (curl, wget)
- API clients

**Server**

- Apache HTTP Server
- Nginx
- Microsoft IIS
- Node.js servers
- Application servers (Tomcat, Jetty)

**Proxies**

- Forward proxies (client-side)
- Reverse proxies (server-side)
- Load balancers
- Caching servers
- Security gateways

---

## HTTP Request Methods

HTTP defines several request methods, each with a specific purpose:

### GET

- **Purpose**: Retrieve data from server
- **Safe**: Yes (doesn't modify server state)
- **Idempotent**: Yes (multiple identical requests have same effect)
- **Cacheable**: Yes
- **Body**: Should not contain request body

```http
GET /api/users/123 HTTP/1.1
Host: example.com
```

### POST

- **Purpose**: Submit data to server, create resources
- **Safe**: No
- **Idempotent**: No
- **Cacheable**: Only if explicitly specified
- **Body**: Yes

```http
POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 47

{"name": "John Doe", "email": "john@example.com"}
```

### PUT

- **Purpose**: Update or create resource at specific URI
- **Safe**: No
- **Idempotent**: Yes
- **Cacheable**: No
- **Body**: Yes

```http
PUT /api/users/123 HTTP/1.1
Host: example.com
Content-Type: application/json

{"name": "John Doe", "email": "john@example.com"}
```

### DELETE

- **Purpose**: Remove resource
- **Safe**: No
- **Idempotent**: Yes
- **Cacheable**: No
- **Body**: May have body

```http
DELETE /api/users/123 HTTP/1.1
Host: example.com
```

### PATCH

- **Purpose**: Partial modification of resource
- **Safe**: No
- **Idempotent**: No (generally)
- **Cacheable**: No
- **Body**: Yes

```http
PATCH /api/users/123 HTTP/1.1
Host: example.com
Content-Type: application/json

{"email": "newemail@example.com"}
```

### HEAD

- **Purpose**: Same as GET but only returns headers
- **Safe**: Yes
- **Idempotent**: Yes
- **Cacheable**: Yes
- **Body**: No response body

```http
HEAD /api/users/123 HTTP/1.1
Host: example.com
```

### OPTIONS

- **Purpose**: Describe communication options for target resource
- **Safe**: Yes
- **Idempotent**: Yes
- **Cacheable**: No
- **Body**: No

```http
OPTIONS /api/users HTTP/1.1
Host: example.com
```

Response might include:

```http
HTTP/1.1 200 OK
Allow: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
```

### CONNECT

- **Purpose**: Establish tunnel to server (typically for HTTPS through proxy)
- **Safe**: No
- **Idempotent**: No
- **Body**: No

### TRACE

- **Purpose**: Perform message loop-back test (debugging)
- **Safe**: Yes
- **Idempotent**: Yes
- **Often disabled for security reasons**

---

## HTTP Status Codes

Status codes indicate the result of the HTTP request.

### Format

```
HTTP/1.1 [Status-Code] [Reason-Phrase]
```

### 1xx Informational

Request received, continuing process

- **100 Continue**: Server received request headers, client should send body
- **101 Switching Protocols**: Server switching protocols as requested
- **102 Processing**: Server received and processing request (WebDAV)
- **103 Early Hints**: Hints about resources to preload

### 2xx Success

Request successfully received, understood, and accepted

- **200 OK**: Standard successful response
- **201 Created**: Resource successfully created
- **202 Accepted**: Request accepted but not yet processed
- **203 Non-Authoritative Information**: Successful but modified by proxy
- **204 No Content**: Success but no content to return
- **205 Reset Content**: Client should reset document view
- **206 Partial Content**: Partial GET request successful
- **207 Multi-Status**: Multiple status codes (WebDAV)
- **208 Already Reported**: Members already enumerated (WebDAV)
- **226 IM Used**: Instance manipulations applied

### 3xx Redirection

Further action needed to complete request

- **300 Multiple Choices**: Multiple possible responses
- **301 Moved Permanently**: Resource permanently moved to new URL
- **302 Found**: Resource temporarily at different URL
- **303 See Other**: Response found at different URL using GET
- **304 Not Modified**: Cached version is still valid
- **305 Use Proxy**: Must access through proxy (deprecated)
- **307 Temporary Redirect**: Like 302 but method must not change
- **308 Permanent Redirect**: Like 301 but method must not change

### 4xx Client Errors

Request contains bad syntax or cannot be fulfilled

- **400 Bad Request**: Server cannot process due to client error
- **401 Unauthorized**: Authentication required
- **402 Payment Required**: Reserved for future use
- **403 Forbidden**: Server refuses to authorize request
- **404 Not Found**: Resource not found
- **405 Method Not Allowed**: Method not supported for resource
- **406 Not Acceptable**: Cannot produce response matching Accept headers
- **407 Proxy Authentication Required**: Authentication with proxy needed
- **408 Request Timeout**: Server timed out waiting for request
- **409 Conflict**: Request conflicts with current server state
- **410 Gone**: Resource permanently deleted
- **411 Length Required**: Content-Length header required
- **412 Precondition Failed**: Precondition in headers evaluated to false
- **413 Payload Too Large**: Request entity too large
- **414 URI Too Long**: URI too long for server to process
- **415 Unsupported Media Type**: Media type not supported
- **416 Range Not Satisfiable**: Range header cannot be satisfied
- **417 Expectation Failed**: Expect header cannot be met
- **418 I'm a teapot**: April Fools' joke (RFC 2324)
- **421 Misdirected Request**: Request directed at wrong server
- **422 Unprocessable Entity**: Well-formed but semantic errors
- **423 Locked**: Resource locked (WebDAV)
- **424 Failed Dependency**: Failed due to previous request (WebDAV)
- **425 Too Early**: Risk of replay attack
- **426 Upgrade Required**: Client should upgrade to different protocol
- **428 Precondition Required**: Request must be conditional
- **429 Too Many Requests**: Rate limiting exceeded
- **431 Request Header Fields Too Large**: Headers too large
- **451 Unavailable For Legal Reasons**: Censored for legal reasons

### 5xx Server Errors

Server failed to fulfill valid request

- **500 Internal Server Error**: Generic server error
- **501 Not Implemented**: Method not supported
- **502 Bad Gateway**: Invalid response from upstream server
- **503 Service Unavailable**: Server temporarily unavailable
- **504 Gateway Timeout**: Upstream server timeout
- **505 HTTP Version Not Supported**: HTTP version not supported
- **506 Variant Also Negotiates**: Configuration error
- **507 Insufficient Storage**: Cannot store representation (WebDAV)
- **508 Loop Detected**: Infinite loop detected (WebDAV)
- **510 Not Extended**: Extensions required
- **511 Network Authentication Required**: Authentication required for network

---

## HTTP Headers

Headers provide additional information about the request or response.

### General Headers

Used in both requests and responses

```http
Cache-Control: no-cache
Connection: keep-alive
Date: Wed, 30 Oct 2025 12:00:00 GMT
Transfer-Encoding: chunked
Upgrade: HTTP/2.0
Via: 1.1 proxy.example.com
Warning: 199 Miscellaneous warning
```

### Request Headers

Sent by client

**Host** (Required in HTTP/1.1)

```http
Host: www.example.com
```

**User-Agent**

```http
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0.0.0
```

**Accept**

```http
Accept: text/html, application/json
Accept-Charset: utf-8
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US, en;q=0.9
```

**Authorization**

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

**Referer**

```http
Referer: https://www.google.com/search?q=example
```

**Cookie**

```http
Cookie: session_id=abc123; user_pref=dark_mode
```

**If-Modified-Since** (Conditional request)

```http
If-Modified-Since: Wed, 25 Oct 2025 12:00:00 GMT
```

**If-None-Match** (Conditional request)

```http
If-None-Match: "686897696a7c876b7e"
```

**Range** (Partial content)

```http
Range: bytes=0-1023
```

**Origin** (CORS)

```http
Origin: https://www.example.com
```

### Response Headers

Sent by server

**Server**

```http
Server: nginx/1.20.1
```

**Content-Type**

```http
Content-Type: text/html; charset=UTF-8
Content-Type: application/json
Content-Type: image/png
```

**Content-Length**

```http
Content-Length: 1234
```

**Content-Encoding**

```http
Content-Encoding: gzip
```

**Content-Language**

```http
Content-Language: en-US
```

**Set-Cookie**

```http
Set-Cookie: session_id=abc123; Path=/; HttpOnly; Secure; SameSite=Strict
```

**Location** (Redirects)

```http
Location: https://www.example.com/new-page
```

**Last-Modified**

```http
Last-Modified: Wed, 25 Oct 2025 12:00:00 GMT
```

**ETag** (Entity tag for caching)

```http
ETag: "686897696a7c876b7e"
```

**Expires**

```http
Expires: Thu, 31 Oct 2025 12:00:00 GMT
```

**Access-Control-Allow-Origin** (CORS)

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```

**Strict-Transport-Security** (HSTS)

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

**X-Content-Type-Options**

```http
X-Content-Type-Options: nosniff
```

**X-Frame-Options**

```http
X-Frame-Options: DENY
```

**Content-Security-Policy**

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
```

---

## HTTP Messages

### Request Message Structure

```http
[Method] [Request-URI] [HTTP-Version]
[Header-Field-Name]: [Header-Field-Value]
[Header-Field-Name]: [Header-Field-Value]
...

[Message Body]
```

**Example:**

```http
POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Content-Length: 47
User-Agent: MyApp/1.0
Accept: application/json

{"name": "John Doe", "email": "john@example.com"}
```

### Response Message Structure

```http
[HTTP-Version] [Status-Code] [Reason-Phrase]
[Header-Field-Name]: [Header-Field-Value]
[Header-Field-Name]: [Header-Field-Value]
...

[Message Body]
```

**Example:**

```http
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 65
Location: /api/users/123
Date: Wed, 30 Oct 2025 12:00:00 GMT

{"id": 123, "name": "John Doe", "email": "john@example.com"}
```

### Message Body

The body contains the payload data:

**Form Data:**

```http
POST /login HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Content-Length: 29

username=john&password=secret
```

**JSON Data:**

```http
POST /api/products HTTP/1.1
Content-Type: application/json

{
  "name": "Laptop",
  "price": 999.99,
  "category": "Electronics"
}
```

**Multipart Form Data (File Upload):**

```http
POST /upload HTTP/1.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="document.pdf"
Content-Type: application/pdf

[Binary file content]
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

---

## HTTP Connections

### HTTP/1.0 - New Connection Per Request

```
Request 1:  [TCP Connect] ─── [Request] ─── [Response] ─── [TCP Close]
Request 2:  [TCP Connect] ─── [Request] ─── [Response] ─── [TCP Close]
Request 3:  [TCP Connect] ─── [Request] ─── [Response] ─── [TCP Close]
```

**Problem:** High overhead due to TCP handshake for each request

### HTTP/1.1 - Persistent Connections (Keep-Alive)

```
[TCP Connect] ─── [Request 1] ─── [Response 1] ─── [Request 2] ─── [Response 2] ─── [Request 3] ─── [Response 3] ─── [TCP Close]
```

**Header:**

```http
Connection: keep-alive
Keep-Alive: timeout=5, max=100
```

**Benefits:**

- Reduced latency (no repeated handshakes)
- Reduced CPU usage
- Better network throughput

### HTTP/1.1 - Pipelining

```
Client sends:  [Request 1] [Request 2] [Request 3]
Server sends:  [Response 1] [Response 2] [Response 3]
```

**Issues:**

- Head-of-line blocking
- Difficult to implement correctly
- Limited browser support

### HTTP/2 - Multiplexing

```
Single TCP Connection:
  ├── Stream 1: [Request/Response for resource1]
  ├── Stream 2: [Request/Response for resource2]
  ├── Stream 3: [Request/Response for resource3]
  └── Stream 4: [Request/Response for resource4]
```

**Benefits:**

- Multiple concurrent exchanges
- No head-of-line blocking (at HTTP layer)
- Single connection reduces overhead

### HTTP/3 - QUIC

```
UDP-based QUIC connection:
  ├── Stream 1: Independent packet stream
  ├── Stream 2: Independent packet stream
  └── Stream 3: Independent packet stream
```

**Benefits:**

- No head-of-line blocking at transport layer
- Faster connection establishment
- Better handling of packet loss
- Connection migration (change networks without reconnecting)

---

## HTTP Caching

Caching improves performance by storing and reusing previously fetched resources.

### Cache Locations

1. **Browser Cache**: Local storage in user's browser
2. **Proxy Cache**: Shared cache on network
3. **Gateway Cache**: Server-side cache (reverse proxy)
4. **CDN Cache**: Content Delivery Network edge servers

### Cache-Control Directives

**Response Directives:**

```http
Cache-Control: public
Cache-Control: private
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: max-age=3600
Cache-Control: s-maxage=7200
Cache-Control: must-revalidate
Cache-Control: proxy-revalidate
Cache-Control: immutable
```

**Request Directives:**

```http
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: max-age=0
Cache-Control: max-stale=3600
Cache-Control: min-fresh=600
Cache-Control: only-if-cached
```

**Examples:**

Cache for 1 hour:

```http
Cache-Control: public, max-age=3600
```

Don't cache at all:

```http
Cache-Control: no-store
```

Cache but revalidate before use:

```http
Cache-Control: no-cache
```

Cache forever (immutable):

```http
Cache-Control: public, max-age=31536000, immutable
```

### Validation

**ETag (Entity Tag):**

```http
Response:
ETag: "686897696a7c876b7e"

Subsequent Request:
If-None-Match: "686897696a7c876b7e"

Response (if unchanged):
HTTP/1.1 304 Not Modified
```

**Last-Modified:**

```http
Response:
Last-Modified: Wed, 25 Oct 2025 12:00:00 GMT

Subsequent Request:
If-Modified-Since: Wed, 25 Oct 2025 12:00:00 GMT

Response (if unchanged):
HTTP/1.1 304 Not Modified
```

### Expires Header

Legacy caching mechanism:

```http
Expires: Thu, 31 Oct 2025 12:00:00 GMT
```

**Note:** `Cache-Control: max-age` takes precedence over `Expires`

### Caching Strategies

**1. Never Cache (Dynamic Content)**

```http
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
Expires: 0
```

**2. Revalidate Each Time**

```http
Cache-Control: no-cache, must-revalidate
```

**3. Cache for Short Time**

```http
Cache-Control: public, max-age=300
```

**4. Cache for Long Time (Versioned Assets)**

```http
Cache-Control: public, max-age=31536000, immutable
```

Example: `app.abc123.js` (hash in filename)

---

## HTTP Cookies

Cookies enable stateful sessions over stateless HTTP.

### Set-Cookie Header

```http
Set-Cookie: name=value; Domain=example.com; Path=/; Expires=Wed, 30 Oct 2026 12:00:00 GMT; Secure; HttpOnly; SameSite=Strict
```

### Cookie Attributes

**Domain**

```http
Set-Cookie: user=john; Domain=example.com
```

- Accessible to specified domain and subdomains

**Path**

```http
Set-Cookie: user=john; Path=/account
```

- Accessible to specified path and subdirectories

**Expires**

```http
Set-Cookie: user=john; Expires=Wed, 30 Oct 2026 12:00:00 GMT
```

- Absolute expiration date

**Max-Age**

```http
Set-Cookie: user=john; Max-Age=3600
```

- Relative expiration in seconds
- Takes precedence over Expires

**Secure**

```http
Set-Cookie: user=john; Secure
```

- Only sent over HTTPS

**HttpOnly**

```http
Set-Cookie: session=abc123; HttpOnly
```

- Not accessible via JavaScript (prevents XSS)

**SameSite**

```http
Set-Cookie: user=john; SameSite=Strict
Set-Cookie: user=john; SameSite=Lax
Set-Cookie: user=john; SameSite=None; Secure
```

- **Strict**: Only sent for same-site requests
- **Lax**: Sent for top-level navigation (default)
- **None**: Sent for all requests (requires Secure)

### Cookie Usage

**Setting:**

```http
HTTP/1.1 200 OK
Set-Cookie: session_id=abc123; Path=/; HttpOnly; Secure
Set-Cookie: user_pref=dark_mode; Path=/; Max-Age=2592000
```

**Sending:**

```http
GET /dashboard HTTP/1.1
Host: example.com
Cookie: session_id=abc123; user_pref=dark_mode
```

### Common Cookie Types

1. **Session Cookies**: Temporary, deleted when browser closes
2. **Persistent Cookies**: Stored until expiration date
3. **Authentication Cookies**: Store session tokens
4. **Tracking Cookies**: Track user behavior (privacy concerns)
5. **First-Party Cookies**: Set by visited domain
6. **Third-Party Cookies**: Set by different domain (often blocked)

---

## HTTP Authentication

### Basic Authentication

**Scheme:** Base64-encoded credentials

```http
Request:
GET /protected HTTP/1.1
Host: example.com

Response (if not authenticated):
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="User Area"

Request (with credentials):
GET /protected HTTP/1.1
Host: example.com
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

**Encoding:**

```
Base64("username:password") = "dXNlcm5hbWU6cGFzc3dvcmQ="
```

**Security:** Not secure without HTTPS (credentials easily decoded)

### Digest Authentication

**Scheme:** Challenge-response using MD5 hash

```http
Response:
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Digest realm="User Area",
                  qop="auth",
                  nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",
                  opaque="5ccc069c403ebaf9f0171e9517f40e41"

Request:
Authorization: Digest username="user",
               realm="User Area",
               nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",
               uri="/protected",
               response="6629fae49393a05397450978507c4ef1",
               opaque="5ccc069c403ebaf9f0171e9517f40e41"
```

**Security:** Better than Basic but still vulnerable

### Bearer Token (OAuth 2.0, JWT)

**Most common modern approach:**

```http
Request:
GET /api/user HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Response (if invalid):
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer realm="example"
```

**JWT (JSON Web Token) Structure:**

```
header.payload.signature

Example:
eyJhbGci...  .  eyJzdWIi...  .  SflKxwRJ...
  (Header)       (Payload)       (Signature)
```

### API Key Authentication

```http
GET /api/data HTTP/1.1
Host: api.example.com
X-API-Key: your-api-key-here
```

Or in query parameter:

```
GET /api/data?api_key=your-api-key-here HTTP/1.1
```

---

## HTTPS and Security

### What is HTTPS?

**HTTPS** = HTTP + TLS/SSL

- Encrypts data in transit
- Authenticates server identity
- Ensures data integrity

### TLS/SSL Handshake

```
1. Client Hello
   ├── Supported cipher suites
   ├── TLS version
   └── Random number

2. Server Hello
   ├── Selected cipher suite
   ├── TLS version
   ├── Random number
   └── Server certificate

3. Certificate Verification
   └── Client validates certificate chain

4. Key Exchange
   ├── Client generates pre-master secret
   └── Encrypts with server's public key

5. Session Keys Generated
   └── Both derive symmetric keys from pre-master secret

6. Encrypted Communication Begins
```

### Port Numbers

- **HTTP**: Port 80 (default)
- **HTTPS**: Port 443 (default)

### Certificates

**SSL/TLS Certificate contains:**

- Domain name
- Organization details
- Public key
- Expiration date
- Issuer (Certificate Authority)
- Digital signature

**Certificate Authorities (CAs):**

- Let's Encrypt (free)
- DigiCert
- GlobalSign
- Comodo

### Security Headers

**Strict-Transport-Security (HSTS)**

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

Forces HTTPS for specified duration

**Content-Security-Policy (CSP)**

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.example.com
```

Controls resource loading to prevent XSS

**X-Frame-Options**

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

Prevents clickjacking

**X-Content-Type-Options**

```http
X-Content-Type-Options: nosniff
```

Prevents MIME type sniffing

**Referrer-Policy**

```http
Referrer-Policy: no-referrer-when-downgrade
```

Controls referrer information

**Permissions-Policy**

```http
Permissions-Policy: geolocation=(), microphone=()
```

Controls browser features

### Common Security Threats

1. **Man-in-the-Middle (MITM)**: Intercepting communications
2. **SSL Stripping**: Downgrading HTTPS to HTTP
3. **Certificate Spoofing**: Fake certificates
4. **XSS (Cross-Site Scripting)**: Injecting malicious scripts
5. **CSRF (Cross-Site Request Forgery)**: Unauthorized requests
6. **SQL Injection**: Database attacks via HTTP parameters
7. **DDoS**: Overwhelming server with requests

---

## HTTP/2 and HTTP/3

### HTTP/2 Features

**Binary Framing Layer**

- Binary instead of textual protocol
- More efficient parsing
- Less error-prone

**Multiplexing**

```
Single TCP Connection:
┌─────────────────────────────────┐
│ Stream 1: HTML                  │
│ Stream 2: CSS                   │
│ Stream 3: JavaScript            │
│ Stream 4: Image 1               │
│ Stream 5: Image 2               │
└─────────────────────────────────┘
```

**Server Push**

```
Client requests: /index.html

Server pushes:
  ├── /style.css
  ├── /script.js
  └── /logo.png
```

**Header Compression (HPACK)**

- Reduces overhead
- Maintains header table
- Encodes repeated headers efficiently

**Stream Prioritization**

```http
GET /critical.css HTTP/2
Priority: weight=256, exclusive

GET /image.jpg HTTP/2
Priority: weight=128
```

**HTTP/2 Upgrade**

```http
Request:
GET / HTTP/1.1
Host: example.com
Connection: Upgrade, HTTP2-Settings
Upgrade: h2c
HTTP2-Settings: <base64-encoded-settings>

Response:
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: h2c
```

### HTTP/3 Features

**QUIC Protocol**

- Built on UDP (not TCP)
- Reduces connection establishment time
- 0-RTT connection resumption

**No Head-of-Line Blocking**

```
TCP (HTTP/2):
[Packet 1 Lost] ─X─ → Blocks all streams

QUIC (HTTP/3):
[Stream 1: Packet Lost] ─X─ → Only Stream 1 blocked
[Stream 2: OK] ─✓─
[Stream 3: OK] ─✓─
```

**Connection Migration**

- Maintain connection when switching networks
- Important for mobile devices

**Improved Loss Recovery**

- Independent stream recovery
- Better congestion control

**Built-in Encryption**

- TLS 1.3 integrated into QUIC
- Always encrypted

### Version Negotiation

**Client checks for HTTP/3 support:**

```http
Alt-Svc: h3=":443"; ma=2592000
```

**Browser attempts HTTP/3 on subsequent visits**

---

## REST and HTTP

### RESTful Principles

**REST** (Representational State Transfer) architectural style uses HTTP:

1. **Client-Server Architecture**
2. **Stateless**: Each request contains all needed information
3. **Cacheable**: Responses must define cacheability
4. **Uniform Interface**: Consistent resource identification
5. **Layered System**: Client doesn't know if connected to end server
6. **Code on Demand** (optional): Server can send executable code

### Resource-Based URLs

```
Good (Resource-oriented):
GET    /api/users           - Get all users
GET    /api/users/123       - Get user 123
POST   /api/users           - Create new user
PUT    /api/users/123       - Update user 123
PATCH  /api/users/123       - Partially update user 123
DELETE /api/users/123       - Delete user 123

Bad (Action-oriented):
GET    /api/getUsers
POST   /api/createUser
POST   /api/updateUser
POST   /api/deleteUser
```

### Nested Resources

```
GET    /api/users/123/posts           - Get posts by user 123
POST   /api/users/123/posts           - Create post for user 123
GET    /api/users/123/posts/456       - Get post 456 by user 123
DELETE /api/users/123/posts/456       - Delete post 456
```

### Query Parameters

```
GET /api/users?page=2&limit=20&sort=name&order=asc
GET /api/products?category=electronics&price_min=100&price_max=500
GET /api/search?q=laptop&filter=in_stock
```

### HATEOAS

**Hypermedia as the Engine of Application State**

```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "_links": {
    "self": { "href": "/api/users/123" },
    "posts": { "href": "/api/users/123/posts" },
    "friends": { "href": "/api/users/123/friends" }
  }
}
```

### Content Negotiation

**Request:**

```http
GET /api/users/123 HTTP/1.1
Accept: application/json
Accept-Language: en-US
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Language: en-US

{"id": 123, "name": "John Doe"}
```

**Multiple formats:**

```http
Accept: application/json, application/xml;q=0.9, */*;q=0.8
```

---

## Common HTTP Scenarios

### File Upload

**Single File:**

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary

------WebKitFormBoundary
Content-Disposition: form-data; name="file"; filename="document.pdf"
Content-Type: application/pdf

[Binary content]
------WebKitFormBoundary--
```

**With Additional Fields:**

```http
------WebKitFormBoundary
Content-Disposition: form-data; name="title"

My Document
------WebKitFormBoundary
Content-Disposition: form-data; name="file"; filename="document.pdf"
Content-Type: application/pdf

[Binary content]
------WebKitFormBoundary--
```

### File Download

**Simple Download:**

```http
GET /files/document.pdf HTTP/1.1
Host: example.com

Response:
HTTP/1.1 200 OK
Content-Type: application/pdf
Content-Length: 1234567
Content-Disposition: attachment; filename="document.pdf"

[Binary content]
```

**Resumable Download:**

```http
Request:
GET /files/large-file.zip HTTP/1.1
Range: bytes=0-1048575

Response:
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1048575/10485760
Content-Length: 1048576

[Partial content]
```

### CORS (Cross-Origin Resource Sharing)

**Preflight Request:**

```http
OPTIONS /api/data HTTP/1.1
Host: api.example.com
Origin: https://www.example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type

Response:
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://www.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type
Access-Control-Max-Age: 86400
```

**Actual Request:**

```http
POST /api/data HTTP/1.1
Host: api.example.com
Origin: https://www.example.com
Content-Type: application/json

{"data": "value"}

Response:
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://www.example.com
Content-Type: application/json

{"result": "success"}
```

### Server-Sent Events (SSE)

```http
Request:
GET /events HTTP/1.1
Host: example.com
Accept: text/event-stream

Response:
HTTP/1.1 200 OK
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive

data: {"message": "Hello"}

data: {"message": "World"}

event: custom
data: {"type": "custom event"}
```

### WebSocket Upgrade

```http
Request:
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

Response:
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

### Rate Limiting

```http
Response:
HTTP/1.1 429 Too Many Requests
Retry-After: 3600
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1698672000

{
  "error": "Rate limit exceeded",
  "retry_after": 3600
}
```

### Pagination

**Offset-based:**

```http
GET /api/users?offset=20&limit=10 HTTP/1.1

Response:
{
  "data": [...],
  "pagination": {
    "offset": 20,
    "limit": 10,
    "total": 150
  }
}
```

**Cursor-based:**

```http
GET /api/users?cursor=abc123&limit=10 HTTP/1.1

Response:
{
  "data": [...],
  "pagination": {
    "next_cursor": "def456",
    "has_more": true
  }
}
```

**Link Header (RFC 5988):**

```http
Link: <https://api.example.com/users?page=3>; rel="next",
      <https://api.example.com/users?page=1>; rel="first",
      <https://api.example.com/users?page=10>; rel="last"
```

---

## Best Practices

### URL Design

✅ **Good:**

```
/users
/users/123
/users/123/posts
/products?category=electronics&sort=price
```

❌ **Bad:**

```
/getUsers
/user.php?id=123
/deleteUser123
/PRODUCTS
```

**Guidelines:**

- Use nouns, not verbs
- Use plural for collections
- Use hyphens for readability: `/user-profiles`
- Keep URLs lowercase
- Be consistent

### HTTP Method Selection

| Operation      | HTTP Method | Example             |
| -------------- | ----------- | ------------------- |
| Read           | GET         | `GET /users/123`    |
| Create         | POST        | `POST /users`       |
| Full Update    | PUT         | `PUT /users/123`    |
| Partial Update | PATCH       | `PATCH /users/123`  |
| Delete         | DELETE      | `DELETE /users/123` |

### Status Code Selection

**Success:**

- `200 OK`: Standard success
- `201 Created`: Resource created (include Location header)
- `204 No Content`: Success with no response body

**Client Errors:**

- `400 Bad Request`: Invalid syntax or validation error
- `401 Unauthorized`: Authentication required
- `403 Forbidden`: Authenticated but not authorized
- `404 Not Found`: Resource doesn't exist
- `409 Conflict`: Resource state conflict

**Server Errors:**

- `500 Internal Server Error`: Generic server error
- `503 Service Unavailable`: Temporary unavailability

### Error Responses

**Structured error format:**

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email format is invalid"
      }
    ]
  }
}
```

### Versioning

**URI Versioning:**

```
/api/v1/users
/api/v2/users
```

**Header Versioning:**

```http
Accept: application/vnd.example.v2+json
```

**Query Parameter:**

```
/api/users?version=2
```

### Security Best Practices

1. **Always use HTTPS** in production
2. **Validate all inputs** (never trust client data)
3. **Use proper authentication** (OAuth 2.0, JWT)
4. **Implement rate limiting**
5. **Set security headers** (CSP, HSTS, etc.)
6. **Use HttpOnly, Secure cookies**
7. **Implement CORS properly**
8. **Keep dependencies updated**
9. **Log security events**
10. **Don't expose sensitive data** in URLs or errors

### Caching Strategy

**Static Assets:**

```http
Cache-Control: public, max-age=31536000, immutable
```

**API Responses (short-lived):**

```http
Cache-Control: private, max-age=300
```

**No caching:**

```http
Cache-Control: no-store
```

### Compression

**Enable compression for text:**

```http
Content-Encoding: gzip
```

**Request compression:**

```http
Accept-Encoding: gzip, deflate, br
```

### Connection Management

- Use persistent connections (HTTP/1.1+)
- Enable HTTP/2 for multiplexing
- Consider HTTP/3 for improved performance
- Set appropriate timeouts
- Use connection pooling on client

### Documentation

- Document all endpoints
- Include example requests/responses
- Specify required/optional parameters
- Document error codes
- Provide authentication details
- Version your documentation

### Monitoring and Logging

**Log important information:**

- Request method and URI
- Status codes
- Response times
- Error details
- Authentication attempts
- Rate limit violations

**Monitor metrics:**

- Request rate
- Error rate
- Response times (p50, p95, p99)
- Bandwidth usage
- Cache hit ratio

---

## Conclusion

HTTP is the foundation of web communication, and understanding its intricacies is crucial for modern web development. From basic request-response cycles to advanced features like HTTP/2 multiplexing and HTTP/3's QUIC protocol, HTTP continues to evolve to meet the demands of increasingly complex web applications.

Key takeaways:

- HTTP is stateless, text-based, and follows client-server architecture
- Modern HTTP includes powerful features like caching, compression, and multiplexing
- Security through HTTPS and proper headers is essential
- RESTful design principles create intuitive, maintainable APIs
- HTTP/2 and HTTP/3 offer significant performance improvements
- Best practices ensure reliable, secure, and efficient applications

As web technologies continue to advance, HTTP remains the cornerstone of internet communication, adapting and improving to support the next generation of web applications.

---

## Additional Resources

**Specifications:**

- RFC 9110: HTTP Semantics
- RFC 9111: HTTP Caching
- RFC 9112: HTTP/1.1
- RFC 9113: HTTP/2
- RFC 9114: HTTP/3
- RFC 6265: HTTP State Management (Cookies)

**Tools:**

- cURL: Command-line HTTP client
- Postman: API development and testing
- Wireshark: Network protocol analyzer
- Chrome DevTools: Browser network inspector
- HTTPie: User-friendly HTTP client

**Further Reading:**

- MDN Web Docs: Comprehensive HTTP documentation
- HTTP/2 Explained (Daniel Stenberg)
- RESTful Web Services (Leonard Richardson)
- Web Performance in Action (Jeremy Wagner)

---

_Document created: October 30, 2025_
_HTTP Technology Reference Guide_
