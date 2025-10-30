# HTTP Status Codes - Comprehensive Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Status Code Categories](#status-code-categories)
3. [1xx Informational Responses](#1xx-informational-responses)
4. [2xx Success](#2xx-success)
5. [3xx Redirection](#3xx-redirection)
6. [4xx Client Errors](#4xx-client-errors)
7. [5xx Server Errors](#5xx-server-errors)
8. [Best Practices](#best-practices)

---

## Introduction

HTTP status codes are three-digit numbers returned by a server in response to a client's request. They provide information about the result of the request and help in debugging and understanding server-client communication.

The first digit of the status code defines the class of response:

- **1xx**: Informational - Request received, continuing process
- **2xx**: Success - The action was successfully received, understood, and accepted
- **3xx**: Redirection - Further action needs to be taken to complete the request
- **4xx**: Client Error - The request contains bad syntax or cannot be fulfilled
- **5xx**: Server Error - The server failed to fulfill an apparently valid request

---

## Status Code Categories

### Format

```
[Status Code] [Status Text]
```

Example: `200 OK`

---

## 1xx Informational Responses

These status codes indicate that the request was received and understood, and that the client should continue the process or wait for further response.

### 100 Continue

**Meaning**: The server has received the request headers, and the client should proceed to send the request body.

**Use Case**: Used when a client needs to send a large request body and wants to check if the server will accept it before sending.

**Example Scenario**:

```
POST /upload HTTP/1.1
Expect: 100-continue
```

### 101 Switching Protocols

**Meaning**: The server is switching protocols as requested by the client.

**Use Case**: Often used when upgrading from HTTP to WebSocket.

**Example Scenario**:

```
Upgrade: websocket
Connection: Upgrade
```

### 102 Processing (WebDAV)

**Meaning**: The server has received and is processing the request, but no response is available yet.

**Use Case**: Used for long-running operations to prevent the client from timing out.

### 103 Early Hints

**Meaning**: Used to return some response headers before the final HTTP message.

**Use Case**: Allows the client to preload resources while the server prepares a response.

**Example Scenario**: Sending Link headers to preload CSS/JS resources.

---

## 2xx Success

These status codes indicate that the client's request was successfully received, understood, and accepted.

### 200 OK

**Meaning**: The request has succeeded.

**Use Case**: Standard response for successful HTTP requests. The actual response will depend on the request method used:

- **GET**: The resource has been fetched and is transmitted in the response body
- **POST**: The resource describing or containing the result of the action is transmitted
- **PUT**: The resource has been updated
- **DELETE**: The resource has been deleted

**Example Response**:

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "John Doe"
  }
}
```

### 201 Created

**Meaning**: The request has been fulfilled and resulted in a new resource being created.

**Use Case**: Typically returned after a successful POST request that creates a new resource.

**Headers**: Should include a `Location` header with the URI of the newly created resource.

**Example**:

```
HTTP/1.1 201 Created
Location: /api/users/123
Content-Type: application/json

{
  "id": 123,
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

### 202 Accepted

**Meaning**: The request has been accepted for processing, but the processing has not been completed.

**Use Case**: Used for asynchronous operations where the request is queued for processing.

**Example Scenario**: Batch processing, sending emails, generating reports.

**Example Response**:

```json
{
  "status": "accepted",
  "message": "Your request is being processed",
  "trackingId": "abc-123-def-456"
}
```

### 203 Non-Authoritative Information

**Meaning**: The server successfully processed the request, but is returning information from a third-party source.

**Use Case**: Response from a proxy or cache that has modified the original response.

### 204 No Content

**Meaning**: The server successfully processed the request, but is not returning any content.

**Use Case**:

- Successful DELETE request
- PUT/PATCH request where no response body is needed
- Form submission that doesn't require a response page

**Example**:

```
HTTP/1.1 204 No Content
```

### 205 Reset Content

**Meaning**: The server successfully processed the request, and the client should reset the document view.

**Use Case**: After a form submission, telling the browser to clear the form.

### 206 Partial Content

**Meaning**: The server is delivering only part of the resource due to a range header sent by the client.

**Use Case**:

- Resumable downloads
- Video/audio streaming
- Large file downloads

**Example**:

```
HTTP/1.1 206 Partial Content
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
```

### 207 Multi-Status (WebDAV)

**Meaning**: The message body contains information about multiple resources in situations where multiple status codes might be appropriate.

**Use Case**: WebDAV operations on multiple resources.

### 208 Already Reported (WebDAV)

**Meaning**: The members of a DAV binding have already been enumerated and are not being included again.

### 226 IM Used

**Meaning**: The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

---

## 3xx Redirection

These status codes indicate that further action needs to be taken by the client to complete the request.

### 300 Multiple Choices

**Meaning**: The request has more than one possible response.

**Use Case**: The client should choose one of the available resources.

**Example**: Multiple file formats available (HTML, JSON, XML).

### 301 Moved Permanently

**Meaning**: The requested resource has been permanently moved to a new URL.

**Use Case**:

- Website restructuring
- Permanent URL changes
- HTTP to HTTPS migration

**SEO Impact**: Search engines will update their indexes to the new URL.

**Example**:

```
HTTP/1.1 301 Moved Permanently
Location: https://www.example.com/new-page
```

### 302 Found (Previously "Moved Temporarily")

**Meaning**: The requested resource temporarily resides under a different URL.

**Use Case**:

- Temporary redirects
- A/B testing
- Maintenance pages

**Note**: The original URL should continue to be used for future requests.

**Example**:

```
HTTP/1.1 302 Found
Location: https://www.example.com/temp-page
```

### 303 See Other

**Meaning**: The response to the request can be found under another URL using GET.

**Use Case**:

- After POST request submission, redirect to a result page
- Prevents duplicate form submissions

**Example**:

```
HTTP/1.1 303 See Other
Location: https://www.example.com/thank-you
```

### 304 Not Modified

**Meaning**: The resource has not been modified since the version specified by the request headers.

**Use Case**:

- Caching mechanism
- Reduces bandwidth usage
- Improves performance

**Example**:

```
Request:
If-Modified-Since: Wed, 21 Oct 2023 07:28:00 GMT

Response:
HTTP/1.1 304 Not Modified
```

### 305 Use Proxy (Deprecated)

**Meaning**: The requested resource must be accessed through a proxy.

**Note**: Deprecated due to security concerns.

### 306 (Unused)

**Meaning**: This status code is no longer used, but the code is reserved.

### 307 Temporary Redirect

**Meaning**: The request should be repeated with another URL, but future requests should still use the original URL.

**Use Case**: Similar to 302, but guarantees that the request method and body will not be changed.

**Example**:

```
HTTP/1.1 307 Temporary Redirect
Location: https://www.example.com/temp-location
```

### 308 Permanent Redirect

**Meaning**: The resource is now permanently located at another URL, and the request method should not change.

**Use Case**: Similar to 301, but preserves the HTTP method (POST remains POST).

**Example**:

```
HTTP/1.1 308 Permanent Redirect
Location: https://www.example.com/new-permanent-location
```

---

## 4xx Client Errors

These status codes indicate that the client seems to have made an error.

### 400 Bad Request

**Meaning**: The server cannot process the request due to client error (malformed syntax, invalid request message, etc.).

**Use Case**:

- Invalid JSON syntax
- Missing required parameters
- Invalid data format

**Example Response**:

```json
{
  "error": "Bad Request",
  "message": "Invalid JSON format in request body",
  "statusCode": 400
}
```

### 401 Unauthorized

**Meaning**: Authentication is required and has failed or has not been provided.

**Use Case**:

- Missing authentication credentials
- Invalid credentials
- Expired authentication token

**Headers**: Should include `WWW-Authenticate` header.

**Example**:

```
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer realm="example"

{
  "error": "Unauthorized",
  "message": "Authentication required"
}
```

### 402 Payment Required

**Meaning**: Reserved for future use.

**Note**: Originally intended for digital payment systems, but not widely used in practice.

**Use Case**: Some APIs use this for rate limiting or payment-required features.

### 403 Forbidden

**Meaning**: The client does not have access rights to the content.

**Use Case**:

- Authenticated but lacks permissions
- IP address blocked
- Access to restricted resource

**Difference from 401**: The client's identity is known, but they lack permission.

**Example Response**:

```json
{
  "error": "Forbidden",
  "message": "You do not have permission to access this resource",
  "statusCode": 403
}
```

### 404 Not Found

**Meaning**: The server cannot find the requested resource.

**Use Case**:

- URL doesn't exist
- Resource has been deleted
- Incorrect URL path

**Example Response**:

```json
{
  "error": "Not Found",
  "message": "The requested resource does not exist",
  "statusCode": 404
}
```

### 405 Method Not Allowed

**Meaning**: The request method is known by the server but is not supported by the target resource.

**Use Case**:

- Using POST when only GET is allowed
- Using DELETE on a read-only resource

**Headers**: Must include an `Allow` header listing supported methods.

**Example**:

```
HTTP/1.1 405 Method Not Allowed
Allow: GET, POST

{
  "error": "Method Not Allowed",
  "message": "DELETE method is not supported for this endpoint"
}
```

### 406 Not Acceptable

**Meaning**: The server cannot produce a response matching the list of acceptable values defined in the request's content negotiation headers.

**Use Case**:

- Client requests XML but server only provides JSON
- Accept-Language mismatch

**Example**:

```
Request:
Accept: application/xml

Response:
HTTP/1.1 406 Not Acceptable
Content-Type: application/json

{
  "error": "Not Acceptable",
  "message": "This endpoint only supports application/json"
}
```

### 407 Proxy Authentication Required

**Meaning**: Similar to 401, but authentication must be done by a proxy.

**Use Case**: When accessing resources through a proxy that requires authentication.

### 408 Request Timeout

**Meaning**: The server timed out waiting for the request.

**Use Case**:

- Client took too long to send the request
- Slow network connection
- Large file upload that exceeded timeout

### 409 Conflict

**Meaning**: The request conflicts with the current state of the server.

**Use Case**:

- Duplicate resource creation
- Concurrent modification conflicts
- Version conflicts

**Example Response**:

```json
{
  "error": "Conflict",
  "message": "A user with this email already exists",
  "statusCode": 409
}
```

### 410 Gone

**Meaning**: The requested resource is no longer available and will not be available again.

**Use Case**:

- Resource has been permanently deleted
- Content has been removed intentionally

**Difference from 404**: 410 indicates the absence is permanent and intentional.

### 411 Length Required

**Meaning**: The server refuses to accept the request without a defined `Content-Length` header.

**Use Case**: POST/PUT requests that require the Content-Length header.

### 412 Precondition Failed

**Meaning**: One or more conditions in the request header fields evaluated to false.

**Use Case**:

- Conditional requests using `If-Match`, `If-None-Match`, `If-Modified-Since`
- Optimistic locking mechanisms

**Example**:

```
Request:
If-Match: "123456"

Response:
HTTP/1.1 412 Precondition Failed
ETag: "789012"
```

### 413 Payload Too Large

**Meaning**: The request entity is larger than limits defined by the server.

**Use Case**:

- File upload exceeds size limit
- Request body too large

**Example Response**:

```json
{
  "error": "Payload Too Large",
  "message": "File size exceeds the 10MB limit",
  "maxSize": "10MB"
}
```

### 414 URI Too Long

**Meaning**: The URI provided was too long for the server to process.

**Use Case**:

- Too many query parameters
- Extremely long URLs

**Solution**: Use POST instead of GET with body parameters.

### 415 Unsupported Media Type

**Meaning**: The media format of the requested data is not supported by the server.

**Use Case**:

- Sending JSON when server expects form data
- Incorrect Content-Type header

**Example**:

```
Request:
Content-Type: application/xml

Response:
HTTP/1.1 415 Unsupported Media Type

{
  "error": "Unsupported Media Type",
  "message": "This endpoint only accepts application/json"
}
```

### 416 Range Not Satisfiable

**Meaning**: The range specified by the Range header field in the request cannot be fulfilled.

**Use Case**:

- Requested byte range is outside the file size
- Invalid range syntax

### 417 Expectation Failed

**Meaning**: The expectation given in the Expect request header could not be met.

**Use Case**: When the `Expect: 100-continue` cannot be satisfied.

### 418 I'm a Teapot

**Meaning**: An April Fools' joke from 1998. The server refuses to brew coffee because it is a teapot.

**Note**: Defined in RFC 2324 (Hyper Text Coffee Pot Control Protocol).

**Use Case**: Sometimes used humorously or as an Easter egg.

### 421 Misdirected Request

**Meaning**: The request was directed at a server that is not able to produce a response.

**Use Case**: HTTP/2 server that cannot produce a response for the request.

### 422 Unprocessable Entity (WebDAV)

**Meaning**: The request was well-formed but contains semantic errors.

**Use Case**:

- Validation errors
- Business logic violations
- Invalid field values

**Example Response**:

```json
{
  "error": "Unprocessable Entity",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "age",
      "message": "Age must be greater than 0"
    }
  ]
}
```

### 423 Locked (WebDAV)

**Meaning**: The resource that is being accessed is locked.

**Use Case**: WebDAV file locking mechanism.

### 424 Failed Dependency (WebDAV)

**Meaning**: The request failed because it depended on another request that failed.

### 425 Too Early

**Meaning**: The server is unwilling to risk processing a request that might be replayed.

**Use Case**: Prevents replay attacks.

### 426 Upgrade Required

**Meaning**: The client should switch to a different protocol.

**Use Case**:

- Forcing HTTPS instead of HTTP
- Upgrading to newer protocol version

**Example**:

```
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade

{
  "error": "Upgrade Required",
  "message": "Please use HTTPS"
}
```

### 428 Precondition Required

**Meaning**: The server requires the request to be conditional.

**Use Case**:

- Preventing lost update problem
- Requiring ETag or If-Match headers

### 429 Too Many Requests

**Meaning**: The user has sent too many requests in a given amount of time (rate limiting).

**Use Case**:

- API rate limiting
- DDoS protection
- Abuse prevention

**Headers**: Should include `Retry-After` header.

**Example**:

```
HTTP/1.1 429 Too Many Requests
Retry-After: 3600
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1635436800

{
  "error": "Too Many Requests",
  "message": "Rate limit exceeded. Try again in 1 hour."
}
```

### 431 Request Header Fields Too Large

**Meaning**: The server is unwilling to process the request because its header fields are too large.

**Use Case**:

- Too many cookies
- Very long headers

### 451 Unavailable For Legal Reasons

**Meaning**: The user requested a resource that is not available due to legal reasons.

**Use Case**:

- Content censored by government
- DMCA takedown
- Legal restrictions

**Example**:

```json
{
  "error": "Unavailable For Legal Reasons",
  "message": "This content is not available in your region"
}
```

---

## 5xx Server Errors

These status codes indicate that the server failed to fulfill a valid request.

### 500 Internal Server Error

**Meaning**: A generic error message when the server encounters an unexpected condition.

**Use Case**:

- Unhandled exceptions
- Application crashes
- Programming errors

**Example Response**:

```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "statusCode": 500
}
```

**Best Practice**: Log the actual error server-side but don't expose implementation details to the client.

### 501 Not Implemented

**Meaning**: The server does not support the functionality required to fulfill the request.

**Use Case**:

- Unrecognized request method
- Feature not yet implemented
- Unsupported HTTP method

### 502 Bad Gateway

**Meaning**: The server, while acting as a gateway or proxy, received an invalid response from an upstream server.

**Use Case**:

- Upstream server is down
- Invalid response from backend
- Network issues between servers

**Example Scenario**: Nginx cannot reach the application server.

### 503 Service Unavailable

**Meaning**: The server is currently unable to handle the request due to temporary overload or maintenance.

**Use Case**:

- Scheduled maintenance
- Server overload
- Database connection issues

**Headers**: Should include `Retry-After` header.

**Example**:

```
HTTP/1.1 503 Service Unavailable
Retry-After: 3600

{
  "error": "Service Unavailable",
  "message": "The service is temporarily unavailable. Please try again later."
}
```

### 504 Gateway Timeout

**Meaning**: The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server.

**Use Case**:

- Upstream server timeout
- Slow backend response
- Network latency issues

**Example Scenario**: API gateway timeout waiting for microservice response.

### 505 HTTP Version Not Supported

**Meaning**: The server does not support the HTTP protocol version used in the request.

**Use Case**: Client uses HTTP/2.0 but server only supports HTTP/1.1.

### 506 Variant Also Negotiates

**Meaning**: The server has an internal configuration error in content negotiation.

**Use Case**: Circular reference in content negotiation.

### 507 Insufficient Storage (WebDAV)

**Meaning**: The server is unable to store the representation needed to complete the request.

**Use Case**:

- Disk full
- Storage quota exceeded

### 508 Loop Detected (WebDAV)

**Meaning**: The server detected an infinite loop while processing the request.

**Use Case**: WebDAV operations with circular references.

### 510 Not Extended

**Meaning**: Further extensions to the request are required for the server to fulfill it.

### 511 Network Authentication Required

**Meaning**: The client needs to authenticate to gain network access.

**Use Case**:

- Captive portals (WiFi login pages)
- Network-level authentication required

---

## Best Practices

### For API Developers

1. **Use Appropriate Status Codes**: Choose the most specific and accurate status code for each situation.

2. **Consistency**: Use status codes consistently across your API.

3. **Include Error Details**: Provide meaningful error messages in the response body.

   ```json
   {
     "error": "Not Found",
     "message": "User with ID 123 does not exist",
     "statusCode": 404,
     "timestamp": "2025-10-30T12:00:00Z"
   }
   ```

4. **Document Status Codes**: Clearly document which status codes your API returns and when.

5. **Handle Errors Gracefully**: Always return proper status codes even for error conditions.

6. **Rate Limiting**: Use 429 with appropriate headers (`Retry-After`, `X-RateLimit-*`).

7. **Authentication**:

   - Use 401 for missing/invalid credentials
   - Use 403 for authorization failures

8. **Validation Errors**: Use 422 for semantic validation errors, 400 for malformed requests.

### For Frontend Developers

1. **Handle Common Status Codes**:

   ```javascript
   fetch("/api/users").then((response) => {
     switch (response.status) {
       case 200:
         return response.json();
       case 401:
         redirectToLogin();
         break;
       case 403:
         showAccessDenied();
         break;
       case 404:
         showNotFound();
         break;
       case 429:
         handleRateLimit(response);
         break;
       case 500:
         showServerError();
         break;
       default:
         handleUnexpectedError();
     }
   });
   ```

2. **Implement Retry Logic**: For 503 and 429 responses with `Retry-After` header.

3. **Cache Wisely**: Respect 304 Not Modified responses.

4. **User-Friendly Messages**: Translate status codes into user-friendly error messages.

### Common Patterns

#### RESTful API CRUD Operations

| Operation      | Method | Success Code            | Error Codes        |
| -------------- | ------ | ----------------------- | ------------------ |
| Create         | POST   | 201 Created             | 400, 409, 422      |
| Read           | GET    | 200 OK                  | 404                |
| Update         | PUT    | 200 OK / 204 No Content | 400, 404, 409, 422 |
| Partial Update | PATCH  | 200 OK / 204 No Content | 400, 404, 422      |
| Delete         | DELETE | 204 No Content / 200 OK | 404                |
| List           | GET    | 200 OK                  | -                  |

#### Authentication Flow

1. Login without credentials: **401 Unauthorized**
2. Login with invalid credentials: **401 Unauthorized**
3. Login successful: **200 OK** (with token)
4. Access protected resource without token: **401 Unauthorized**
5. Access protected resource with valid token but insufficient permissions: **403 Forbidden**

#### Error Response Structure

```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested user does not exist",
    "statusCode": 404,
    "details": {
      "userId": 12345,
      "timestamp": "2025-10-30T12:00:00Z"
    }
  }
}
```

### Quick Reference Table

| Code | Name                  | Category     | Common Use                     |
| ---- | --------------------- | ------------ | ------------------------------ |
| 200  | OK                    | Success      | Standard success response      |
| 201  | Created               | Success      | Resource created               |
| 204  | No Content            | Success      | Success with no response body  |
| 301  | Moved Permanently     | Redirect     | Permanent URL change           |
| 302  | Found                 | Redirect     | Temporary redirect             |
| 304  | Not Modified          | Redirect     | Cached resource is still valid |
| 400  | Bad Request           | Client Error | Invalid request syntax         |
| 401  | Unauthorized          | Client Error | Authentication required        |
| 403  | Forbidden             | Client Error | Insufficient permissions       |
| 404  | Not Found             | Client Error | Resource doesn't exist         |
| 409  | Conflict              | Client Error | Resource conflict              |
| 422  | Unprocessable Entity  | Client Error | Validation error               |
| 429  | Too Many Requests     | Client Error | Rate limit exceeded            |
| 500  | Internal Server Error | Server Error | Generic server error           |
| 502  | Bad Gateway           | Server Error | Invalid upstream response      |
| 503  | Service Unavailable   | Server Error | Server temporarily unavailable |
| 504  | Gateway Timeout       | Server Error | Upstream timeout               |

---

## Additional Resources

- [RFC 7231 - HTTP/1.1 Semantics and Content](https://tools.ietf.org/html/rfc7231)
- [RFC 7232 - HTTP/1.1 Conditional Requests](https://tools.ietf.org/html/rfc7232)
- [RFC 7233 - HTTP/1.1 Range Requests](https://tools.ietf.org/html/rfc7233)
- [RFC 7235 - HTTP/1.1 Authentication](https://tools.ietf.org/html/rfc7235)
- [MDN Web Docs - HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

## Conclusion

Understanding HTTP status codes is crucial for building robust web applications and APIs. Proper use of status codes improves:

- **Developer Experience**: Clear communication about request outcomes
- **Debugging**: Easier to identify and fix issues
- **User Experience**: Better error handling and messaging
- **SEO**: Search engines use status codes for indexing
- **Performance**: Caching and optimization based on status codes

Always choose the most specific and appropriate status code for each situation to create clear, maintainable, and user-friendly applications.
